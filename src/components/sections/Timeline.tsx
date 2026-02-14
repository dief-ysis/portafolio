"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineCard from "@/components/ui/TimelineCard";
import { experience } from "@/data/experience";

export default function Timeline() {
  const t = useTranslations("timeline");

  return (
    <section id="experience" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-1/2" />
          <div className="absolute left-6 top-0 block h-full w-0.5 -translate-x-1/2 bg-border md:hidden" />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <TimelineCard key={`${item.date}-${item.title}`} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
