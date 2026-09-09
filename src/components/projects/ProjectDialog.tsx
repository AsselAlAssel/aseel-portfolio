import { ArrowUpRight, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useProjectDialog } from '../../hooks/useProjectDialog';
import type { Project } from '../../types/portfolio';

interface ProjectDialogProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const panelRef = useProjectDialog(onClose);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[rgb(1_5_10/0.78)] p-4 backdrop-blur-[10px] sm:items-center sm:p-6"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-dialog-${project.id}`}
        tabIndex={-1}
        className="project-dialog my-auto max-h-[calc(100dvh-2rem)] w-[min(92vw,64rem)] overflow-y-auto overscroll-contain rounded-[1.75rem] border border-border bg-surface text-primary shadow-2xl outline-none sm:max-h-[calc(100dvh-3rem)]"
      >
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-border bg-surface/90 px-5 py-4 backdrop-blur-xl sm:px-7">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
              {project.category}
            </p>
            <h2 id={`project-dialog-${project.id}`} className="mt-1 text-xl font-bold sm:text-2xl">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-background/60 text-secondary transition hover:border-cyan/45 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            aria-label="Close project details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 sm:p-7">
          {project.image ? (
            <div className="overflow-hidden rounded-2xl border border-border bg-background">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-auto w-full"
                decoding="async"
              />
            </div>
          ) : null}
          <div className="mt-7 grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-primary/90">{project.description}</p>
              <p className="mt-3 leading-7 text-secondary">{project.details}</p>
              <ul
                className="mt-5 flex flex-wrap gap-2"
                aria-label={`${project.title} technologies`}
              >
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-border bg-background/55 px-3 py-1.5 text-xs text-secondary"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-cyan/45 bg-cyan/10 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-cyan/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                Open Live Site <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
