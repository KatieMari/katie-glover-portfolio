import Reveal from './Reveal.jsx';
import { approach } from '../data/approach.js';
import './Approach.css';

export default function Approach() {
  return (
    <section className="approach section" aria-labelledby="approach-title">
      <div className="container">
        <div className="approach__panel">
          <Reveal className="approach__header">
            <p className="eyebrow approach__eyebrow">
              <span className="eyebrow__num">04</span> My approach
            </p>
            <h2 id="approach-title" className="section-title">
              From first spark to <em>final polish.</em>
            </h2>
          </Reveal>

          <ol className="approach__steps" role="list">
            {approach.map((step, i) => (
              <Reveal as="li" key={step.title} className="step" delay={i * 110}>
                <span className="step__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="step__title">
                  <span className="visually-hidden">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="step__text">{step.text}</p>
              </Reveal>
            ))}
          </ol>

          <svg className="approach__doodle" viewBox="0 0 200 60" aria-hidden="true">
            <path d="M4 40c20-30 40 20 60-4s30-28 52-6 30 24 48 2 20-20 32-10" />
          </svg>
        </div>
      </div>
    </section>
  );
}
