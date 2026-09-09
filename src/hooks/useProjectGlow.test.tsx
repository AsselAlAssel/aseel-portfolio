import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useProjectGlow } from './useProjectGlow';

describe('useProjectGlow', () => {
  it('updates the card glow coordinates relative to its bounds', () => {
    const { result } = renderHook(() => useProjectGlow());
    const element = document.createElement('article');
    vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({
      left: 10,
      top: 20,
      right: 210,
      bottom: 120,
      width: 200,
      height: 100,
      x: 10,
      y: 20,
      toJSON: () => ({}),
    });

    result.current({ currentTarget: element, clientX: 45, clientY: 70 } as never);

    expect(element.style.getPropertyValue('--pointer-x')).toBe('35px');
    expect(element.style.getPropertyValue('--pointer-y')).toBe('50px');
  });
});
