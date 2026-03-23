# croquetwade.com — Design Brief (v2: Win98 Retro)

## Concept: "The Future. But 1990."

Light, nostalgic Windows 98 aesthetic. Office vibes, not hacker vibes. The Win98 chrome frames real, professional content — it's charming and memorable without being a gimmick.

**v1 (dark terminal/ASCII art) was rejected** — it looked like Claude's portfolio, not Wade's.

## Primary Reference

retro98.framer.website — Win98 chrome, light backgrounds, beveled borders, embossed panels, pixel accents.

## Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#008080` | Teal — classic Win98 desktop |
| `--bg-panel` | `#c0c0c0` | Silver — panel/window frame |
| `--bg-window` | `#ffffff` | White — content area |
| `--bg-titlebar` | `#000080` | Navy — active window titlebar |
| `--fg` | `#000000` | Black — primary text |
| `--fg-dim` | `#444444` | Dark gray — secondary text |
| `--fg-muted` | `#808080` | Gray — tertiary, meta text |

## Typography

| Font | Usage |
|------|-------|
| Handjet (bold) | Headlines, window titles |
| Inter | Body text |
| VT323 | Stat readouts, mono elements |

## Key Components

- **Window panels** — 4-layer beveled box-shadow, navy titlebar with decorative buttons
- **Recessed panels** — inverted bevel for stat readouts
- **Win98 buttons** — raised bevel, sunken on :active
- **Taskbar** — fixed footer with Start button, section links, live clock
- **Custom scrollbar** — Win98-style silver with beveled thumb

## Layout

- Single column, max-width 780px, centred on teal desktop
- Each project in its own window panel
- Hybrid structure: scroll home + 3 deep-dive pages
- Minimal nav — taskbar at bottom, anchor links
