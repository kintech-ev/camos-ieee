# Feature Specification: ICAMC 2027 Conference Website

**Feature branch:** `001-icamc-2027-site`
**Status:** Ready for implementation
**Primary visual reference:** https://noms2027.ieee-noms.org/

## Goal
Deliver the official ICAMC 2027 public website as a real Astro site with an IEEE/NOMS-inspired conference information architecture while preserving the ICAMC identity and the confirmed conference facts.

## Public routes

- `/` — conference homepage
- `/call-for-papers` — author and scope information
- `/organization` — scientific and operational organization
- `/venue-registration` — Split, hybrid participation and registration planning

Internal-only reference:

- `/design-system` — canonical implemented design system; `noindex`

## Confirmed conference facts

- Name: International Conference on Automation, Mobility and Connectivity (ICAMC)
- Edition: 2027
- Dates: 2–6 August 2027
- Location: Split, Croatia
- Format: hybrid participation planned
- Organizer/promoter: KINTECH
- Scientific areas: Automation, Mobility, Connectivity
- Review model: rolling review/notification planned
- Best Paper Awards: planned
- Registration planning: Super Early Bird, Early Bird, Regular
- Planned IEEE Xplore pathway is conditional on required approvals and agreements

## User scenarios

### Visitor discovering the conference
A visitor arriving at the homepage can understand in under one screen what ICAMC is, when and where it happens, and the three scientific themes.

### Researcher considering submission
A researcher can find the technical scope, planned submission categories, rolling-review model, publication status, and clearly see which details are still to be announced.

### Participant planning attendance
A participant can find dates, Split/Croatia, hybrid status, venue status, registration tier planning, and fee-reduction policy without relying on hidden menus.

### Organizer checking responsibilities
An organizer can find scientific leadership, operational roles, and whether each appointment is confirmed, planned, open, or subject to confirmation.

## UX requirements

- Use a dark institutional utility bar, white ICAMC masthead, strong blue navigation bar, large photographic hero, content + sidebar pattern, compact lists and tables, and dark institutional footer.
- Avoid dashboard visuals, glassmorphism, excessive rounded cards, multiple gradients, and decorative UI with no information function.
- Keep main navigation one level deep.
- The homepage must contain substantial conference information and quick links rather than functioning only as a marketing splash page.
- Desktop maximum content width: approximately 1180 px.
- Long-form reading width: approximately 72 characters.
- On mobile, navigation collapses to one labelled Menu control and all content becomes single-column.

## Content integrity requirements

- Do not reuse superseded conference dates from the older CFP.
- Do not claim confirmed IEEE sponsorship or guaranteed IEEE Xplore inclusion.
- Do not invent registration values or final submission deadlines.
- KINTECH Journal may be mentioned only as a separate publication initiative when relevant; it is not an ICAMC site section or route.
- A `/kintech` redirect exists and points to https://www.kintech-ev.de/.

## Acceptance criteria

1. All four public routes render with a shared header/footer and coherent NOMS-inspired conference hierarchy.
2. The three scientific themes use stable semantic accents: Automation green, Mobility orange, Connectivity blue.
3. Conference facts come from `src/content.ts` rather than being repeated across page source.
4. `/design-system` visibly documents and renders foundations, layout, components, states, responsive behavior and accessibility rules.
5. `npm run check` passes after dependencies are installed.
6. The site can be built statically and deployed with Wrangler/Cloudflare.
7. The `/kintech` route redirects to https://www.kintech-ev.de/.
