"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { skills } from "@/data/skills";
import { Skill } from "@/types";

const categoryOrder: Skill["category"][] = [
  "frontend",
  "language",
  "backend",
  "database",
  "tool",
];

export default function Skills() {
  const t = useTranslations("skills");

  const grouped = categoryOrder
    .map((category) => ({
      category,
      label: t(category),
      items: skills.filter((s) => s.category === category),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="skills" className="bg-card/30 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

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
