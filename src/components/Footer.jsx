import Icon from './Icon.jsx';
import { site } from '../data/site.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">
            Katie <em>Glover</em>
          </p>
          <p className="site-footer__tagline">{site.tagline}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Social">
          <ul role="list">
            <li>
              <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="link-underline">
                GitHub<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">
                LinkedIn<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="link-underline">
                Email
              </a>
            </li>
          </ul>
        </nav>

        <div className="site-footer__bottom">
          <p>
            © {year} {site.name}. Designed &amp; built in {site.location.split(',')[0]} with Figma and React.
          </p>
          <a href="#top" className="site-footer__top">
            Back to top
            <Icon name="arrow" />
          </a>
        </div>
      </div>
    </footer>
  );
}
