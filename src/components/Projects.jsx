import Reveal from './Reveal.jsx';
import ProjectPreview from './ProjectPreview.jsx';
import PlaceholderBadge from './PlaceholderBadge.jsx';
import Icon from './Icon.jsx';
import { projects } from '../data/projects.js';
import { site } from '../data/site.js';
import './Projects.css';

/** One link button, or a quiet "coming soon" note when there's no URL yet. */
function ProjectLink({ href, label, icon, title, variant, isPlaceholder }) {
  // Real projects simply hide a missing link; placeholders show "coming soon".
  if (!href && !isPlaceholder) return null;
  if (!href) {
    return (
      <span className="project__link project__link--empty">
        {label} <span className="project__soon">coming soon</span>
      </span>
    );
  }
  return (
    <a
      className={`btn ${variant === 'ghost' ? 'btn--ghost' : ''} project__link`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <span className="visually-hidden">
        {' '}
        for {title} (opens in a new tab)
      </span>
      <Icon name={icon} />
    </a>
  );
}

function Project({ project, index }) {
  const featured = index === 0;
  const number = String(index + 1).padStart(2, '0');
  const layout = featured ? 'featured' : index % 2 === 1 ? 'right' : 'left';

  return (
    <Reveal as="article" className={`project project--${layout}`} aria-labelledby={`${project.id}-title`}>
      <div className="project__media">
        <ProjectPreview project={project} />
      </div>

      <div className="project__info">
        <div className="project__head">
          <div className="project__meta">
            <span className="project__num" aria-hidden="true">
              {number}
            </span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <PlaceholderBadge show={project.placeholder} />
          </div>

          <h3 id={`${project.id}-title`} className="project__title">
            {project.title}
          </h3>
        </div>
        <p className="project__summary">{project.summary}</p>

        {project.team && <p className="project__team">{project.team}</p>}

        {project.role && (
          <p className="project__role">
            <span>My role</span> {project.role}
          </p>
        )}

        {project.highlights?.length > 0 && (
          <ul className="project__highlights" role="list" aria-label="My contribution">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {project.quote && (
          <blockquote className="project__quote">
            <p>{project.quote.text}</p>
            <footer>— {project.quote.source}</footer>
          </blockquote>
        )}

        <ul className="project__tech" role="list" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project__links">
          <ProjectLink
            href={project.liveUrl}
            label={project.liveLabel || 'View live site'}
            icon="external"
            title={project.title}
            isPlaceholder={project.placeholder}
          />
          <ProjectLink
            href={project.codeUrl}
            label={project.codeLabel || 'Code on GitHub'}
            icon="github"
            title={project.title}
            variant={project.liveUrl ? 'ghost' : undefined}
            isPlaceholder={project.placeholder}
          />
          {(project.codeLinks || []).map((link) => (
            <ProjectLink
              key={link.url}
              href={link.url}
              label={link.label}
              icon="github"
              title={project.title}
              variant="ghost"
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects section" aria-labelledby="projects-title">
      <div className="container">
        <Reveal className="projects__header">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__num">02</span> Selected work
            </p>
            <h2 id="projects-title" className="section-title">
              Things I’ve <em>designed</em> &amp; built.
            </h2>
          </div>
          <p className="section-lede">
            A mix of university briefs and personal experiments, each one a chance to learn something new
            about designing and building for the web.
          </p>
        </Reveal>

        <div className="projects__list">
          {projects.map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
        </div>

        <Reveal className="projects__more">
          <p>Want to see more, including work in progress?</p>
          <a className="btn btn--dark" href={site.links.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" />
            Browse my GitHub
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
