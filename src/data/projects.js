/**
 * projects.js — the ONLY file you need to edit to add, remove or reorder projects.
 * ------------------------------------------------------------------------------
 * The first project is shown as the large "featured" showcase. The rest
 * alternate left/right automatically.
 *
 * Fields
 *  id           Unique, lowercase, no spaces (used for keys + aria ids).
 *  title        Project name.
 *  category     Short label, e.g. "Group project · Mobile app".
 *  year         e.g. "2026".
 *  summary      One or two sentences: the purpose or problem it addresses.
 *  team         Optional: who you worked with (great for group projects).
 *  role         Optional: what *you* did (design, build, research…).
 *  highlights   Optional: 2–4 short bullet points about your contribution.
 *  quote        Optional: { text, source } — real feedback from testing.
 *  tech         Array of technologies used.
 *  liveUrl      Link to the live site. Leave '' if there isn't one.
 *  liveLabel    Optional button text for liveUrl (default "View live site"),
 *               e.g. "Watch the demo" if you link to a video.
 *  codeUrl      Link to the GitHub repo. Leave '' if there isn't one.
 *  codeLabel    Optional button text for codeUrl (default "Code on GitHub").
 *  codeLinks    Optional extra repo links, e.g. a separate back end:
 *               [{ label: 'Back-end code', url: '…' }]
 *  placeholder  true = shows a dashed "placeholder" label and "coming soon"
 *               buttons. Set false for real projects.
 *
 *  preview      How the project is pictured:
 *    type       'phones'    → 1–3 phone screenshots side by side (mobile apps)
 *               'scene'     → one large screenshot + up to 2 small insets
 *                             (games, VR, 3D). Uses image/imageAlt + insets.
 *               'browser'   → a browser window (websites)
 *               'phone'     → a single phone
 *               'editorial' → a print/magazine-style sheet
 *    images     For 'phones': [{ src, alt }]. Put files in /public/projects/.
 *    insets     For 'scene': [{ src, alt, ratio? }] — small close-up images.
 *               ratio is optional, e.g. '16 / 9', to match the image's shape.
 *    palette    The preview's OWN colours (they stay the same in light and dark
 *               mode, just like a real screenshot would).
 *
 *  image / imageAlt  For 'browser', 'phone' or 'editorial': one screenshot shown
 *               inside the frame instead of the illustrated mock-up.
 */

export const projects = [
  {
    id: 'power-pals',
    title: 'Power Pals',
    category: 'Group project · Mobile app',
    year: '2026', // CHECK: change if this module ran in a different year
    summary:
      'A self-powered toy robot and companion app that teach children aged 6–11 why saving energy matters. Kids generate power with a hand crank, a button or sunlight, then use the app to follow the charge, discover energy facts and test themselves with quizzes.',
    team: 'Built with Alfie Cooper, Grace Martin, Lee Vidlak Brooker and Ro Armitage',
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
    liveUrl: 'https://youtu.be/fpZ06KiUATg',
    liveLabel: 'Watch the walkthrough',
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
    id: 'vr-cat-cafe',
    title: 'VR Cat Café',
    category: 'Solo project · Virtual reality',
    year: '2025', // CHECK: change if this module ran in a different year
    summary:
      'A cosy, explorable cat café built in Unity for VR headsets. Visitors can wander the room, pick up food, drinks and toys with their hand controllers, and choose from six vinyl records to play on a working record player.',
    role: 'Concept, environment design, Unity development',
    highlights: [
      'Built the custom vinyl player interaction: records snap into place on the player with an XR Socket Interactor and play their own song, using a small C# script.',
      'Sourced and imported my own Unity Asset Store assets, fixing materials for URP and adding colliders so objects behaved properly when picked up.',
      'Tested the room in a headset and decluttered the layout, removing objects and unused assets to make it feel calmer and run more smoothly.',
    ],
    tech: ['Unity', 'C#', 'XR Interaction Toolkit', 'URP'],
    liveUrl: 'https://youtu.be/y69z5z5lLTk',
    liveLabel: 'Watch the walkthrough',
    codeUrl: 'https://github.com/KatieMari/VR-Room',
    placeholder: false,
    preview: {
      type: 'scene',
      image: '/projects/vr-cafe-counter.webp',
      imageAlt: 'View inside the VR cat café: a cake counter, donut display, wall clock and a shelf of vinyl records',
      insets: [
        { src: '/projects/vr-cafe-welcome.webp', alt: 'In-headset welcome panel reading “Welcome to Your Cat Cafe!” above pink café tables' },
        { src: '/projects/vr-cafe-vinyl.webp', alt: 'A VR controller placing a vinyl record onto the record player' },
      ],
      palette: { bg: '#2b2130', surface: '#ffffff', ink: '#2b2130', accent: '#ff8fb3', soft: '#f6d3c4' },
    },
  },
  {
    id: 'my-water-footprint',
    title: 'My Water Footprint',
    category: 'Solo project · Full-stack website',
    year: '2026', // CHECK: change if this module ran in a different year
    summary:
      'A website supporting UN Sustainable Development Goal 6 (clean water and sanitation). Visitors enter their weekly showers, laundry and diet, and the calculator estimates their daily water use, with facts, practical ways to cut back and links to clean-water charities.',
    role: 'Design, front-end and back-end development',
    highlights: [
      'Built the front end in React with Vite and React Router across five pages, with a Chart.js chart breaking down each result.',
      'Wrote a REST API in Node, Express and TypeScript, keeping the calculation in its own function: the calculator posts answers to /api/calculate and gets back total litres, a breakdown and personalised advice.',
      'Deployed both halves to Vercel and fixed a 404 on page refresh by adding a vercel.json rewrite, so React Router could handle every route.',
    ],
    tech: ['React', 'Vite', 'React Router', 'Chart.js', 'Node.js', 'Express', 'TypeScript'],
    liveUrl: 'https://front-end-bice-iota.vercel.app',
    liveLabel: 'Try the calculator',
    codeUrl: 'https://github.com/KatieMari/FrontEnd',
    codeLabel: 'Front-end code',
    codeLinks: [{ label: 'Back-end code', url: 'https://github.com/KatieMari/BackEnd' }],
    placeholder: false,
    preview: {
      type: 'browser',
      image: '/projects/water-footprint-results.webp',
      imageAlt: 'Calculator results showing 693 litres a day, a breakdown by showers and laundry, a bar chart and personalised advice',
      palette: { bg: '#f4f9ff', surface: '#ffffff', ink: '#1e3a5f', accent: '#3a86e0', soft: '#cfe6fb' },
    },
  },
  {
    id: 'voice-soundboard',
    title: 'Voice-Controlled Soundboard',
    category: 'Solo project · Machine learning',
    year: '2026', // CHECK: change if this module ran in a different year
    summary:
      'A browser app that listens for spoken words and answers back. Say one of eleven words, from animal sounds to pop artists, and it shows the word on screen and plays a matching clip, all powered by a speech model I trained myself.',
    role: 'Concept, model training, development',
    highlights: [
      'Trained a custom speech recognition model in Teachable Machine, then added extra voices and accents when testing showed it struggled with speakers other than me.',
      'Added prediction locking so the microphone stops listening while a clip plays, which fixed labels flickering as the app heard its own audio.',
      'Switched to loading each sound only when it’s first needed, which stopped the app getting stuck on “Loading…”, and added confidence thresholds and a debug flag.',
    ],
    tech: ['ml5.js', 'p5.js', 'Teachable Machine', 'JavaScript'],
    liveUrl: '',
    codeUrl: 'https://github.com/KatieMari/ML5.js_Sound_Recognition',
    placeholder: false,
    preview: {
      type: 'scene',
      image: '/projects/soundboard-ui.webp',
      imageAlt: 'The soundboard after recognising the word “Madison”, with the list of words it can hear in two columns',
      insets: [
        {
          src: '/projects/soundboard-console.webp',
          alt: 'Console output showing each predicted label with its confidence score',
          ratio: '685 / 353',
        },
      ],
      palette: { bg: '#ffffff', surface: '#ffffff', ink: '#2b2130', accent: '#c86bd8', soft: '#ead7f2' },
    },
  },
  {
    id: 'instrumental',
    title: 'Instrumental',
    category: 'Solo project · Mobile app',
    year: '2025', // CHECK: change if this module ran in a different year
    summary:
      'A mobile app with two instruments you can actually play: a piano you tap and a guitar you strum by dragging your finger across the strings, inspired by how GarageBand feels to use.',
    role: 'Design and development',
    highlights: [
      'Built guitar strumming with React Native’s Gesture Responder System, working out which string the finger is on from its position so each one plays as you drag across.',
      'Used forwardRef and useImperativeHandle so the guitar can tell each string component to play, keeping every key and string as its own reusable component.',
      'Wrote a custom useOrientation hook so the instruments only appear in landscape, with a friendly prompt to rotate the phone.',
    ],
    tech: ['React Native', 'Expo', 'Expo Router', 'TypeScript'],
    liveUrl: '',
    codeUrl: 'https://github.com/KatieMari/Instrumental_Project_',
    placeholder: false,
    preview: {
      type: 'scene',
      image: '/projects/instrumental-piano.webp',
      imageAlt: 'The piano screen: white and lilac keys on a purple background',
      insets: [
        {
          src: '/projects/instrumental-guitar.webp',
          alt: 'The guitar screen: a pale pink fretboard with six strings',
          ratio: '1300 / 617',
        },
      ],
      palette: { bg: '#b9a6cc', surface: '#ffffff', ink: '#2b2130', accent: '#9b7fb6', soft: '#e3d8ee' },
    },
  },
];
