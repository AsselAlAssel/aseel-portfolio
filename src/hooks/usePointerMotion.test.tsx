import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { usePointerMotion } from './usePointerMotion';

const makeMediaQuery = (matches: boolean): MediaQueryList => ({
  matches,
  media: '',
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn(),
  dispatchEvent: vi.fn(),
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('usePointerMotion', () => {
  it('updates motion values without storing pointer coordinates in React state', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn((query: string) => makeMediaQuery(!query.includes('prefers-reduced-motion')))
    );
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1000 });
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 500 });
    const { result } = renderHook(() => usePointerMotion());

    act(() => window.dispatchEvent(new MouseEvent('pointermove', { clientX: 750, clientY: 125 })));

    expect(result.current.x.get()).toBe(0.25);
    expect(result.current.y.get()).toBe(-0.25);
  });
});
