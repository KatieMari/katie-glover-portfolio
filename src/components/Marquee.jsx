import { site } from '../data/site.js';
import './Marquee.css';

/** Marquee — a slow-scrolling strip of interests between sections. */
export default function Marquee() {
  const items = site.marquee;
  const row = (hidden) => (
    <ul className="marquee__row" role="list" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item}>
          {item}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 1c.8 5.6 3.4 8.2 11 11-7.6 2.8-10.2 5.4-11 11-.8-5.6-3.4-8.2-11-11 7.6-2.8 10.2-5.4 11-11z" />
          </svg>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" role="region" aria-label="Things I enjoy working on">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
