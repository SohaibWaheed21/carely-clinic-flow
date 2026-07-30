# Carely Connect

Build a marketing website for "Carely" — an AI WhatsApp automation assistant for clinics — 

styled and structured like wazzy.io, but for a healthcare/clinic audience instead of a general CRM audience.

PRODUCT

Carely connects to a clinic's existing WhatsApp Business number and automatically answers 

patient messages, books and reschedules appointments, sends confirmation and no-show reminders, 

and escalates to staff when needed. Target users: dental, physiotherapy, aesthetic medicine, 

and general clinics in Lahore, Pakistan currently relying on phone calls and a receptionist.

TECH / BUILD NOTES

- Frontend-only marketing site for now, no backend logic needed — all forms should just 

  show a success state on submit (no real API calls yet)

- Fully responsive: desktop, tablet, mobile

- Fast-loading, clean code, semantic HTML structure

- Smooth scroll-triggered fade/slide-in animations on section entry (subtle, not excessive)

- Sticky navigation with active-section highlighting as the user scrolls

DESIGN DIRECTION

- Calm, professional, healthcare-grade feel — not a loud "startup" look

- Background: warm off-white/cream, not stark white

- Primary color: deep teal/navy

- Accent color: warm amber/gold, used sparingly on CTAs and highlights only

- Typography: a characterful serif for headlines (e.g. Fraunces or similar), clean sans-serif 

  for body text (e.g. Inter), small monospace font for labels/eyebrows/tags

- Rounded corners on cards (12-16px), soft shadows, no harsh borders

- Real UI mockups over stock illustrations — WhatsApp chat bubbles, calendar/booking screenshots, 

  simple dashboard previews

PAGE SECTIONS (in order)

1. Sticky nav: logo, links (Product, How it works, Solutions, Pricing, FAQ), "Book a demo" CTA button

2. Hero: eyebrow label, large benefit-driven headline, one-line subheadline, two CTAs 

   (primary "Book a free demo", secondary "See how it works"), and a hero visual showing 

   a live WhatsApp conversation mockup next to a calendar/booking card that fills in as the 

   conversation resolves — this should feel animated/alive, like a real interaction happening

3. Trust bar: "Trusted by clinics in Lahore" with a row of sample clinic names/logos

4. Feature grid: 4-6 cards covering — instant 24/7 replies, automatic booking & rescheduling, 

   no-show reduction via reminders, human handoff when needed, multi-doctor/multi-branch routing, 

   patient recall/follow-up automation. Each card: icon, short heading, one-sentence description

5. "How it works": numbered step-by-step flow (3-4 steps) showing the path from patient message 

   to confirmed booking to staff notification, presented as a horizontal timeline with icons

6. Product deep-dive / dashboard preview: a section showing what the clinic's side looks like — 

   a simple dashboard mockup with conversation history, upcoming appointments, and basic analytics 

   (messages handled, appointments booked, no-show rate reduced) — styled as a real screenshot, 

   not abstract graphics

7. Solutions by clinic type: cards or tabs for Dental, Physiotherapy, Aesthetic Medicine, 

   General Clinics — each with a specialty-specific headline and 2-3 relevant benefits

8. Social proof: 2-3 short testimonial cards (name, clinic, one to two sentence quote about 

   results — e.g. reduced no-shows, faster response time, fewer missed after-hours inquiries)

9. Trust & security section: official WhatsApp Business API, data privacy, "your number stays yours" 

   — 3-column layout with icons

10. Pricing section: simple two-tier layout (Starter / Growth) OR a "book a call for pricing" 

    CTA-only section — default to CTA-only unless told otherwise, since pricing is quoted per clinic

11. FAQ accordion: 5-6 expandable questions covering AI transparency, setup difficulty, 

    WhatsApp ban risk, handling unexpected questions, go-live timeline

12. Final CTA band: full-width contrasting background, headline + "Book a free demo" button

13. Footer: logo, tagline, link columns (Product, Solutions, Company, Contact), 

    social/contact icons, copyright

COPY TONE

Confident, plain, benefit-led. Avoid generic AI hype language ("revolutionary," "cutting-edge," 

"game-changing"). Write like the product is already trusted and doing its job quietly and well.

Reference wazzy.io's information density and feature-rich structure (dashboard previews, 

solutions-by-industry breakdown, social proof) but keep the visual tone calmer and warmer — 

closer to a boutique healthcare SaaS than a general-purpose CRM tool.
Also add an ROI calculator like the provide image but use the 
i have also attached a design.md file for syling both light and color mode, provide an icon that can be use dto dynamically between them. Also use your own intution,experience of web design to know which components to keep in the mainhomepage and which require seperate pages like Pricing,Contact use and more

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/42255679-02c8-4d77-adf4-6f7570e6bbe4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
