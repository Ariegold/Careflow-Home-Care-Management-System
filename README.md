# KindTide — Care Management System

A fully functional, single-page web application for managing a care agency. Built with pure HTML, CSS, and JavaScript — no frameworks required. Featuring a clean **Teal & White** design theme.

## Features

- **Dashboard** — Live KPIs, today's schedule, compliance alerts, and documentation overview
- **Transcript Analysis** — Structured industry insights report (HHA Exchange, WellSky, OnTime ITS comparison)
- **Patients** — Full client registry with authorisation tracking, allergy and DNR records
- **Caregivers** — Staff management with certification and compliance tracking
- **Scheduling** — 7-day weekly calendar with authorisation validation and overtime restrictions
- **Care Plans** — Service plans with client folder documentation badges
- **Documentation** — Clinical notes with 6-attribute quality assessment
- **Compliance & EVV** — Electronic Visit Verification ring gauge and document tracker
- **Billing** — Invoicing in UB-04, CMS-1500, and Private Pay formats
- **Authorisations** — Service authorisation tracking with used-hours progress bars

## Tech Stack

- HTML5 (semantic, single-page)
- Vanilla CSS (custom design system, Teal & White theme)
- Vanilla JavaScript (in-memory data store, DOM rendering, modal system)
- Google Fonts — Outfit

## Design Theme

**Teal & White** — Clean, professional healthcare aesthetic
- Primary: Teal `#14B8A6` / Dark Teal `#0D9488`
- Background: White `#FFFFFF` / Light Teal `#F0FDFC`
- Sidebar: Deep Teal `#0F766E`
- Text: Dark Teal `#134E4A`

## Getting Started

```bash
# Serve locally (requires Node.js)
npx serve .

# Then open in browser
http://localhost:3000
```

Or simply open `index.html` directly in your browser.

## Project Structure

```
├── index.html     # Full SPA structure
├── styles.css     # Complete design system (Teal & White)
├── app.js         # All logic and data
└── .gitignore
```