"use client";

import { m } from "motion/react";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
    >
      <Link href={`/projects/${project.slug}`}>
        {/* Image placeholder */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="flex h-full items-center justify-center">
            <span className="text-4xl font-bold text-primary/30">
              {project.title[0]}
            </span>
          </div>
          {project.featured && (
            <span className="absolute top-3 right-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
              Destacado
            </span>
          )}
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* External links */}
      <div className="flex gap-4 border-t border-border px-6 py-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-muted transition-colors hover:text-primary"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-muted transition-colors hover:text-primary"
          >
            Demo
          </a>
        )}
      </div>
    </m.div>
  );
}
