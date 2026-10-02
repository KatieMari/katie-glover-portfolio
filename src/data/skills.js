/**
 * skills.js — grouped skills and tools.
 * ------------------------------------------------------------------
 * These are editable placeholders. Keep the list honest: only include things
 * you've actually used. Add `learning: true` to anything you're still getting
 * to grips with — it shows a small "learning" marker, which recruiters
 * generally appreciate more than an inflated list.
 */

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Front-end development',
    blurb: 'Building interfaces that are structured, responsive and usable.',
    shape: 'circle',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'Responsive design' },
      { name: 'Accessibility' },
      { name: 'React', learning: true },
    ],
  },
  {
    id: 'design',
    title: 'Design & prototyping',
    blurb: 'Shaping how things look, feel and flow before writing code.',
    shape: 'arch',
    skills: [
      { name: 'UI/UX design' },
      { name: 'Wireframing' },
      { name: 'Prototyping' },
      { name: 'Typography & layout' },
      { name: 'Figma', learning: true },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & workflow',
    blurb: 'The everyday kit for building, versioning and shipping work.',
    shape: 'star',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Browser DevTools' },
      { name: 'Vite', learning: true },
    ],
  },
];
