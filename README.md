# 8i Ventures — Ideas to Execution

> A high-fidelity, interactive web experience inspired by 8i Ventures' public-facing brand, investment narrative, portfolio, and founder journey.

[![Deploy to GitHub Pages](https://github.com/aman482006-beep/ideas-to-execution/actions/workflows/deploy.yml/badge.svg)](https://github.com/aman482006-beep/ideas-to-execution/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-111111?logo=github)](https://aman482006-beep.github.io/ideas-to-execution/)

## Overview

**Ideas to Execution** is a frontend-focused exploration of how an early-stage venture firm can communicate its thesis, portfolio, team, founder support, and investment process through a premium digital experience.

The project is designed around a simple principle:

> **Make the firm's investment philosophy understandable through the experience of the website itself.**

Rather than treating the site as a collection of static pages, the implementation uses motion, interactive storytelling, structured content, and deliberate visual hierarchy to create a more editorial, founder-oriented experience.

**Important:** This is an independent project/recreation built from publicly available information and is **not an official 8i Ventures website or product**.

---

## What is included

### 🏠 Home
- Hero section with the core investment narrative
- Founder-focused social proof
- "Why 8i" positioning
- Portfolio/company showcase
- Team preview
- Origami program teaser
- FAQ
- Final conversion CTA

### 🧩 Origami
A dedicated experience for communicating the founder journey and investment process, including:
- Interactive 30-day timeline
- Stage-by-stage milestone cards
- Expandable deep dives
- Founder experience and process explanations
- Side-by-side process comparison
- Responsive navigation and motion

### 🏢 Companies
Portfolio-focused presentation designed to make company discovery fast and visual.

### 👥 Team
Team-focused sections that emphasize people, roles, and the firm's operator/investor identity.

### 📰 Insights / News
Editorial-style areas for communicating ideas, updates, and investment perspectives.

### 📩 Contact / Investor Relations
Dedicated pathways for founders, partners, and other visitors to understand how to engage.

---

## Design direction

The visual system intentionally combines:

- **Editorial typography** for a premium venture-capital feel
- **High-contrast surfaces** and restrained color usage
- **Monospace metadata** for financial / institutional cues
- **Micro-interactions** instead of excessive animation
- **Large type and generous spacing** for clear hierarchy
- **Responsive layouts** designed for desktop and mobile
- **Interactive storytelling** where it improves comprehension

The goal is not to make every section flashy. Motion is used primarily to establish hierarchy, reveal information, and make complex sections easier to navigate.

---

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 14 |
| Language | TypeScript |
| UI | React 18 |
| Styling | Tailwind CSS |
| Animation | Framer Motion + GSAP |
| Icons | Lucide React |
| Utilities | clsx + tailwind-merge |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

---

## Project structure

```text
ideas-to-execution/
├── app/                    # Next.js application routes
├── components/
│   ├── home/               # Homepage sections
│   ├── origami/            # Origami / founder-process experience
│   └── ...                 # Shared UI and other page sections
├── public/                 # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment
├── next.config.mjs         # Static export + Pages configuration
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Local development

### 1. Clone

```bash
git clone https://github.com/aman482006-beep/ideas-to-execution.git
cd ideas-to-execution
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### 4. Create a production build

```bash
npm run build
```

The project is configured for a static export and produces the deployable site in:

```text
out/
```

---

## Deployment

Deployment is automated through **GitHub Actions**.

Every push to `main`:

1. Checks out the repository
2. Installs dependencies with `npm ci`
3. Builds the Next.js static export
4. Creates the GitHub Pages artifact
5. Deploys the artifact to GitHub Pages

The project is configured with the repository base path:

```text
/ideas-to-execution
```

This is required because the site is hosted as a project page rather than a root-level user site.

### Live

**https://aman482006-beep.github.io/ideas-to-execution/**

---

## Engineering notes

### Static-first architecture

The site uses Next.js static export rather than requiring a server runtime. This keeps deployment simple and makes the project suitable for GitHub Pages.

### Animation

Framer Motion and GSAP are used selectively. Interactive sections such as the Origami timeline use animation to reinforce state changes and transitions rather than as decoration alone.

### GitHub Pages compatibility

The Next.js configuration includes:

- `output: 'export'`
- `basePath: '/ideas-to-execution'`
- `trailingSlash: true`
- Unoptimized images for static hosting

---

## Why this project exists

This project was built as a practical exercise in combining:

- Venture-capital research
- Product thinking
- Frontend engineering
- Interaction design
- Information architecture
- Brand interpretation
- Storytelling through interfaces

It is also an example of taking a business/brand brief and translating it into a functioning digital product rather than stopping at a visual mockup.

---

## Status

**Active portfolio project**

The architecture is intentionally modular so additional pages, interactions, content systems, and deployment improvements can be added without restructuring the entire application.

---

## Credits & disclaimer

This project references the publicly available brand and business information of **8i Ventures** for research and design exploration.

It is an **independent, non-official project** and is not affiliated with, endorsed by, or operated by 8i Ventures.

All trademarks, company names, logos, and third-party intellectual property belong to their respective owners.

---

## License

This repository contains original implementation work alongside third-party and brand-referential assets/content. Unless otherwise stated in the repository, the source code is provided for portfolio and educational use. Third-party assets and trademarks remain subject to their respective owners' rights.
