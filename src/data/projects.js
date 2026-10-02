export const projects = [
  {
    id: 'power-pals',
    title: 'Power Pals',
    category: 'Group project · Mobile app',
    year: '2026', // CHECK: change if this module ran in a different year
    summary:
      'A self-powered toy robot and companion app that teach children aged 6–11 why saving energy matters. Kids generate power with a hand crank, a button or sunlight, then use the app to follow the charge, discover energy facts and test themselves with quizzes.',
    team: '5 person team',
    role: 'App design, React Native development, user testing',
    highlights: [
      'Designed every screen and the user flow in Figma, and created the style guide used across the app, presentation and toy.',
      'Coded most of the app in React Native with Expo Router, building reusable components for navigation, headers, the battery card and settings.',
      'Ran testing with children using observation and survey forms, then added a welcome modal and reordered the home page in response.',
    ],
    quote: {
      text: 'I’d tell my friends “free power!” and I think they would like it too.',
      source: 'Child tester, age 11',
    },
    tech: ['React Native', 'Expo', 'Expo Router', 'JavaScript', 'Figma'],
    liveUrl: '',
    codeUrl: 'https://github.com/leeBrookerNUA/Bsc2b_CollaborativeApp',
    placeholder: false,
    preview: {
      type: 'phones',
      images: [
        { src: '/projects/powerpals-home.webp', alt: 'Power Pals home screen with Instructions, Facts & Tips, Quiz and Start buttons' },
        { src: '/projects/powerpals-play.webp', alt: 'Play screen showing a battery charging to 65% as the hand crank turns' },
        { src: '/projects/powerpals-quiz.webp', alt: 'Easy quiz screen asking which energy source comes from the sun, with Solar marked correct' },
      ],
      palette: { bg: '#5b8def', surface: '#ffffff', ink: '#1d2b5c', accent: '#ffcf4d', soft: '#c9dcff' },
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
