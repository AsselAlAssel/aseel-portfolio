import { useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

export function useParallaxStyle(
  x: MotionValue<number>,
  y: MotionValue<number>,
  xDepth: number,
  yDepth: number
) {
  const translatedX = useTransform(x, (value) => value * xDepth);
  const translatedY = useTransform(y, (value) => value * yDepth);

  return { x: translatedX, y: translatedY };
}
