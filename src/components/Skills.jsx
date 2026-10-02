import Reveal from './Reveal.jsx';
import PlaceholderBadge from './PlaceholderBadge.jsx';
import { skillGroups } from '../data/skills.js';
import './Skills.css';

/** Small decorative shape for each skill group. */
function GroupShape({ shape }) {
  if (shape === 'arch') return <span className="skill-shape skill-shape--arch" aria-hidden="true" />;
  if (shape === 'star')
    return (
      <svg className="skill-shape skill-shape--star" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1c.8 5.6 3.4 8.2 11 11-7.6 2.8-10.2 5.4-11 11-.8-5.6-3.4-8.2-11-11 7.6-2.8 10.2-5.4 11-11z" />
      </svg>
    );
  return <span className="skill-shape skill-shape--circle" aria-hidden="true" />;
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
            An honest snapshot of what I work with now, and what I’m learning next.{' '}
            <PlaceholderBadge>Edit in skills.js</PlaceholderBadge>
          </p>
        </Reveal>

        <ol className="skills__groups" role="list">
          {skillGroups.map((group, i) => (
            <Reveal as="li" key={group.id} className="skill-group" delay={i * 80}>
              <div className="skill-group__head">
                <GroupShape shape={group.shape} />
                <div>
                  <h3 className="skill-group__title">{group.title}</h3>
                  <p className="skill-group__blurb">{group.blurb}</p>
                </div>
              </div>
              <ul className="skill-group__list" role="list">
                {group.skills.map((skill) => (
                  <li key={skill.name} className={skill.learning ? 'is-learning' : undefined}>
                    {skill.name}
                    {skill.learning && <span className="skill-learning">learning</span>}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
