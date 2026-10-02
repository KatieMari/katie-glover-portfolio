import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Marquee from './components/Marquee.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Approach from './components/Approach.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useTheme } from './hooks/useTheme.js';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Marquee />
        <Projects />
        <Skills />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
