import Reveal from "./Reveal.jsx";
import { site } from "../data/site.js";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__portrait">
          <figure className="portrait">
            {site.photo ? (
              <img
                src={site.photo}
                alt={site.photoAlt}
                width="480"
                height="600"
                loading="lazy"
              />
            ) : (
              <div className="portrait__placeholder">
                <span className="portrait__initials" aria-hidden="true">
                  K<em>g</em>
                </span>
              </div>
            )}
          </figure>
          <span className="portrait__sticker" aria-hidden="true">
            hi!
          </span>
        </Reveal>

        <div className="about__copy">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow__num">01</span> About me
            </p>
            <h2 id="about-title" className="section-title">
              I care about how it looks, <em>and how it works.</em>
            </h2>
          </Reveal>

          <Reveal className="about__bio" delay={100}>
            <p>
              I’m Katie, a final-year {site.course} student at {site.university}
              . I’m drawn to front-end development because it sits right where
              creative thinking and technical problem-solving meet.
            </p>
            <p>
              I enjoy taking an idea from a rough sketch to something people can
              click, tap and explore, paying attention to layout, motion and the
              small details that make an interface feel considered.
            </p>
            <p>
              <p>
                I’m still refining my skills and enjoy experimenting across
                different languages and tools. Picking up something new and
                figuring out how it works is one of my favourite parts of the
                process. Right now I’m focused on building websites and
                applications that are both visually appealing and intuitive to
                use.
              </p>
            </p>
          </Reveal>

          <div className="about__extras">
            <Reveal as="dl" className="facts" delay={150}>
              <div>
                <dt>Studying</dt>
                <dd>{site.course}</dd>
              </div>
              <div>
                <dt>At</dt>
                <dd>{site.university}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Front-end development &amp; UI design</dd>
              </div>
            </Reveal>

            <Reveal className="currently" delay={220}>
              <p className="currently__title">Currently</p>
              <ul role="list">
                {site.currently.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    {item.value}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
