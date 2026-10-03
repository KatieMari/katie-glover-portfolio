import Reveal from './Reveal.jsx';
import { skillGroups, exploring } from '../data/skills.js';
import './Skills.css';

/** Small decorative shape for each skill group. */
function GroupShape({ shape }) {
  if (shape === 'star')
    return (
      <svg className="skill-shape skill-shape--star" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1c.8 5.6 3.4 8.2 11 11-7.6 2.8-10.2 5.4-11 11-.8-5.6-3.4-8.2-11-11 7.6-2.8 10.2-5.4 11-11z" />
      </svg>
    );
  return <span className={`skill-shape skill-shape--${shape}`} aria-hidden="true" />;
}

/**
 * One skill. If it has projects in `usedIn`, hovering over it, tabbing to it or
 * tapping it shows where it was used. Screen readers hear the same text.
 */
function Skill({ name, usedIn = [] }) {
  if (!usedIn.length) {
    return <li className="skill">{name}</li>;
  }
  return (
    <li className="skill skill--has-projects" tabIndex={0}>
      {name}
      <span className="skill__dot" aria-hidden="true" />
      <span className="skill__tip">
        <span className="visually-hidden"> — </span>
        Used in {usedIn.join(' & ')}
      </span>
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="container">
        <Reveal className="skills__header">
          <p className="eyebrow">
            <span className="eyebrow__num">03</span> Skills &amp; tools
          </p>
          <h2 id="skills-title" className="section-title">
            A growing <em>toolkit.</em>
          </h2>
          <p className="section-lede">
            Everything here is something I’ve used in a real project. Hover over or tap a skill with a pink
            dot to see where.
          </p>
        </Reveal>

        <ol className="skills__groups" role="list">
          {skillGroups.map((group, i) => (
            <Reveal as="li" key={group.id} className="skill-group" delay={i * 70}>
              <div className="skill-group__head">
                <GroupShape shape={group.shape} />
                <div>
                  <h3 className="skill-group__title">{group.title}</h3>
                  <p className="skill-group__blurb">{group.blurb}</p>
                </div>
              </div>
              <ul className="skill-group__list" role="list">
                {group.skills.map((skill) => (
                  <Skill key={skill.name} {...skill} />
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>

        {exploring.length > 0 && (
          <Reveal className="exploring">
            <p className="exploring__title">Exploring next</p>
            <ul className="exploring__list" role="list">
              {exploring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
