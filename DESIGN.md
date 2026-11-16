# Design System & Architecture Guidelines (`danielsolarte.co`)

This document defines the visual language, SCSS architecture, component patterns, and asset conventions for **Daniel Solarte's** portfolio. Use this as the source of truth when adding new sections, components, or pages.

---

## 1. Visual Direction & Theme

- **Aesthetic**: Dark-mode glassmorphism with subtle ambient radial light orbs and crisp monospace accents.
- **Mood**: Technical, modern, high-contrast, and lightweight.
- **Color Scheme**: `dark` (`color-scheme: dark`).

### Color Palette (`src/styles/_variables.scss`)

| Token | Value | Usage |
| --- | --- | --- |
| `$bg-body` | `#080c14` | Primary page background |
| `$bg-surface` | `#0b101b` | Browser/terminal mock headers, elevated dark panels |
| `$bg-surface-alt` | `#101726` | Navigation pill container, secondary surfaces |
| `$bg-card` | `rgba(17, 24, 39, 0.65)` | Glassmorphic card background |
| `$bg-input` | `#141c2e` | Form inputs and textareas |
| `$bg-footer` | `#070a10` | Site footer background |
| `$brand-teal` | `#14b8a6` (`#2dd4bf` light) | Primary brand accent, active states, links |
| `$brand-cyan` | `#06b6d4` | Secondary gradient & accent |
| `$brand-emerald` | `#10b981` | Status indicator, success/passed states |
| `$brand-purple` | `#a855f7` | Mobile category accent |
| `$brand-amber` | `#f59e0b` | Data & Analytics category accent |
| `$brand-blue` | `#3b82f6` | DevOps & Tooling category accent |
| `$brand-indigo` | `#6366f1` | Stat highlight accent |
| `$text-primary` | `#ffffff` | Headings and high-emphasis text |
| `$text-base` | `#e2e8f0` | Default body text |
| `$text-secondary` | `#cbd5e1` | Paragraphs, descriptions |
| `$text-muted` | `#94a3b8` | Labels, metadata, subtitles |
| `$text-subtle` | `#64748b` | Placeholders, timestamps |
| `$border-subtle` | `rgba(255, 255, 255, 0.07)` | Default glass card border |
| `$border-light` | `rgba(255, 255, 255, 0.08)` | Dividers, nav container, inputs |
| `$border-teal-hover` | `rgba(20, 184, 166, 0.35)` | Interactive card hover border |

---

## 2. Typography

- **Primary Sans**: `'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Monospace / Code Accent**: `'JetBrains Mono', 'Fira Code', monospace`

### Usage Rules
- **Section Eyebrows** (`01. Overview`, `02. Capabilities`, etc.): `JetBrains Mono`, `0.875rem`, uppercase, `letter-spacing: 0.05em`, `$brand-teal-light`.
- **Headings**: `Inter`, `font-weight: 700`–`800`, tight tracking (`-0.025em`).
- **Tech Pills, Dates, Form Labels, Terminal UI**: `JetBrains Mono`.
- **Text Gradients**:
  - `.text-gradient-teal` / `@include mixins.text-gradient-teal`: `linear-gradient(135deg, #2dd4bf 0%, #06b6d4 100%)`.

---

## 3. Surfaces, Glassmorphism & Glows

### Glass Card (`GlassCard` component & `@include mixins.glass-card`)
- Background: `rgba(17, 24, 39, 0.65)`
- Blur: `backdrop-filter: blur(14px)` (with `-webkit-backdrop-filter: blur(14px)`)
- Border: `1px solid rgba(255, 255, 255, 0.07)`
- Hover: `border-color: rgba(20, 184, 166, 0.35)`

### Shadows & Glows
- `$shadow-glow-teal`: `0 0 35px -5px rgba(20, 184, 166, 0.35)`
- `$shadow-glow-cyan`: `0 0 40px -8px rgba(6, 182, 212, 0.35)`
- `$shadow-glass`: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`

### Ambient Background Orbs (`AmbientBackground`)
Three fixed, non-interactive (`pointer-events: none`, `z-index: -10`) blurred radial orbs provide depth without competing with foreground content.

---

## 4. Layout & Spacing

- **Container**: Centered `max-width: 80rem` (`1280px`) with responsive horizontal padding (`1rem` mobile, `1.5rem` `sm`, `2rem` `lg`).
- **Section Vertical Rhythm**: `4rem` (`64px`) top/bottom padding for standard sections; `5rem` (`80px`) for Contact CTA.
- **Border Radii**:
  - Pills / Avatars / Nav: `9999px`
  - Large Cards / Sections: `1.5rem` (`24px`)
  - Medium Cards / Modals: `1rem` (`16px`)
  - Buttons / Inputs: `0.75rem` (`12px`)
  - Tech Tags: `0.5rem` (`8px`)

### Responsive Breakpoints (`src/styles/_mixins.scss`)
- `sm`: `640px`
- `md`: `768px`
- `lg`: `1024px`
- `xl`: `1280px`

---

## 5. SCSS & Component Conventions

1. **Pure SCSS (No Tailwind)**: All styling lives in co-located `.scss` files using `@use '../../styles/variables';` and `@use '../../styles/mixins';`.
2. **BEM Naming**:
   - Block: `.heroSection` or `.glassCard`
   - Element: `.heroSection__headline`
   - Modifier: `.button--primary`, `.tagPill--cyan`
3. **Reusable UI Primitives (`src/components/ui/`)**:
   - `Button`: Supports `variant="primary" | "glass"`, `size="sm" | "md" | "lg"`, renders `<a>` when `href` is provided or `<button>` otherwise.
   - `GlassCard`: Base surface wrapper with `hoverable`, `accentBorder`, and `padding` variants.
   - `SectionHeader`: Standardized `0X. Eyebrow` + horizontal hairline + `h2` + optional subtitle and right-hand slot.
   - `TagPill`: Monospace badge with optional leading SVG icon and category color variant (`teal`, `cyan`, `emerald`, `purple`, `amber`, `blue`, `neutral`).
4. **Data Separation (`src/constants/` & `src/interfaces/`)**:
   - Keep section content (skills, projects, experience milestones, stats, navigation) in typed constants rather than hardcoding markup inside JSX.

---

## 6. Iconography & Assets

- **Asset SVG Imports (`vite-plugin-svgr`)**:
  - Import SVGs from `src/assets/devicons/*.svg?react` and `src/assets/tablericons/*.svg?react`.
  - **Skills**: Every technology in `src/constants/skills.tsx` should use its corresponding icon from `src/assets/devicons/` whenever available.
  - **Brand & Navigation Icons**: Use `src/assets/tablericons/code.svg?react` for the `</>` brand mark, `github-original.svg?react` for GitHub, `brand-linkedin.svg?react` for LinkedIn, and Tabler icons for route navigation.
- **Inline UI Icons (`src/components/ui/Icons/Icons.tsx`)**:
  - Lightweight, stroke-based (`stroke="currentColor"`, `aria-hidden="true"`) SVG components for UI actions not present in `src/assets/`.
