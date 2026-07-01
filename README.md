# Hanggay Prayoga — Enterprise IT Engineer Portfolio

A production-grade, bilingual (ID/EN) executive portfolio rebuilt from scratch as a modern web application — not a straight HTML→JSX conversion.

## Tech Stack

- **Next.js 15+** (App Router, TypeScript)
- **Tailwind CSS v4**
- **shadcn/ui-style primitives** (`Button`, `Badge`, `Card`) built with `class-variance-authority` + Radix `Slot`
- **Framer Motion** for scroll-based reveal, hover, and micro-interaction animation
- **Lucide React** icon set
- **React CountUp** for animated statistics
- **Embla Carousel** (installed, ready to use for a testimonials/logo carousel if needed)
- **next/image**, **next/font** (Google Inter)
- **clsx + tailwind-merge** via a shared `cn()` helper

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

## Project Structure

```
app/
  layout.tsx        Root layout, SEO metadata, JSON-LD, font
  page.tsx           Assembles all sections
  globals.css        Tailwind v4 theme tokens
  robots.ts           robots.txt
  sitemap.ts          sitemap.xml
  api/contact/route.ts  Contact form POST endpoint (stub — wire to an email service)

components/
  layout/            Navbar, Footer
  sections/           Hero, About, Expertise, Experience, Projects, Impact,
                       Skills, Architecture, Certifications, Contact
  visuals/            Hand-built SVG illustrations (Network Topology,
                       Cloud Infrastructure, AI Workflow)
  motion/             Reusable FadeIn wrapper + CountUp stat component
  providers/          Language (ID/EN) context provider
  ui/                 shadcn-style Button / Badge / Card / Container / SectionHeading

data/                 All content as typed TypeScript modules (profile, about,
                       expertise, experience, projects, impact, skills,
                       certifications, nav, i18n dictionary)
types/                Shared TypeScript interfaces
lib/                  cn() class helper, typed lucide icon lookup
hooks/                (reserved for future custom hooks)
```

All portfolio content — profile, experience, projects, skills, certifications,
and contact details — lives in `data/*.ts` as typed objects with both Indonesian
and English copy, so the UI never hardcodes strings and stays fully translated.

## Adding Your Photo & Resume

- Drop a headshot into `public/images/` and set `avatarSrc` in `data/profile.ts`
  (e.g. `"/images/profile.jpg"`). It renders inside the Hero's glass card via `next/image`.
- Drop your CV PDF into `public/resume/` and update `resumeUrl` in `data/profile.ts`
  if the filename differs from the default.

## Contact Form

`components/sections/contact.tsx` posts to `app/api/contact/route.ts`, which currently
logs submissions server-side. Wire it up to a transactional email provider (Resend,
SendGrid, Postmark, etc.) or a webhook/CRM before going to production.

## SEO

- Full `<head>` metadata (title template, description, keywords, Open Graph, Twitter card)
  in `app/layout.tsx`
- JSON-LD `Person` structured data
- `robots.ts` and `sitemap.ts` generate `/robots.txt` and `/sitemap.xml`
- Semantic HTML landmarks (`header`, `main`, `section`, `footer`) and ARIA labels
  throughout for accessibility

## Performance

- Server Components by default; only interactive pieces are `"use client"`
- The three SVG architecture illustrations are lazy-loaded via `next/dynamic`
- Animations use `whileInView` with `viewport={{ once: true }}` so they only run once,
  reducing re-render cost
- `next/font` self-hosts Inter with no layout shift; `next/image` is ready for the
  profile photo once added

## Notes on Language Switching

The ID/EN toggle in the navbar persists to `localStorage` and is provided via
`components/providers/language-provider.tsx`. Every section pulls its copy from
`data/*.ts` (bilingual objects: `{ id, en }`) or `data/i18n.ts` (short UI labels),
so translations are centralized and typed — no scattered strings.
