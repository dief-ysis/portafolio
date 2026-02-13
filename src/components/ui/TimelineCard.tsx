"use client";

import { m } from "motion/react";
import { TimelineItem } from "@/types";

const typeColors: Record<TimelineItem["type"], string> = {
  education: "bg-blue-500",
  work: "bg-green-500",
  project: "bg-purple-500",
  course: "bg-orange-500",
};

const typeLabels: Record<TimelineItem["type"], string> = {
  education: "Educacion",
  work: "Trabajo",
  project: "Proyecto",
  course: "Curso",
};

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
}

export default function TimelineCard({ item, index }: TimelineCardProps) {
  const isLeft = index % 2 === 0;

  return (
    <m.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex w-full items-center ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Dot on the line */}
      <div className="absolute left-6 z-10 hidden h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2 md:flex">
        <div className={`h-4 w-4 rounded-full ${typeColors[item.type]} ring-4 ring-background`} />
      </div>

      {/* Mobile dot */}
      <div className="absolute left-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:hidden">
        <div className={`h-4 w-4 rounded-full ${typeColors[item.type]} ring-4 ring-background`} />
      </div>

      {/* Card */}
      <div
        className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-2 flex items-center gap-3">
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium text-white ${typeColors[item.type]}`}
            >
              {typeLabels[item.type]}
            </span>
            <span className="text-xs text-muted">{item.date}</span>
          </div>
          <h3 className="mb-1 font-bold">{item.title}</h3>
          <p className="mb-2 text-sm font-medium text-primary">
            {item.subtitle}
          </p>
          <p className="text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </div>
      </div>
    </m.div>
  );
}
