import { ArrowUpRight } from 'lucide-react';
import { m } from 'framer-motion';
import { useProjectGlow } from '../../hooks/useProjectGlow';
import type { Project } from '../../types/portfolio';
import { ProjectPreview } from './ProjectPreview';

interface ProjectCardProps {
  project: Project;
  className?: string;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, className = '', onOpen }: ProjectCardProps) {
  const updateBorderGlow = useProjectGlow();

  return (
    <m.article
      className={`project-card group relative overflow-hidden rounded-[1.75rem] border border-border bg-surface/55 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65 }}
      whileHover={{ y: -6 }}
      onPointerMove={updateBorderGlow}
      data-cursor="project"
    >
      <div className="project-border-glow" aria-hidden="true" />
      <div className="overflow-hidden border-b border-border/70">
        <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-0.5">
          <ProjectPreview project={project} />
        </div>
      </div>
      <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-cyan">{project.number}</span>
          <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-secondary">
            {project.category}
          </span>
        </div>
        <h3 className="mt-5 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-7 text-secondary">{project.description}</p>
        {project.technologies.length ? (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs text-secondary"
              >
                {technology}
              </li>
            ))}
          </ul>
        ) : null}
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-cyan transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          aria-label={`View details for ${project.title}`}
          aria-haspopup="dialog"
        >
          View Project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </m.article>
  );
}
