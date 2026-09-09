import { lazy, Suspense, useState } from 'react';
import { projects } from '../../data/projects';
import type { Project } from '../../types/portfolio';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from './ProjectCard';

const ProjectDialog = lazy(() =>
  import('./ProjectDialog').then((module) => ({ default: module.ProjectDialog }))
);

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="section-shell deferred-section relative overflow-hidden"
      aria-labelledby="projects-title"
    >
      <div className="section-orb left-[-10rem] top-24 bg-cyan/10" aria-hidden="true" />
      <Container>
        <div id="projects-title">
          <SectionHeading
            eyebrow="Featured Projects"
            title={
              <>
                Real Projects.
                <br />
                <span className="gradient-text">Real Impact.</span>
              </>
            }
            description="A selection of products I've worked on, focused on solving real problems with modern technologies."
          />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-12">
          <ProjectCard
            project={projects[0]}
            className="lg:col-span-7"
            onOpen={setSelectedProject}
          />
          <ProjectCard
            project={projects[1]}
            className="lg:col-span-5"
            onOpen={setSelectedProject}
          />
          <ProjectCard
            project={projects[2]}
            className="lg:col-span-5"
            onOpen={setSelectedProject}
          />
          <ProjectCard
            project={projects[3]}
            className="lg:col-span-7"
            onOpen={setSelectedProject}
          />
        </div>
      </Container>
      <Suspense fallback={null}>
        {selectedProject ? (
          <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : null}
      </Suspense>
    </section>
  );
}
