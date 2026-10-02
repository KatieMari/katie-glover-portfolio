/**
 * projects.js — the ONLY file you need to edit to add, remove or reorder projects.
 * ------------------------------------------------------------------------------
 * The first project is shown as the large "featured" showcase. The rest
 * alternate left/right automatically.
 *
 * Fields
 *  id           Unique, lowercase, no spaces (used for keys + aria ids).
 *  title        Project name.
 *  category     Short label, e.g. "Web app", "University module", "Personal project".
 *  year         e.g. "2026".
 *  summary      One or two sentences: the purpose or problem it addresses.
 *  role         Optional: what *you* did (design, build, research…).
 *  tech         Array of technologies used.
 *  liveUrl      Link to the live site. Leave as '' to show "Live demo coming soon".
 *  codeUrl      Link to the GitHub repo. Leave as '' to hide/disable the link.
 *  placeholder  true = shows a dashed "placeholder" label. Set false for real projects.
 *
 *  image        Optional. Put a screenshot in /public/projects/ and set e.g.
 *               image: '/projects/my-app.webp'. When an image is set it is shown
 *               inside the preview frame instead of the illustrated mock-up.
 *  imageAlt     Describe the screenshot for screen-reader users.
 *
 *  preview      Illustrated mock-up used when there's no screenshot yet:
 *    type       'browser' | 'phone' | 'editorial'
 *    palette    The mock-up's OWN colours (they stay the same in light and dark
 *               mode, just like a real screenshot would).
 */

export const projects = [
  {
    id: 'featured-project',
    title: 'Your featured project',
    category: 'Placeholder · Web app',
    year: '2026',
    summary:
      'Replace this with one or two sentences about your strongest project: who it was for, the problem it set out to solve, and what makes it interesting.',
    role: 'Design, front-end development',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '',
    codeUrl: '',
    placeholder: true,
    preview: {
      type: 'browser',
      palette: { bg: '#fff8f2', surface: '#ffffff', ink: '#2b2130', accent: '#d6567f', soft: '#f6d9e2' },
    },
  },
  {
    id: 'second-project',
    title: 'Second project title',
    category: 'Placeholder · Mobile-first site',
    year: '2025',
    summary:
      'Describe the purpose of this project in a sentence or two. A university module brief, a personal experiment or a site for a friend all count.',
    role: 'UI design, prototyping, build',
    tech: ['HTML', 'CSS', 'Responsive design'],
    liveUrl: '',
    codeUrl: '',
    placeholder: true,
    preview: {
      type: 'phone',
      palette: { bg: '#2f2a4a', surface: '#3d3760', ink: '#fdf6ee', accent: '#ffb86b', soft: '#8f86c9' },
    },
  },
  {
    id: 'third-project',
    title: 'Third project title',
    category: 'Placeholder · Creative coding',
    year: '2025',
    summary:
      'Explain what you explored or built here and what you learned. Interactive, experimental or editorial work is a great way to show range.',
    role: 'Concept, interaction, development',
    tech: ['JavaScript', 'Canvas / p5.js', 'Git'],
    liveUrl: '',
    codeUrl: '',
    placeholder: true,
    preview: {
      type: 'editorial',
      palette: { bg: '#e9efe4', surface: '#f7f9f3', ink: '#1f2a22', accent: '#3f7d5a', soft: '#c6d8bf' },
    },
  },
];
