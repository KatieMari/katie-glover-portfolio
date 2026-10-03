/**
 * skills.js — the skills shown in the "Skills & tools" section.
 * ------------------------------------------------------------------
 * Instead of rating skills, each one links to the project(s) where you used it.
 *
 * skillGroups   Skills you've used in real work.
 *   usedIn      Project names (match the titles in projects.js). Shown when a
 *               visitor hovers over or taps the skill. Leave as [] if a skill
 *               isn't tied to one particular project (e.g. Git).
 *
 * exploring     A short list of things you're learning next (keep it to 2–4).
 *
 * Add a skill:     { name: 'Skill name', usedIn: ['Project title'] }
 * Remove a skill:  delete its line.
 */

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Front end',
    blurb: 'Building the parts of a site people see and use.',
    shape: 'circle',
    skills: [
      { name: 'HTML', usedIn: ['My Water Footprint'] },
      { name: 'CSS', usedIn: ['My Water Footprint'] },
      { name: 'JavaScript', usedIn: ['My Water Footprint', 'Power Pals'] },
      { name: 'React', usedIn: ['My Water Footprint'] },
      { name: 'React Router', usedIn: ['My Water Footprint'] },
      { name: 'Chart.js', usedIn: ['My Water Footprint'] },
    ],
  },
  {
    id: 'apps',
    title: 'Apps & 3D',
    blurb: 'Mobile apps and interactive 3D and VR spaces.',
    shape: 'arch',
    skills: [
      { name: 'React Native', usedIn: ['Power Pals'] },
      { name: 'Expo', usedIn: ['Power Pals'] },
      { name: 'Unity', usedIn: ['VR Cat Café'] },
      { name: 'C#', usedIn: ['VR Cat Café'] },
      { name: 'XR Interaction Toolkit', usedIn: ['VR Cat Café'] },
    ],
  },
  {
    id: 'backend',
    title: 'Back end',
    blurb: 'Servers and APIs that do the work behind the scenes.',
    shape: 'square',
    skills: [
      { name: 'Node.js', usedIn: ['My Water Footprint'] },
      { name: 'Express', usedIn: ['My Water Footprint'] },
      { name: 'TypeScript', usedIn: ['My Water Footprint'] },
      { name: 'REST APIs', usedIn: ['My Water Footprint'] },
    ],
  },
  {
    id: 'design',
    title: 'Design & research',
    blurb: 'Planning, designing and testing with real people.',
    shape: 'star',
    skills: [
      { name: 'Figma', usedIn: ['Power Pals'] },
      { name: 'Wireframing', usedIn: ['Power Pals'] },
      { name: 'Style guides', usedIn: ['Power Pals'] },
      { name: 'User testing', usedIn: ['Power Pals'] },
      { name: 'Mind mapping', usedIn: ['My Water Footprint'] },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    blurb: 'Everyday kit for writing, saving and sharing work.',
    shape: 'ring',
    skills: [
      { name: 'Git', usedIn: [] },
      { name: 'GitHub', usedIn: [] },
      { name: 'Vercel', usedIn: ['My Water Footprint'] },
      { name: 'VS Code', usedIn: [] },
    ],
  },
];

export const exploring = ['MongoDB', 'Accessibility testing', 'ml5.js'];
