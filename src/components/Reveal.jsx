import { useInView } from '../hooks/useInView.js';

/**
 * Reveal — fades + lifts its children in when they scroll into view.
 * Disabled automatically for visitors who prefer reduced motion (see base.css).
 *
 * <Reveal as="li" delay={120}>…</Reveal>
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
