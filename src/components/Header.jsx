import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import Icon from './Icon.jsx';
import { useActiveSection } from '../hooks/useActiveSection.js';
import './Header.css';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];
// 'top' (the hero) is watched too, so no link is highlighted at the top of the page.
const SECTION_IDS = ['top', ...NAV_LINKS.map((link) => link.id)];

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const active = useActiveSection(SECTION_IDS);

  // Add a subtle background + border once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu: lock page scroll, close on Escape, close when resized to desktop.
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 56em)');
    const onResize = () => desktop.matches && setMenuOpen(false);

    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled || menuOpen ? 'is-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="site-header__inner container">
        <a href="#top" className="wordmark" onClick={closeMenu} aria-label="Katie Glover — back to top">
          <span className="wordmark__mark" aria-hidden="true">
            <Icon name="sparkle" />
          </span>
          <span className="wordmark__text">
            Katie <em>Glover</em>
          </span>
        </a>

        <nav className="site-nav" aria-label="Main">
          <ul id="site-menu" className="site-nav__list" role="list">
            {NAV_LINKS.map((link, i) => (
              <li key={link.id} style={{ '--i': i }}>
                <a
                  href={`#${link.id}`}
                  className="site-nav__link link-underline"
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  <span className="site-nav__num" aria-hidden="true">
                    0{i + 1}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="site-nav__cta-item" style={{ '--i': NAV_LINKS.length }}>
              <a href="#contact" className="btn site-nav__cta" onClick={closeMenu}>
                Let’s talk
                <Icon name="arrow" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            ref={menuButtonRef}
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="menu-button__bars" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
