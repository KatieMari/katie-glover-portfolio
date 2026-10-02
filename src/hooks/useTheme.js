import { useCallback, useEffect, useState } from 'react';

/**
 * useTheme — light/dark theme management.
 *
 * How it works
 * 1. A tiny inline script in index.html sets <html data-theme="…"> before the
 *    page paints (saved choice → otherwise the OS setting). That avoids a flash.
 * 2. This hook reads that starting value, then keeps React state, the
 *    data-theme attribute and localStorage in sync.
 * 3. If the visitor has never chosen a theme manually, we keep following the
 *    OS setting live (e.g. when their laptop switches to dark mode at sunset).
 */

const STORAGE_KEY = 'kg-theme';
const media = '(prefers-color-scheme: dark)';

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null; // localStorage can be blocked (private mode, strict settings)
  }
}

function getInitialTheme() {
  const fromHtml = document.documentElement.getAttribute('data-theme');
  if (fromHtml === 'light' || fromHtml === 'dark') return fromHtml;
  return window.matchMedia(media).matches ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Reflect the current theme on <html> so every CSS variable updates.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Follow OS changes until the visitor picks a theme themselves.
  useEffect(() => {
    const mq = window.matchMedia(media);
    const onChange = (event) => {
      if (!readStored()) setTheme(event.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Briefly enable colour transitions everywhere, then remove the class so
    // normal hover transitions aren't slowed down.
    if (!reduceMotion) {
      root.classList.add('theme-transition');
      window.setTimeout(() => root.classList.remove('theme-transition'), 450);
    }

    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore — the theme still changes for this visit */
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
