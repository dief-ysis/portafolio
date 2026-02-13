"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Proyectos"
          subtitle="Algunos de los proyectos en los que he trabajado"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-muted">
            Pronto agregare proyectos aqui. Estoy trabajando en ello.
          </p>
        )}
      </div>
    </section>
  );
}
