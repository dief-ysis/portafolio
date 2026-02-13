"use client";

import { m } from "motion/react";
import { Skill } from "@/types";

const categoryColors: Record<Skill["category"], string> = {
  frontend: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
  backend: "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400",
  language: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",
  database: "bg-orange-500/10 text-orange-600 border-orange-500/20 dark:text-orange-400",
  tool: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20 dark:text-cyan-400",
};

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <m.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1 }}
      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium ${categoryColors[skill.category]}`}
    >
      {skill.name}
    </m.span>
  );
}
