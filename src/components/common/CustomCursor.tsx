import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type CursorMode = 'default' | 'link' | 'project' | 'code';

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [mode, setMode] = useState<CursorMode>('default');
  const [enabled, setEnabled] = useState(false);
  const x = useSpring(-40, { stiffness: 700, damping: 45 });
  const y = useSpring(-40, { stiffness: 700, damping: 45 });
  const currentTarget = useRef<Element | null>(null);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)');
    const updateEnabled = () => setEnabled(pointerQuery.matches && !reducedMotion);
    updateEnabled();
    pointerQuery.addEventListener('change', updateEnabled);
    return () => pointerQuery.removeEventListener('change', updateEnabled);
  }, [reducedMotion]);

  useEffect(() => {
    document.body.classList.toggle('custom-cursor-active', enabled);
    return () => document.body.classList.remove('custom-cursor-active');
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = (event.target as Element).closest('[data-cursor], a, button, input');
      if (target === currentTarget.current) return;
      currentTarget.current = target;
      const explicitMode = target?.getAttribute('data-cursor') as CursorMode | null;
      setMode(explicitMode ?? (target ? 'link' : 'default'));
    };

    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className={`custom-cursor custom-cursor--${mode}`}
      style={{ x, y }}
      aria-hidden="true"
    >
      {mode === 'project' ? 'VIEW' : mode === 'code' ? '</>' : ''}
    </motion.div>
  );
}
