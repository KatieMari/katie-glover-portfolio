import { site } from '../data/site.js';

/**
 * PlaceholderBadge — a dashed label that flags content you still need to
 * replace. Turn them all off with `showPlaceholderBadges: false` in site.js.
 */
export default function PlaceholderBadge({ show = true, children = 'Placeholder' }) {
  if (!site.showPlaceholderBadges || !show) return null;
  return <span className="placeholder-badge">{children}</span>;
}
