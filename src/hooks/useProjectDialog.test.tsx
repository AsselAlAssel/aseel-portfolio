import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { useProjectDialog } from './useProjectDialog';

function DialogHarness({ onClose }: { onClose: () => void }) {
  const panelRef = useProjectDialog(onClose);
  return (
    <div ref={panelRef} tabIndex={-1}>
      <button type="button">Close</button>
    </div>
  );
}

describe('useProjectDialog', () => {
  it('locks page scrolling and closes on Escape', () => {
    const onClose = vi.fn();
    const { unmount } = render(<DialogHarness onClose={onClose} />);

    expect(document.body.style.overflow).toBe('hidden');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledOnce();

    unmount();
    expect(document.body.style.overflow).toBe('');
  });

  it('restores focus to the opener after the dialog unmounts', () => {
    const opener = document.createElement('button');
    document.body.append(opener);
    opener.focus();

    const { unmount } = render(<DialogHarness onClose={vi.fn()} />);
    unmount();

    expect(document.activeElement).toBe(opener);
    opener.remove();
  });
});
