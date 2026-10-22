# CAMoS 2027 Website Design System

The implemented and authoritative visual reference is available at `/design-system` in local development (`npm run dev`). That route is internal and is excluded from the production build artifact.

## Direction

The requested visual reference is the NOMS 2027 conference site. CAMoS follows that **type of conference hierarchy** rather than copying its identity: institutional top bar, conference masthead, blue navigation, place-based hero, content + sidebar pages, restrained components, administrative tables and a dark footer.

## Tokens

- Institutional navy: `#071B2F`, `#0B2D4D`
- Conference/IEEE-like blue: `#00629B`
- Automation: `#13855B`
- Mobile Systems: `#D86A1F`
- Connectivity: `#0A73B7`
- Soft surface: `#F5F8FA`
- Border: `#D7E0E7`
- Maximum container: `1180px`
- Desktop sidebar: `340px`
- Reading width: `72ch`
- Default radius: `2–4px`
- Legibility floor: `--text-xs` (13px) is the smallest rendered text; `--text-sm` (14px) for secondary text; body copy stays at 16px

## Accessibility rules that constrain the visuals

- Links are underlined wherever they appear next to non-link text, so they are never identified by color alone.
- Links on navy surfaces use `--link-on-dark`; the default link blue reaches only 2.67:1 there.
- Focus ring color follows the surface the control sits on, not the control's own background, because the outline is drawn outside the element.
- Tables keep `display: table` at every width and use `scope` on headers; horizontal overflow is handled by a focusable, labelled `.table-scroll` region.
- Decorative glyphs are hidden from assistive technology or drawn with CSS rather than generated text content.
- Interactive targets are at least 24x24 CSS px, except links inline within a sentence.
- One `h1` per page.

## Component vocabulary

Header, masthead, primary navigation, hero/page hero, announcement strip, content/sidebar grid, sidebar panel, notice, theme card, fact strip, tables, status badges, buttons, footer.

Do not create another visual vocabulary without updating the live design-system page and the active spec.
