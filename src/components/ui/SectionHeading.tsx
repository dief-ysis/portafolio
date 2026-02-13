"use client";

import { m } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-muted">{subtitle}</p>
      )}
    </m.div>
  );
}
