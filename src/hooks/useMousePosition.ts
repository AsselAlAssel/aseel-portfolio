import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(enabled = true): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;
    const update = (event: PointerEvent) => {
      setPosition({
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener('pointermove', update, { passive: true });
    return () => window.removeEventListener('pointermove', update);
  }, [enabled]);

  return position;
}
