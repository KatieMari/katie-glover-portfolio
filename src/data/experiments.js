/**
 * experiments.js — smaller projects shown in the "Smaller experiments" list
 * under the main projects. Keep each description to one sentence.
 *
 *  title, year, summary, tech (array), liveUrl, codeUrl
 *  Leave liveUrl or codeUrl as '' to hide that link.
 */

export const experiments = [
  {
    title: 'Random HTTP Cat',
    year: '2024',
    summary:
      'Pulls a random HTTP status cat and a cat fact from two APIs, with animations and colours that change depending on words in the fact.',
    tech: ['JavaScript', 'Fetch API', 'CSS animation'],
    liveUrl: 'https://katiemari.github.io/HTTP-Cats/',
    codeUrl: 'https://github.com/KatieMari/HTTP-Cats',
  },
  {
    title: 'Audio Player',
    year: '2024',
    summary:
      'A custom music player with play and pause, seek and volume sliders, track switching, and a player you can drag around the page.',
    tech: ['JavaScript', 'HTML audio', 'Drag and drop'],
    liveUrl: 'https://katiemari.github.io/Audio-Player/',
    codeUrl: 'https://github.com/KatieMari/Audio-Player',
  },
  {
    title: 'Responsive Gallery',
    year: '2024',
    summary:
      'A cat photo gallery built with CSS Grid that reflows from four columns on desktop to two on tablet and one on mobile.',
    tech: ['HTML', 'CSS Grid', 'Responsive design'],
    liveUrl: 'https://katiemari.github.io/Gallery/',
    codeUrl: 'https://github.com/KatieMari/Gallery',
  },
  {
    title: '2D Grid Artwork',
    year: '2025',
    summary:
      'Generative art in p5.js: a grid of pink shapes that grow, shrink and turn into circles as your mouse moves across them.',
    tech: ['p5.js', 'JavaScript', 'Generative art'],
    liveUrl: 'https://katiemari.github.io/2D-Grid-Artwork/',
    codeUrl: 'https://github.com/KatieMari/2D-Grid-Artwork',
  },
];
