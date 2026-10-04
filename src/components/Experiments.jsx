import Reveal from './Reveal.jsx';
import Icon from './Icon.jsx';
import { experiments } from '../data/experiments.js';
import './Experiments.css';

/**
 * Experiments — a compact list of smaller projects, shown under the main
 * projects. Edit the content in src/data/experiments.js.
 */
export default function Experiments() {
  if (!experiments.length) return null;

  return (
    <section className="experiments" aria-labelledby="experiments-title">
      <div className="container">
        <Reveal className="experiments__header">
          <p className="eyebrow">Smaller experiments</p>
          <h3 id="experiments-title" className="experiments__title">
            Little things I’ve built <em>along the way.</em>
          </h3>
        </Reveal>

        <ul className="experiments__list" role="list">
          {experiments.map((item, i) => (
            <Reveal as="li" key={item.title} className="experiment" delay={i * 70}>
              <div className="experiment__top">
                <h4 className="experiment__name">{item.title}</h4>
                <span className="experiment__year">{item.year}</span>
              </div>
              <p className="experiment__summary">{item.summary}</p>
              <p className="experiment__tech">{item.tech.join(' · ')}</p>
              <div className="experiment__links">
                {item.liveUrl && (
                  <a className="link-underline" href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                    Try it<span className="visually-hidden">: {item.title} (opens in a new tab)</span>
                    <Icon name="external" />
                  </a>
                )}
                {item.codeUrl && (
                  <a className="link-underline" href={item.codeUrl} target="_blank" rel="noopener noreferrer">
                    Code<span className="visually-hidden"> for {item.title} (opens in a new tab)</span>
                    <Icon name="github" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
