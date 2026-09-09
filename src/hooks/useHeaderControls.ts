import { useCallback, useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 32;

export function useHeaderControls() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = lightTheme ? 'light' : 'dark';
  }, [lightTheme]);

  const toggleTheme = useCallback(() => setLightTheme((current) => !current), []);
  const toggleMenu = useCallback(() => setMenuOpen((current) => !current), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return { closeMenu, lightTheme, menuOpen, scrolled, toggleMenu, toggleTheme };
}
