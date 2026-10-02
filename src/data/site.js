/**
 * site.js — your personal details, links and short copy.
 * ------------------------------------------------------------------
 * Anything marked PLACEHOLDER should be replaced before you share the site.
 * When everything is filled in, set `showPlaceholderBadges` to false to hide
 * the little dashed "placeholder" labels that appear around the site.
 */

export const site = {
  // Set to false once you've replaced all placeholder content.
  showPlaceholderBadges: true,

  name: 'Katie Glover',
  role: 'Final-year Creative Computing student',
  university: 'Norwich University of the Arts',
  course: 'Creative Computing BSc (Hons)',
  location: 'Norwich, UK',


  email: 'katieglover21@gmail.com',

  links: {
    github: 'https://github.com/KatieMari',
    linkedin: 'https://www.linkedin.com/in/katie-glover-',
  },

  tagline: 'Designing with curiosity, building with care.',

  // PLACEHOLDER — add a friendly photo of yourself to /public (e.g. /public/katie.jpg)
  // and set photo: '/katie.jpg'. Leave as '' to show the illustrated placeholder.
  photo: '',
  photoAlt: 'Katie Glover smiling', // describe your photo for screen-reader users

  // Small "currently" details for the About section.
  // PLACEHOLDER — swap these for things that are true for you right now.
  currently: [
    { label: 'Learning', value: 'React and accessible component patterns' },
    { label: 'Reading', value: 'Add a book or article you’re enjoying' },
    { label: 'Off-screen', value: 'Add a hobby — drawing, climbing, baking…' },
  ],

  // Words that scroll across the marquee strip between sections.
  marquee: [
    'Front-end development',
    'Interaction design',
    'Creative coding',
    'Accessibility',
    'Typography',
    'UI/UX',
    'Responsive layouts',
  ],
};
