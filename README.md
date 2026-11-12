# Rugved Gundawar — Portfolio

The source for my personal portfolio site, deployed at
[rugved-portfolio.vercel.app](https://rugved-portfolio.vercel.app).

It is a single-page React site built with Vite. One scrolling page covers a hero
intro, an about section with summary statistics, skills grouped into five
categories, a work-experience timeline, a carousel of seven projects with a
detail modal, education, testimonials, and a contact form with a downloadable
resume. The design is a dark theme with cyan and green accents, an animated
starfield background and scroll-triggered animations driven by Framer Motion.

## Tech stack

- **React 18** with **Vite 5** for the build
- **Framer Motion** for animation
- Plain CSS per component — no UI framework
- **@vercel/analytics** for page analytics
- Deployed on **Vercel**

## Getting started

Requires Node.js 18 or newer.

Install dependencies:

```bash
npm install
```

Start the dev server (Vite serves on port 3000, set in `vite.config.js`, and
opens a browser automatically):

```bash
npm run dev
```

Build the production bundle into `dist/`:

```bash
npm run build
```

Serve that build locally to check it before deploying:

```bash
npm run preview
```

## Deploying to Vercel

Vercel auto-detects Vite, so no extra configuration is needed — the build
command is `npm run build` and the output directory is `dist`.

The simplest route is to connect the GitHub repository to Vercel once, at
[vercel.com/new](https://vercel.com/new); every push to `main` then triggers a
deployment, and pull requests get their own preview URL.

To deploy by hand instead:

```bash
npx vercel --prod
```

## Project layout

```
public/            Resume PDF, profile photo, favicon, robots.txt
src/
  components/      One .jsx + .css pair per section
  components/ui/   Shared pieces: starfield, shooting stars,
                   spotlight cursor, testimonial carousel
  hooks/           useScrollSpy, drives nav highlighting
  App.jsx          Composes the sections
index.html         Page shell, metadata and noscript fallback
```

## Updating content

Each section keeps its own content in the component file — `Hero.jsx`,
`About.jsx`, `Skills.jsx`, `Experience.jsx`, `Projects.jsx`, `Education.jsx`,
`Testimonials.jsx` and `Contact.jsx`. Skills, experience, projects and education
are plain arrays near the top of their file.

To swap the resume, replace `public/Rugved_Gundawar_Resume.pdf`, keeping the
filename — Hero, Contact and the `index.html` noscript block all link to it.

The accent colors are `#00d4ff` (cyan) and `#00ff88` (green) on a `#0a0a0a`
background, repeated across the component stylesheets.

## Contact

- Email: rgundawar1402@gmail.com
- LinkedIn: [linkedin.com/in/rugved-gundawar](https://www.linkedin.com/in/rugved-gundawar)
- GitHub: [github.com/Rugved-142](https://github.com/Rugved-142)
