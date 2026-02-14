"use client";

import { useState, useMemo } from "react";
import { m, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const t = useTranslations("projects");
  const [activeFilter, setActiveFilter] = useState<string>(t("all"));

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return [t("all"), ...Array.from(techSet).sort()];
  }, [t]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === t("all")) return projects;
    return projects.filter((project) =>
      project.technologies.includes(activeFilter)
    );
  }, [activeFilter, t]);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        {projects.length > 0 && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === tech
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-card border border-border text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {tech}
              </button>
            ))}
          </m.div>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <m.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={project} index={i} />
              </m.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {filteredProjects.length === 0 && projects.length > 0 && (
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-8 text-center text-muted"
            >
              {t("noProjects")}
            </m.p>
          )}
        </AnimatePresence>

        {projects.length === 0 && (
          <p className="text-center text-muted">{t("emptyState")}</p>
        )}
      </div>
    </section>
  );
}
