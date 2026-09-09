import { useEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

export function usePointerMotion() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');

    const update = (event: PointerEvent) => {
      x.set(event.clientX / window.innerWidth - 0.5);
      y.set(event.clientY / window.innerHeight - 0.5);
    };

    const syncListener = () => {
      window.removeEventListener('pointermove', update);
      if (pointerQuery.matches && !reducedMotion) {
        window.addEventListener('pointermove', update, { passive: true });
      } else {
        x.set(0);
        y.set(0);
      }
    };

    syncListener();
    pointerQuery.addEventListener('change', syncListener);
    return () => {
      pointerQuery.removeEventListener('change', syncListener);
      window.removeEventListener('pointermove', update);
    };
  }, [reducedMotion, x, y]);

  return { x, y };
}
