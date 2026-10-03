import { useState } from "react";
import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import { site } from "../data/site.js";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const canCopy = typeof navigator !== "undefined" && !!navigator.clipboard;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact section"
      aria-labelledby="contact-title"
    >
      <div className="contact__shapes" aria-hidden="true">
        <span className="contact__circle" />
        <span className="contact__ring" />
      </div>

      <div className="container contact__inner">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__num">05</span> Contact
          </p>
          <h2 id="contact-title" className="contact__title">
            Let's work <em>together!</em>
          </h2>
          <p className="contact__intro">
            I graduate in 2027 and want to start my career in a front-end role
            where I can keep developing both my design and coding skills. I'm
            keen to learn from an experienced team and get better at building
            things people enjoy using. If that sounds like a good fit, let's
            talk.
          </p>
        </Reveal>

        <Reveal className="contact__actions" delay={120}>
          <a className="btn contact__cta" href={`mailto:${site.email}`}>
            <Icon name="mail" />
            Say hello
          </a>

          <div className="contact__email">
            <a
              className="contact__email-link link-underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>

            {canCopy && (
              <button
                type="button"
                className="contact__copy"
                onClick={copyEmail}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            )}
            <span className="visually-hidden" role="status" aria-live="polite">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>
        </Reveal>

        <Reveal as="ul" className="contact__socials" role="list" delay={200}>
          <li>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Icon name="github" />
              GitHub
              <span className="visually-hidden"> (opens in a new tab)</span>
              <Icon name="external" className="social-link__arrow" />
            </a>
          </li>
          <li>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Icon name="linkedin" />
              LinkedIn
              <span className="visually-hidden"> (opens in a new tab)</span>
              <Icon name="external" className="social-link__arrow" />
            </a>
          </li>
          {site.showPlaceholderBadges && (
            <li className="contact__social-note"></li>
          )}
        </Reveal>
      </div>
    </section>
  );
}
