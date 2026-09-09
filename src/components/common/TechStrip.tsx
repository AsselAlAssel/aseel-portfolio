import { skills } from '../../data/skills';
import { Container } from './Container';

export function TechStrip() {
  return (
    <section className="border-y border-border bg-surface/25 py-5" aria-label="Technology stack">
      <Container size="wide" className="flex items-center gap-8 overflow-x-auto scrollbar-none">
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.24em] text-secondary">Tech I work with</p>
        <div className="h-8 w-px shrink-0 bg-border" aria-hidden="true" />
        <ul className="flex min-w-max items-center gap-8 sm:gap-10">
          {skills.map((skill) => (
            <li key={skill.name}>
              <span className="group flex items-center gap-2.5 py-1 text-secondary transition duration-300 hover:-translate-y-0.5 hover:text-primary" data-cursor="code">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-background font-mono text-xs font-bold text-cyan transition group-hover:border-cyan/40 group-hover:shadow-glow">
                  {skill.mark}
                </span>
                <span className="text-sm font-medium">{skill.name}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
