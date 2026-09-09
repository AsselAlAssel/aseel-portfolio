import { m } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { useParallaxStyle } from '../../hooks/useParallaxStyle';

interface FloatingCodeWindowProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export function FloatingCodeWindow({ x, y }: FloatingCodeWindowProps) {
  const parallaxStyle = useParallaxStyle(x, y, -12, -10);

  return (
    <m.div
      className="floating-code glass-panel"
      style={parallaxStyle}
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.7 }}
      data-cursor="code"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <Code2 className="h-3.5 w-3.5 text-cyan" aria-hidden="true" />
      </div>
      <pre className="overflow-hidden p-4 font-mono text-[11px] leading-5 sm:text-xs">
        <code>
          <span className="text-violet">import</span> <span className="text-primary">React</span>{' '}
          <span className="text-violet">from</span>{' '}
          <span className="text-cyan">&apos;react&apos;</span>;{'\n\n'}
          <span className="text-blue">const</span> <span className="text-primary">Portfolio</span> =
          () <span className="text-violet">=&gt;</span> {'{'}
          {'\n  '}
          <span className="text-violet">return</span> ({'\n    '}&lt;
          <span className="text-cyan">BuildSomethingGreat</span> /&gt;
          {'\n  '});
          {'\n'}
          {'}'};
        </code>
      </pre>
    </m.div>
  );
}
