import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { Experience } from '../../types/portfolio';

interface ExperienceItemProps {
  item: Experience;
  index: number;
}

export function ExperienceItem({ item, index }: ExperienceItemProps) {
  return (
    <motion.li
      className="relative grid gap-4 pl-9 md:grid-cols-[minmax(220px,0.72fr)_minmax(0,1.28fr)] md:gap-6 md:pl-10"
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: index * 0.09 }}
    >
      <span className={`timeline-dot ${item.current ? 'timeline-dot-current' : ''}`} aria-hidden="true" />
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold text-primary">{item.company}</h3>
          {item.current ? (
            <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-cyan">
              Current
            </span>
          ) : null}
        </div>
        <p className="mt-1 text-sm font-medium text-cyan">{item.role}</p>
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-secondary">
          <span>{item.period}</span>
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{item.location}</span>
        </div>
        <p className="mt-3 max-w-xl text-base leading-7 text-secondary">{item.description}</p>
      </div>
    </motion.li>
  );
}
