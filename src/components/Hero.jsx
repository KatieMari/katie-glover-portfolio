import { useRef } from 'react';
import Icon from './Icon.jsx';
import { site } from '../data/site.js';
import './Hero.css';

export default function Hero() {
  const artRef = useRef(null);

  // Gentle pointer parallax on the illustration (skipped for reduced motion).
  const handlePointerMove = (event) => {
    const art = artRef.current;
    if (!art || event.pointerType !== 'mouse') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = art.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
    art.style.setProperty('--mx', Math.max(-1, Math.min(1, x)).toFixed(3));
    art.style.setProperty('--my', Math.max(-1, Math.min(1, y)).toFixed(3));
  };

  const handlePointerLeave = () => {
    artRef.current?.style.setProperty('--mx', 0);
    artRef.current?.style.setProperty('--my', 0);
  };

  return (
    <section
      id="top"
      className="hero"
      aria-labelledby="hero-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="hero__label">
            <span className="hero__label-dot" aria-hidden="true" />
            <span>{site.role}</span>
            <span className="hero__label-sep" aria-hidden="true">/</span>
            <span className="hero__label-uni">{site.university}</span>
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__line">Thoughtful</span>{' '}
            <span className="hero__line">front&#8209;ends</span>{' '}
            <span className="hero__line">
              <span className="hero__pill" aria-hidden="true">
                <svg viewBox="0 0 80 24" preserveAspectRatio="none">
                  <path d="M4 14c8-10 14 6 22-2s14 6 22-2 14 6 22-2" />
                </svg>
              </span>
              with a
            </span>{' '}
            <span className="hero__line">
              <em>playful</em> streak.
            </span>
          </h1>

          <p className="hero__intro">
            Hi, I’m Katie. I love the space where creativity, design and technology meet — and I build
            digital experiences that are engaging, accessible and genuinely enjoyable to use.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn">
              Explore my projects
              <Icon name="arrowDown" />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </div>

        {/* Decorative composition — purely visual, hidden from screen readers */}
        <div className="hero__art" ref={artRef} aria-hidden="true">
          <div className="layer" style={{ '--depth': 10 }}>
            <div className="shape shape--dots" />
          </div>
          <div className="layer" style={{ '--depth': 18 }}>
            <div className="shape shape--blob" />
          </div>
          <div className="layer" style={{ '--depth': -14 }}>
            <div className="shape shape--arch" />
          </div>
          <div className="layer" style={{ '--depth': 8 }}>
            <div className="shape shape--ring" />
          </div>
          <div className="layer" style={{ '--depth': -24 }}>
            <svg className="shape shape--squiggle" viewBox="0 0 120 40">
              <path d="M4 22c10-16 18 14 28 0s18 14 28 0 18 14 28 0 18 14 28 0" />
            </svg>
          </div>
          <div className="layer" style={{ '--depth': 28 }}>
            <svg className="shape shape--star" viewBox="0 0 24 24">
              <path d="M12 1c.8 5.6 3.4 8.2 11 11-7.6 2.8-10.2 5.4-11 11-.8-5.6-3.4-8.2-11-11 7.6-2.8 10.2-5.4 11-11z" />
            </svg>
          </div>

          <div className="layer" style={{ '--depth': -10 }}>
            <div className="code-card">
              <div className="code-card__bar">
                <span />
                <span />
                <span />
                <p>katie.js</p>
              </div>
              <pre className="code-card__body">
                <code>
                  <span className="tok-key">const</span> katie = {'{\n'}
                  {'  '}studies: <span className="tok-str">'Creative Computing'</span>,{'\n'}
                  {'  '}loves: [<span className="tok-str">'design'</span>, <span className="tok-str">'code'</span>],{'\n'}
                  {'  '}builds: <span className="tok-str">'thoughtful UI'</span>,{'\n'}
                  {'}'};
                </code>
              </pre>
            </div>
          </div>

          <div className="layer" style={{ '--depth': 16 }}>
            <svg className="badge" viewBox="0 0 120 120">
              <defs>
                <path id="badge-circle" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
              </defs>
              <circle cx="60" cy="60" r="58" className="badge__bg" />
              <g className="badge__spin">
                <text>
                  <textPath href="#badge-circle" startOffset="0" textLength="272" lengthAdjust="spacing">
                    open to graduate roles ✦ say hello ✦
                  </textPath>
                </text>
              </g>
              <path
                className="badge__star"
                d="M60 44c.9 6.8 4.2 10.1 11 11-6.8.9-10.1 4.2-11 11-.9-6.8-4.2-10.1-11-11 6.8-.9 10.1-4.2 11-11z"
              />
            </svg>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll">
        <span>Scroll</span>
        <Icon name="arrowDown" />
      </a>
    </section>
  );
}
