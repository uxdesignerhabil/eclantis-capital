# Eclantis Capital Ltd — Website

Marketing website for **Eclantis Capital Ltd**, an accountancy, tax and business-advisory firm operating across the **UK & UAE**.

## Stack
- React 18 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- framer-motion (scroll reveals)
- lucide-react (icons)

## Getting started
```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Structure
- `src/App.jsx` — the full single-page site (Header, Hero, Services, Why, Regions, Approach, Testimonials, Contact, Footer)
- `src/index.css` — Tailwind import + brand theme tokens (navy / gold / emerald)

## Notes
- The contact form is a front-end demo (no backend). Wire it to an email/form service (Formspree, Resend, etc.) before launch.
- Phone number, email and testimonials are placeholders — replace with real details.
