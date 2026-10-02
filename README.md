# Katie Glover — Portfolio

A personal portfolio site built with **React + Vite** and plain modern CSS. It has no UI or animation libraries.

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server → http://localhost:5173
npm run build    # create a production build in /dist
npm run preview  # preview the production build locally
```

## Where to edit things

| I want to change… | Edit this file |
| --- | --- |
| **Projects** (add, remove, reorder) | `src/data/projects.js` |
| Email, GitHub, LinkedIn, photo, "Currently" notes, marquee words | `src/data/site.js` |
| Skills and tools | `src/data/skills.js` |
| "My approach" steps | `src/data/approach.js` |
| Colours, fonts, spacing (both themes) | `src/styles/theme.css` |
| Page title, description, social preview | `index.html` |

### Adding a project
Copy one of the objects in `projects.js`, give it a unique `id`, and fill in the fields. The **first** project becomes the large featured showcase, and the rest alternate left and right automatically.

- Add a screenshot: put it in `public/projects/` (for example `my-app.webp`) and set `image: '/projects/my-app.webp'` and `imageAlt`.
- If there's no screenshot, an illustrated mock-up is drawn from `preview.type` (`'browser'`, `'phone'` or `'editorial'`) and `preview.palette`.
- Leave `liveUrl` or `codeUrl` as `''` and the button shows "coming soon" instead of a broken link.

### Placeholders checklist
Dashed **PLACEHOLDER** labels mark everything you still need to replace:

- [ ] `site.js`: `email`, `links.github`, `links.linkedin`, `photo`, `currently`
- [ ] `projects.js`: replace the three example projects and set `placeholder: false`
- [ ] `skills.js`: check that the list matches what you've actually used
- [ ] `index.html`: replace `https://your-domain.example` in the social tags
- [ ] `public/og-image.png` (the 1200×630 social preview image) and `public/favicon.svg`
- [ ] Hero badge text ("open to graduate roles") in `src/components/Hero.jsx`, if it doesn't apply

When you've finished, set `showPlaceholderBadges: false` in `site.js`.

## How the theme works
- Every colour is a CSS custom property in `src/styles/theme.css`. Light values are on `:root`, and dark values override them on `[data-theme="dark"]`. Components only use variables.
- A small inline script in `index.html` applies the saved theme (or your OS setting) **before** the page paints, so there's no flash of the wrong theme.
- `src/hooks/useTheme.js` keeps React state, the `data-theme` attribute and `localStorage` (`kg-theme`) in sync. Until a visitor chooses a theme, it follows the OS setting.
- All motion is turned off for visitors who have `prefers-reduced-motion` enabled.

## Contact form?
There's deliberately no form: the `mailto:` link and "Copy" button always work without a backend. If you want a form later, use a service such as Formspree or Netlify Forms so that submissions actually go somewhere.

## Deploying
`npm run build` and upload `/dist` to Netlify, Vercel or GitHub Pages. For GitHub Pages under a sub-path, add `base: '/repo-name/'` to `vite.config.js`.

## Project structure
```
src/
  data/         ← your content (projects, skills, links)
  hooks/        ← useTheme, useInView, useActiveSection
  components/   ← one .jsx + .css per section
  styles/       ← theme.css (tokens) + base.css (shared styles)
```
