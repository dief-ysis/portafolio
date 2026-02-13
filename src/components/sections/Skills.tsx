"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { skills } from "@/data/skills";
import { Skill } from "@/types";

const categoryLabels: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  language: "Lenguajes",
  database: "Bases de Datos",
  tool: "Herramientas",
};

const categoryOrder: Skill["category"][] = [
  "frontend",
  "language",
  "backend",
  "database",
  "tool",
];

export default function Skills() {
  const grouped = categoryOrder
    .map((category) => ({
      category,
      label: categoryLabels[category],
      items: skills.filter((s) => s.category === category),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="skills" className="bg-card/30 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills"
          subtitle="Tecnologias y herramientas con las que trabajo"
        />

        <div className="space-y-10">
          {grouped.map((group, groupIndex) => (
            <AnimatedContainer key={group.category} delay={groupIndex * 0.1}>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <SkillBadge key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
