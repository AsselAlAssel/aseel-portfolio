import { motionValue } from 'framer-motion';
import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useParallaxStyle } from './useParallaxStyle';

describe('useParallaxStyle', () => {
  it('maps normalized pointer values to element-specific depth', () => {
    const x = motionValue(0.25);
    const y = motionValue(-0.5);
    const { result } = renderHook(() => useParallaxStyle(x, y, 12, 8));

    expect(result.current.x.get()).toBe(3);
    expect(result.current.y.get()).toBe(-4);
  });
});
