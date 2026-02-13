"use client";

import Link from "next/link";
import { m } from "motion/react";
import { Project } from "@/types";
import Button from "@/components/ui/Button";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import ImageGallery from "@/components/ui/ImageGallery";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <m.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Volver a proyectos
          </Link>
        </m.div>

        {/* Hero image placeholder */}
        <AnimatedContainer>
          <div className="mb-8 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="flex h-full items-center justify-center">
              <span className="text-6xl font-bold text-primary/20">
                {project.title[0]}
              </span>
            </div>
          </div>
        </AnimatedContainer>

        {/* Title and meta */}
        <AnimatedContainer delay={0.1}>
          <div className="mb-8">
            {project.featured && (
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Proyecto Destacado
              </span>
            )}
            <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedContainer>

        {/* Description */}
        <AnimatedContainer delay={0.2}>
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold">Sobre el proyecto</h2>
            <p className="text-lg leading-relaxed text-muted">
              {project.longDescription}
            </p>
          </div>
        </AnimatedContainer>

        {/* Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <AnimatedContainer delay={0.3}>
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold">Capturas</h2>
              <ImageGallery images={project.galleryImages} alt={project.title} />
            </div>
          </AnimatedContainer>
        )}

        {/* Links */}
        <AnimatedContainer delay={0.4}>
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <Button href={project.githubUrl}>Ver codigo</Button>
            )}
            {project.liveUrl && (
              <Button variant="outline" href={project.liveUrl}>
                Ver demo
              </Button>
            )}
          </div>
        </AnimatedContainer>
      </div>
    </main>
  );
}
