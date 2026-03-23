# croquetwade.com — Design Brief

## Concept: "The Future. But 1990."

Retrofuturist terminal aesthetic. Pure black and white. ASCII art as visual medium.
Not a gimmick — a real portfolio for real decision-makers, wrapped in an unforgettable aesthetic.

## References

- **thenicholasong.com** — CRT overlay, monospace everything, typewriter text, text scramble, smooth scroll, pixel-art letterforms. "Not a copy but that vibe."
- **ASCII-Motion** (github.com/CameronFoxly/Ascii-Motion) — ASCII art rendering, retro fonts. Inspiration only.
- **EGA/VGA 16-colour** — Optional limited-palette accents if pure B&W needs relief.

## Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#000000` | Background — pure black |
| `--fg` | `#FFFFFF` | Primary text — pure white |
| `--fg-dim` | `#AAAAAA` | Secondary text, metadata |
| `--fg-muted` | `#555555` | Tertiary, decorative lines |
| `--accent` | `#55FF55` | Optional EGA bright green — links, highlights (use sparingly) |

Start pure B&W. Add accent only if hierarchy demands it.

## Typography

One font family. Monospace everywhere. The constraint IS the identity.

| Token | Font | Weight | Usage |
|-------|------|--------|-------|
| `--font-body` | Sometype Mono | 400, 500 | Body text, paragraphs |
| `--font-display` | VT323 | 400 | ASCII art headers, large display text |

Both from Google Fonts. No serif/sans mixing. No secondary family.

## Atmosphere

All CSS-only. Subtle enough to be felt, not seen.

- **Scanlines** — `::before` pseudo on body, 4px repeating gradient, opacity 0.05–0.08
- **Noise/grain** — `::after` pseudo, background-position keyframe at opacity 0.03–0.05
- **No heavy flicker** — causes eye strain
- **Phosphor glow** — layered text-shadow on key headings only
- **Hidden scrollbars** — viewport = terminal screen

## Interactions

- **Typewriter reveal** — text types on scroll-into-view, 40-60ms/char, lifelike variation
- **Text scramble on hover** — links/interactive elements scramble to special chars, restore on mouseout
- **Smooth scroll** — weighted, cinematic, ~1s duration, exponential ease
- **Section fade-in** — content fades + slight translateY on scroll entry

## Visual Elements

- **ASCII art hero** — site name as large figlet-style ASCII banner
- **Section dividers** — box-drawing characters: `═══`, `───`, `░░░`
- **Terminal-style links** — `[bracket notation]` or `> prefixed`
- **Stat readouts** — terminal output format, not cards
- **ASCII art illustrations** — croquet elements (mallet, hoop, ball) as character art

## Layout

- Single column, max-width ~720px, centred
- Generous vertical spacing between sections
- Mobile-first — nothing breaks at 375px
- No persistent nav bar — content IS the interface
- Small anchor links at top/bottom for section jumping

## What This Is NOT

- Not a terminal emulator (no typing commands)
- Not a joke or novelty
- Not a CSS framework wrapper
- Not the CAQ community aesthetic (no maroon, no cream, no green backgrounds)
