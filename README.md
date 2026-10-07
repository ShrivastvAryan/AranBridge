# AranBridge

AranBridge is an early-stage, centre-led coordination concept designed to help licensed blood centres reach appropriate, opted-in local donors for time-critical requests.

The project is built around a simple principle: clinical decisions remain with licensed blood centres, while AranBridge strengthens the operational path from a verified request to a voluntary donor response.

## Current focus

AranBridge is preparing for an initial Delhi pilot. The immediate goal is to validate one accountable local operating unit with a licensed blood centre and nearby donor communities.

The pilot is designed to measure:

- Partner willingness to create and close requests through the workflow
- Time to qualified donor interest
- Centre-confirmed completion, separate from clicks or message opens
- Donor willingness to remain reachable for future requests
- Repeatability across additional local zones

## Operating model

1. A licensed blood centre creates a verified, time-bound request.
2. AranBridge sends consent-based alerts to relevant local donors.
3. Donors signal availability privately.
4. The blood centre retains full responsibility for screening, eligibility, confirmation, and closure.

AranBridge does not sell blood, maintain a public donor directory, or make medical eligibility decisions.

## Technology

- Next.js-compatible React application powered by Vinext
- TypeScript and Tailwind CSS
- Cloudflare-compatible deployment target
- Optional Cloudflare D1 and Drizzle support for future persistence needs

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run build
npm run lint
```

## Project structure

- `app/` — page content, layout, and global styles
- `components/ui/` — reusable interface components
- `public/` — favicon and social sharing image
- `db/` — optional database schema surface
- `.openai/hosting.json` — Sites hosting configuration

## Important note

AranBridge is an early-stage coordination concept, not a blood bank or medical service. Donor eligibility and all clinical decisions remain with licensed blood centres.
