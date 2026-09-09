import { m } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useParallaxStyle } from '../../hooks/useParallaxStyle';

interface FloatingTechBadgeProps {
  label: string;
  mark: string;
  className: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
  depth: number;
  delay: number;
}

export function FloatingTechBadge({
  label,
  mark,
  className,
  x,
  y,
  depth,
  delay,
}: FloatingTechBadgeProps) {
  const parallaxStyle = useParallaxStyle(x, y, depth, depth);

  return (
    <m.div
      className={`tech-badge glass-panel ${className}`}
      style={parallaxStyle}
      initial={{ opacity: 0, scale: 0.82, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      data-cursor="code"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan/10 font-mono text-sm font-bold text-cyan shadow-[inset_0_0_0_1px_rgb(var(--cyan)/0.22)]">
        {mark}
      </span>
      <span className="text-xs font-medium text-primary">{label}</span>
    </m.div>
  );
}
