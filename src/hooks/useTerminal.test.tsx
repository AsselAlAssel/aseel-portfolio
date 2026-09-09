import { act, renderHook } from '@testing-library/react';
import type { FormEvent } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { useTerminal } from './useTerminal';

describe('useTerminal', () => {
  it('normalizes a command and appends its response to history', () => {
    const { result } = renderHook(() => useTerminal());

    act(() => result.current.setCommand('  SKILLS  '));
    act(() =>
      result.current.submitCommand({
        preventDefault: vi.fn(),
      } as unknown as FormEvent<HTMLFormElement>)
    );

    expect(result.current.command).toBe('');
    expect(result.current.history).toEqual([
      '> skills',
      'React · Next.js · TypeScript · Tailwind CSS',
    ]);
  });

  it('keeps only the current and previous command-response pairs', () => {
    const { result } = renderHook(() => useTerminal());

    for (const command of ['help', 'projects', 'skills', 'contact']) {
      act(() => result.current.setCommand(command));
      act(() =>
        result.current.submitCommand({
          preventDefault: vi.fn(),
        } as unknown as FormEvent<HTMLFormElement>)
      );
    }

    expect(result.current.history).toHaveLength(4);
    expect(result.current.history[0]).toBe('> skills');
    expect(result.current.history.at(-1)).toBe('aseelalali81@gmail.com');
  });
});
