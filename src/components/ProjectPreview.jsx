import './ProjectPreview.css';

/**
 * ProjectPreview — the visual for a project.
 *  - If the project has an `image`, the screenshot is shown inside a device frame.
 *  - Otherwise an illustrated mock-up is drawn with CSS, using the project's own
 *    palette from projects.js (so it looks the same in light and dark mode,
 *    just like a real screenshot would).
 */
export default function ProjectPreview({ project }) {
  const { preview = { type: 'browser' }, image, imageAlt, title } = project;
  const p = preview.palette || {};
  const style = {
    '--p-bg': p.bg,
    '--p-surface': p.surface,
    '--p-ink': p.ink,
    '--p-accent': p.accent,
    '--p-soft': p.soft,
  };

  const screenshot = image ? (
    <img className="pv-shot" src={image} alt={imageAlt || `Screenshot of ${title}`} loading="lazy" />
  ) : null;

  if (preview.type === 'phone') {
    return (
      <div className="pv pv--phone" style={style} aria-hidden={image ? undefined : 'true'}>
        <div className="pv-phone">
          <div className="pv-phone__notch" />
          <div className="pv-phone__screen">
            {screenshot || (
              <>
                <div className="pv-app__top">
                  <span className="pv-dot" />
                  <span className="pv-line pv-line--sm" />
                  <span className="pv-avatar" />
                </div>
                <div className="pv-line pv-line--title" />
                <div className="pv-line pv-line--md" />
                <div className="pv-app__hero">
                  <span className="pv-app__orb" />
                  <span className="pv-app__orb pv-app__orb--2" />
                </div>
                <ul className="pv-app__list">
                  {[0, 1, 2].map((i) => (
                    <li key={i}>
                      <span className="pv-chip" />
                      <span className="pv-line pv-line--md" />
                    </li>
                  ))}
                </ul>
                <div className="pv-app__tabs">
                  <span />
                  <span className="is-active" />
                  <span />
                  <span />
                </div>
              </>
            )}
          </div>
        </div>
        {!image && (
          <div className="pv-floating">
            <span className="pv-floating__ring" />
            <span className="pv-line pv-line--sm" />
            <span className="pv-line pv-line--xs" />
          </div>
        )}
      </div>
    );
  }

  if (preview.type === 'editorial') {
    return (
      <div className="pv pv--editorial" style={style} aria-hidden={image ? undefined : 'true'}>
        <div className="pv-sheet">
          {screenshot || (
            <>
              <div className="pv-ed__head">
                <span className="pv-ed__mast">Aa</span>
                <span className="pv-line pv-line--sm" />
              </div>
              <div className="pv-ed__body">
                <div className="pv-ed__art">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <span key={i} style={{ '--i': i }} />
                  ))}
                </div>
                <div className="pv-ed__cols">
                  <span className="pv-line pv-line--title" />
                  <span className="pv-line" />
                  <span className="pv-line" />
                  <span className="pv-line pv-line--md" />
                  <span className="pv-line" />
                  <span className="pv-line pv-line--sm" />
                  <span className="pv-ed__btn" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Default: browser window
  return (
    <div className="pv pv--browser" style={style} aria-hidden={image ? undefined : 'true'}>
      <div className="pv-window">
        <div className="pv-window__bar">
          <span />
          <span />
          <span />
          <div className="pv-window__url" />
        </div>
        <div className="pv-window__screen">
          {screenshot || (
            <>
              <div className="pv-site__nav">
                <span className="pv-dot" />
                <span className="pv-line pv-line--xs" />
                <span className="pv-line pv-line--xs" />
                <span className="pv-line pv-line--xs" />
                <span className="pv-site__btn" />
              </div>
              <div className="pv-site__hero">
                <div className="pv-site__copy">
                  <span className="pv-line pv-line--xl" />
                  <span className="pv-line pv-line--lg" />
                  <span className="pv-line pv-line--md pv-line--muted" />
                  <span className="pv-site__btn pv-site__btn--lg" />
                </div>
                <div className="pv-site__visual">
                  <span className="pv-site__circle" />
                  <span className="pv-site__square" />
                </div>
              </div>
              <div className="pv-site__cards">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="pv-site__card">
                    <span className="pv-chip" />
                    <span className="pv-line pv-line--md" />
                    <span className="pv-line pv-line--sm pv-line--muted" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
