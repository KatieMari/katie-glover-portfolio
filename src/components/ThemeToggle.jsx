import { useId } from 'react';
import './ThemeToggle.css';

export default function ThemeToggle({ theme, onToggle }) {
  const maskId = useId();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      className="theme-toggle"
      data-mode={theme}
      onClick={onToggle}
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
        <mask id={maskId}>
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <circle className="theme-toggle__cut" cx="12" cy="12" r="6" fill="black" />
        </mask>
        <circle className="theme-toggle__core" cx="12" cy="12" r="5" fill="currentColor" mask={`url(#${maskId})`} />
        <g className="theme-toggle__rays" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 1.5v2.2M12 20.3v2.2M1.5 12h2.2M20.3 12h2.2M4.6 4.6l1.5 1.5M17.9 17.9l1.5 1.5M4.6 19.4l1.5-1.5M17.9 6.1l1.5-1.5" />
        </g>
      </svg>
    </button>
  );
}
