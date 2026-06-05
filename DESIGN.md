---
name: Diamond D Pool Services
description: East Texas pool maintenance and repair website
colors:
  teal: "#0fa8b5"
  teal-dark: "#0a8f9b"
  ink: "#0f0f0e"
  ink-mid: "#525249"
  ink-light: "#6a6a62"
  ink-xlight: "#9a9990"
  bg: "#fafaf8"
  bg-soft: "#f4f4f0"
  bg-dark: "#0d0d0d"
  bg-darker: "#080808"
  border: "#e8e8e2"
  border-mid: "#ccccc4"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2.6rem, 7vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2.1rem, 4.5vw, 3.8rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 700
    letterSpacing: "0.18em"
rounded:
  sharp: "2px"
  sm: "4px"
  full: "9999px"
spacing:
  section: "152px"
  section-sm: "88px"
  container-x: "48px"
  card-pad: "52px 44px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sharp}"
    padding: "15px 32px"
  button-primary-hover:
    backgroundColor: "{colors.teal}"
    textColor: "#ffffff"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "15px 32px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "rgba(255,255,255,0.85)"
    rounded: "{rounded.sharp}"
    padding: "15px 28px"
  button-teal:
    backgroundColor: "{colors.teal}"
    textColor: "#ffffff"
    rounded: "{rounded.sharp}"
    padding: "15px 32px"
---

# Design System: Diamond D Pool Services

## 1. Overview

**Creative North Star: "The Clear Pool Standard"**

Diamond D Pool Services' visual system is built around one idea: nothing cloudy, nothing vague. The design is as direct as the service itself. Every typographic choice, every spacing decision, every color application should reflect a business that knows exactly what it does and does it without drama. The warmth lives in specificity, not in decorative softness.

The palette is restrained: near-white and near-black carry the structure, with a single teal accent that earns every pixel it occupies. The typography pairs a classical serif (display) against a geometric sans (body) for a contrast axis that reads as authoritative without being cold. Motion is purposeful and earned, most at home in the hero sequence; scroll-reveal animations serve orientation, not entertainment.

This system explicitly rejects the four failure modes in the brief: the blue-and-white franchise look, the over-designed luxury-spa aesthetic, the dated local contractor web presence, and the pushy lead-gen site. A visitor should feel informed and at ease, not sold at.

**Key Characteristics:**
- Near-white ground with near-black ink: high contrast, no warm-neutral beige
- One accent color, used sparingly outside the hero
- Instrument Serif for display, Epilogue for everything functional
- Section spacing generous and variable: rhythm through breathing room, not decoration
- Sharp edges (2px radius) communicate precision, not softness
- GSAP scroll-driven animations at the hero level; CSS transitions everywhere else

## 2. Colors: The Clear Pool Palette

One saturated accent on a neutral field. The teal is a physical color — the color of treated pool water seen through sunlight — not a brand-palette choice.

### Primary
- **Pool Teal** (`#0fa8b5`): The single accent. Used for interactive states, trust indicators, teal hairlines on hover, and the hero finale sequence. Never used for body text. Never used decoratively on every section. Its rarity is intentional.
- **Pool Teal Deep** (`#0a8f9b`): Hover and active state for teal elements.

### Neutral
- **Near-Black Ink** (`#0f0f0e`): Primary text, filled buttons, nav when scrolled. Near-black (not pure #000000) — the subtlety reads as deliberate.
- **Mid Ink** (`#525249`): Body paragraph text. ~4.5:1 contrast on the off-white background — do not lighten further.
- **Light Ink** (`#6a6a62`): Secondary labels, nav links, form sub-text. Verified at ≥4.5:1 on `#fafaf8`.
- **Xlight Ink** (`#9a9990`): Decorative use only (card number counters, ornamental rules). Never for readable text.
- **Off-White Ground** (`#fafaf8`): Primary page background. A genuine off-white with near-zero chroma — not sand, not cream, not warm-tinted.
- **Soft Surface** (`#f4f4f0`): Secondary section backgrounds (`why` section, `area` section). 1 step darker than ground.
- **Dark Ground** (`#0d0d0d`): Estimate form section, hero background. Creates the dark/light contrast flip for the form.
- **Footer Ground** (`#080808`): Footer only. 1 step darker than dark ground.
- **Border Light** (`#e8e8e2`): Hairline borders on cards, dividers, section separators.
- **Border Mid** (`#ccccc4`): Stronger borders on interactive elements, outline buttons.

**The One Accent Rule.** Pool Teal appears on ≤10% of any light-background screen. It is never used as a background on a content section. On dark sections (estimate form, hero), it leads: as the CTA button, as the teal-tinted heading accent, as the rule line. The contrast flip earns the more prominent teal use.

**The No-Glow Rule.** Colored `box-shadow` glows (e.g. `box-shadow: 0 6px 28px rgba(15,168,181,0.4)`) are prohibited. Shadows are tinted toward the ink color or neutral black, never toward the accent. The teal's job is on-surface; glows turn it into decoration.

## 3. Typography

**Display Font:** Instrument Serif (italic variant at home in headlines), Georgia, serif
**Body Font:** Epilogue, system-ui, sans-serif

**Character:** A contrast pair on the serif/sans axis. Instrument Serif brings a controlled classicism that reads as "this company has been around," while Epilogue's geometric clarity handles everything functional — labels, nav, buttons, form elements. They never compete because each has a clear domain.

### Hierarchy
- **Display** (weight 400, `clamp(2.6rem, 7vw, 5.5rem)`, line-height 1.06, letter-spacing -0.04em): Hero h1 and hero finale text only. Often uses italic for the emotional word ("Trusted", "Started?").
- **Headline** (weight 400, `clamp(2.1rem, 4.5vw, 3.8rem)`, line-height 1.06, letter-spacing -0.04em): Section h2 headings. Italic `<em class="serif-italic">` applies Pool Teal + italic for the emotionally weighted phrase.
- **Title** (weight 400, `clamp(1.2rem, 2.2vw, 1.6rem)`, line-height 1.2, letter-spacing -0.025em): h3 in service cards, why-items. No italic at this scale.
- **Body** (Epilogue 400, 1rem, line-height 1.8, color `--ink-mid`): Paragraph text throughout. Max 65–75ch. Sits at `--ink-mid` (#525249) — never lightened to `--ink-light`.
- **Label** (Epilogue 700, 10–11px, letter-spacing 0.18–0.26em, uppercase): Button text, nav links, section eyebrow (used sparingly), contact card category labels, form field labels. The only role where all-caps is permitted.

**The Scale Floor Rule.** The minimum type size in any interactive element is 11px (button text, nav links). Below 11px, text is decorative only. On mobile, no interactive text drops below 13px.

**The Italic Doctrine.** Instrument Serif italic appears exclusively on the emotionally weighted phrase within a headline — the part that answers "what specifically makes this feel right." One italic phrase per heading, never the entire heading.

## 4. Elevation

This system is flat by default. Surfaces are distinguished by background color shift (off-white to soft-white, or light to dark), not by shadow elevation. Cards exist where elevation is semantically justified (testimonial cards as distinct objects, the estimate form as a raised input surface). Decorative cards are never nested.

### Shadow Vocabulary
- **Ambient Low** (`0 1px 4px rgba(15,15,14,0.06), 0 4px 16px rgba(15,15,14,0.04)`): Resting testimonial cards. Barely perceptible.
- **Ambient Mid** (`0 4px 24px rgba(15,15,14,0.09), 0 1px 4px rgba(15,15,14,0.05)`): Testimonial cards on hover. The lift is social — it responds to cursor attention.
- **Ambient High** (`0 8px 40px rgba(15,15,14,0.12), 0 2px 8px rgba(15,15,14,0.06)`): Reserved; currently unused in default states.

Shadows are tinted toward `rgba(15,15,14,...)` — slightly warmer than pure black, matching the ink system. No colored glows.

**The Flat-By-Default Rule.** Service cards and why-items use background-color shift and hairline border changes for hover state. They do not lift. Shadow is reserved for objects that are genuinely elevated (testimonials, modals, the sticky nav).

## 5. Components

### Buttons

Four variants, each with a specific domain.

- **Shape:** Sharp (2px radius on all variants). The sharp edge matches the precise, no-nonsense brand.
- **Primary** (ink bg / white text, 15px 32px padding): Main CTA. On hover, Pool Teal sweeps in from left via `::after` pseudo-element — tactile feedback without lift. Letter-spacing 0.13em, uppercase, 11px, weight 700.
- **Outline** (transparent bg / ink text / border-mid border): Secondary CTA on light backgrounds. On hover, fills to ink bg.
- **Ghost** (transparent bg / white text / rgba(255,255,255,0.3) border): Used exclusively on dark backgrounds (hero finale, estimate section CTAs). On hover, border brightens.
- **Teal** (teal bg / white text): Used sparingly on dark backgrounds where primary contrast is needed. Nav CTA on light background also transitions from white to teal on hover.

Buttons use `cubic-bezier(0.22,1,0.36,1)` for transform transitions (ease-out-quint). No bounce easing.

### Cards

Two types, each justified by function.

**Service Cards:** Grid of 6, shared borders (no individual card borders), padding 52px 44px. On hover: background shifts to `--bg-soft`, teal 1px hairline sweeps from left via `::after`. Card counter (01–06) appears in `--border-mid` serif type at top-right — fades in to `--ink-light` on hover. The grid is the container, not individual boxes.

**Testimonial Cards:** Individual cards with `--border` hairline, `--radius-md` (4px) corners, `--shadow-sm` resting shadow. On hover: border shifts toward teal-tinted rgba, `--shadow-md`, translateY(-3px). The large serif quotation mark (`\201C`) decorates at 5.5rem with 6% teal opacity.

**The No-Nesting Rule.** Cards never contain other cards. Section-level groupings use background color, not wrapper cards.

### Navigation

Fixed position, full-width. Two states:

- **Default (over hero):** transparent background, white text at 58% opacity, white CTA button. All elements assume dark image below.
- **Scrolled:** `backdrop-filter: blur(24px) saturate(1.5)`, off-white background at 97% opacity, ink text, ink CTA button. Padding compresses from 22px to 10px. 1px border-bottom.

Logo: Instrument Serif wordmark + Epilogue 8px uppercase sub-label. Mobile: hamburger toggle opens slide-in panel from right (min(320px, 85vw)), with backdrop overlay.

Mobile float call button: Pool Teal FAB (56px × 56px, circular), fixed bottom-right. Shows only on mobile.

### Form Inputs (Estimate Section)

Underline-only style: no outer border, border-bottom at rgba(255,255,255,0.12) on dark background. On focus, border-bottom transitions to Pool Teal. Label: 10px Epilogue 700, uppercase, letter-spacing 0.18em, rgba(255,255,255,0.35). Placeholder: rgba(255,255,255,0.18). Transparent background throughout.

Form error messages appear below the field (12px, #ef4444). Required field asterisk in Pool Teal, aria-hidden.

### Trust Bar (Signature Component)

Horizontal strip below the hero. 4 trust signals (icon + title + subtitle). Dividers are 1px vertical rules. On hover of the bar, all items dim to 50% opacity; hovered item returns to full opacity. The inset shadow at the top uses two layers of Pool Teal at low opacity (`inset 0 2px 0 0 var(--teal), inset 0 3px 0 0 rgba(15,168,181,0.12)`) to create a teal hairline top border effect.

### Section Labels (Eyebrow, Restricted Use)

The `section-label` class creates a Pool Teal uppercase tracked label flanked by 18px hairline rules. Used deliberately on 1–2 sections per page, not as default section scaffolding. Overuse is prohibited. The estimate form section is the primary candidate on the homepage (dark surface, label helps orient before the CTA).

## 6. Do's and Don'ts

### Do:
- **Do** use `--ink-mid` (#525249) for all body paragraph text. Contrast is 4.5:1 against `--bg`; this is the floor.
- **Do** use `cubic-bezier(0.22,1,0.36,1)` (ease-out-quint) for all transform transitions. This is the project-wide motion standard.
- **Do** use `transform: scaleX()` for animated line/rule reveals. Never `transition: width`.
- **Do** use `body.js-loaded` as the CSS guard for GSAP initial states — elements default to visible; JS hides and animates them. Prevents invisible content on slow connections.
- **Do** use Pool Teal for one accent phrase per headline using `<em class="serif-italic">`. One italic phrase, never the full heading.
- **Do** tint all box-shadows toward `rgba(15,15,14,...)` — the near-black ink color. Shadows match the ground.
- **Do** replace em-dashes with commas, colons, or periods. Em-dashes are prohibited in all body copy.

### Don't:
- **Don't** use colored glows: `box-shadow` values with teal/colored rgba at significant opacity are prohibited. They read as AI-generated dark-mode decoration.
- **Don't** put a `section-label` eyebrow above every section heading. More than 2 per page is AI grammar. Let headings carry hierarchy themselves.
- **Don't** use `cubic-bezier(0.34,1.56,0.64,1)` or any spring/bounce easing. The brand personality is expert and calm, not playful.
- **Don't** use `transition: width` or any layout-property animation. Animate `transform` and `opacity` only.
- **Don't** use generic franchise pool service aesthetics: blue-and-white corporate color schemes, stock photography of smiling technicians in polo shirts, "Professional · Licensed · Insured" badge clusters.
- **Don't** use overdesigned luxury-spa aesthetics: marble texture backgrounds, gold accents, "resort lifestyle" framing, chandelier photography.
- **Don't** use pushy lead-gen patterns: pop-up overlays, urgency countdown timers, CALL NOW in red, excessive "limited time" copy.
- **Don't** use `--ink-xlight` (#9a9990) for any readable text. It is decorative only — card counters, ornamental rules.
- **Don't** nest cards. Service cards use shared grid borders; testimonial cards are the only elevated surface.
- **Don't** put em-dashes in any user-visible copy. Replace with the appropriate punctuation (colon for "what follows is an example", comma for a clause, period to end a thought).
