import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { useHeaderControls } from './useHeaderControls';

afterEach(() => {
  document.documentElement.removeAttribute('data-theme');
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
});

describe('useHeaderControls', () => {
  it('toggles the document theme', () => {
    const { result } = renderHook(() => useHeaderControls());

    expect(document.documentElement.dataset.theme).toBe('dark');
    act(() => result.current.toggleTheme());
    expect(document.documentElement.dataset.theme).toBe('light');
  });

  it('tracks whether the page passed the header threshold', () => {
    const { result } = renderHook(() => useHeaderControls());

    expect(result.current.scrolled).toBe(false);
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 48 });
    act(() => window.dispatchEvent(new Event('scroll')));
    expect(result.current.scrolled).toBe(true);
  });

  it('owns the mobile menu state', () => {
    const { result } = renderHook(() => useHeaderControls());

    act(() => result.current.toggleMenu());
    expect(result.current.menuOpen).toBe(true);
    act(() => result.current.closeMenu());
    expect(result.current.menuOpen).toBe(false);
  });
});
