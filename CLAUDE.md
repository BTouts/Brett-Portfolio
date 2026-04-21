# Portfolio — CLAUDE.md

## Project Overview

Personal portfolio website for Brett Toutkoushian, a CS grad seeking software engineering roles. Built with Next.js 14+ App Router, Tailwind CSS, and Framer Motion.

**Chosen aesthetic:** Frost (glassmorphism — dark navy background, frosted glass cards, blue/purple accents)

**Dev server:** `npm run dev` → http://localhost:3000
**Build:** `npm run build`
**Deploy target:** Vercel

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 + CSS custom properties (theme variables in `app/globals.css`)
- **Animation:** Framer Motion (`whileInView` scroll reveals)
- **Fonts:** Google Fonts via `next/font/google` — Outfit (Frost theme)
- **Deployment:** Vercel

---

## File Structure

```
app/
  layout.tsx        # Root layout — loads fonts, sets default data-theme
  page.tsx          # Single page — assembles all section components
  globals.css       # All CSS variable theme blocks + global styles
components/
  ThemeProvider.tsx # "use client" context — theme state + localStorage persistence
  Nav.tsx           # Sticky nav + theme switcher buttons
  Hero.tsx          # Full-viewport hero section
  About.tsx         # Bio + skill badges
  Projects.tsx      # Project cards grid
  Contact.tsx       # Email / LinkedIn / GitHub links
  Footer.tsx        # Copyright
lib/
  themes.ts         # Theme definitions (id, name, swatch colors)
public/
  resume.pdf        # Drop updated resume here for /update-resume command
```

---

## Theme System

All 5 themes exist in `globals.css` as `[data-theme="x"]` CSS variable blocks. The active theme is set via `document.documentElement.setAttribute("data-theme", id)` in `ThemeProvider.tsx`. Only **Frost** needs to be polished for production — the other 4 can be removed once the design is finalized.

To switch active theme programmatically: change the default in `ThemeProvider.tsx`.

---

## Resume Automation

Drop a resume file in the project root as `resume.pdf` (or `resume.md` / `resume.txt` for plain text). Then run `/update-resume` — Claude will read the file, extract your info, and update the relevant components.

See `.claude/commands/update-resume.md` for the full command definition.

---

## Content Conventions

- Keep all personal content (name, bio, projects, links) in the component files — no separate data layer yet
- Project cards live in `components/Projects.tsx`
- Skill badges live in `components/About.tsx`
- Social/contact links live in `components/Contact.tsx`
- The hero tagline and CTA links live in `components/Hero.tsx`

---

## Build Checklist

### Foundation
- [x] Next.js 14+ project initialized (TypeScript, Tailwind, App Router)
- [x] Framer Motion installed
- [x] All Google Fonts loaded
- [x] 5-theme system implemented
- [x] Theme switcher with swatches in nav
- [x] Frost theme chosen

### Content (requires Brett's real info)
- [ ] Replace placeholder name/tagline in `Hero.tsx`
- [ ] Write real bio in `About.tsx`
- [ ] Update skill badges to reflect actual stack
- [ ] Add 3-4 real projects with descriptions, tech tags, and GitHub/live links in `Projects.tsx`
- [ ] Add real email, LinkedIn URL, and GitHub URL in `Contact.tsx`
- [ ] Add resume PDF to `public/resume.pdf` and wire up download button in `Hero.tsx`

### Design Polish (Frost only)
- [ ] Remove unused themes from `globals.css` and `lib/themes.ts`
- [ ] Remove theme switcher from nav (or keep as easter egg)
- [ ] Review mobile layout on all sections
- [ ] Add real profile photo or remove avatar placeholder
- [ ] Fine-tune hero mesh gradient blobs
- [ ] Verify Framer Motion scroll animations feel right

### SEO & Metadata
- [ ] Update `<title>` and `<meta description>` in `app/layout.tsx`
- [ ] Add Open Graph tags (for LinkedIn share preview)
- [ ] Add favicon (personal logo or initials)

### Deployment
- [ ] Push to GitHub repo
- [ ] Connect repo to Vercel
- [ ] Set up custom domain (optional)
- [ ] Verify build passes in CI
