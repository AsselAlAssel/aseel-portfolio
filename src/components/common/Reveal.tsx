import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { fadeUp, viewportOnce } from '../../utils/motion';

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
