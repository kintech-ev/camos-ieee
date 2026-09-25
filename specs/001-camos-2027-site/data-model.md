# Data Model

All editable conference facts live in `src/content.ts`.

## Core records

- `conference`: title, dates, location, format, organizer, summary
- `navigation`: primary public navigation
- `importantUpdates`: dated/undated conference notices
- `themes`: Automation, Mobile Systems, Connectivity descriptions and scientific leads
- `scopeGroups`: technical CFP topics
- `submissionCategories`: planned contribution types
- `scientificLeadership`: General Chairs and Co-Chairs with status
- `operationalRoles`: publication, local, web, finance, registration, publicity and liaison roles
- `registrationTiers`: planning-only fee tiers
- `statusFacts`: publication, awards, support, venue, journal and review caveats

## Status vocabulary

Use only:

- Confirmed
- Planned
- Subject to confirmation
- Open
- To be announced

Do not convert a planned appointment into a confirmed appointment for visual consistency.
