import { MessageCircle, Users } from 'lucide-react';
import type { Project } from '../../types/portfolio';

interface ProjectPreviewProps {
  project: Project;
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  if (project.image) {
    return (
      <div className="project-preview project-preview-image">
        <img
          src={project.image}
          alt={project.imageAlt ?? `${project.title} project preview`}
          className="h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
        <div className="project-image-sheen" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="project-preview project-preview-social">
      <div className="absolute inset-0 cyber-grid opacity-35" aria-hidden="true" />
      <div className="relative grid w-full grid-cols-[0.9fr_1.1fr] gap-3 sm:gap-4">
        <div className="rounded-2xl border border-border bg-background/75 p-4 shadow-xl">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan/35 to-violet/30" />
            <div>
              <div className="h-1.5 w-16 rounded-full bg-primary/55" />
              <div className="mt-1.5 h-1 w-10 rounded-full bg-border" />
            </div>
          </div>
          <div className="mt-4 aspect-video rounded-xl border border-border bg-gradient-to-br from-blue/20 via-cyan/10 to-violet/25" />
          <div className="mt-3 flex gap-4 text-cyan">
            <MessageCircle className="h-4 w-4" />
            <Users className="h-4 w-4 text-violet" />
          </div>
        </div>
        <div className="space-y-3">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-background/75 p-4 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-cyan/15" />
                <div className="h-1.5 w-16 rounded-full bg-primary/45" />
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-border" />
              <div className="mt-2 h-1.5 w-3/4 rounded-full bg-border" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
