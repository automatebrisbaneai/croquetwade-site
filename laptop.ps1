# Wade's laptop first-time setup (croquetwade.com/laptop.ps1)
# Enables Windows' built-in remote access (OpenSSH) and authorises the
# workstation's key so CroquetClaude can drive the rest of setup remotely.
# Nothing else is installed.

if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host "Not running as admin. Right-click Start -> Terminal (Admin), then run the line again." -ForegroundColor Yellow
    return
}

$ok = Read-Host "This is Wade's laptop setup script (renames PC to WADE-BOOK, enables SSH for his workstation). Continue? (y/n)"
if ($ok -ne 'y') { Write-Host "Stopped. Nothing changed."; return }

Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0 | Out-Null
Set-Service sshd -StartupType Automatic
Start-Service sshd
try { New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22 -ErrorAction Stop | Out-Null } catch {}

$key = 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDyVZ/GN8zF6n7JQkT0r4TBMg0VyPAfBwApuoWwF2f2h wade-personal-2026-04-19'
$akf = 'C:\ProgramData\ssh\administrators_authorized_keys'
if (-not (Test-Path $akf) -or -not (Select-String -Path $akf -SimpleMatch $key -Quiet)) { Add-Content -Path $akf -Value $key }
icacls $akf /inheritance:r /grant 'Administrators:F' /grant 'SYSTEM:F' | Out-Null

if ($env:COMPUTERNAME -ne 'WADE-BOOK') { Rename-Computer -NewName 'WADE-BOOK' -Force | Out-Null }

$ips = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike '169.*' -and $_.IPAddress -ne '127.0.0.1' }).IPAddress -join ', '
Write-Host ""
Write-Host ("READY: " + $env:COMPUTERNAME + " as " + $env:USERNAME + " @ " + $ips) -ForegroundColor Green
Write-Host "Tell Claude the READY line above. Done here."
