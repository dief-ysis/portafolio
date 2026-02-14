"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { useCountUp } from "@/hooks/useCountUp";
import { personalInfo } from "@/data/personal";
import { skills } from "@/data/skills";

function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-border bg-card/50 p-4 text-center"
    >
      <p className="text-2xl font-bold text-primary">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <AnimatedContainer direction="left">
            <div className="mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-card">
                <div className="text-center">
                  <span className="text-6xl font-bold text-primary/20">
                    {personalInfo.name[0]}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedContainer>

          <AnimatedContainer direction="right" delay={0.2}>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted">
                {personalInfo.bio}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <StatCard value={3} suffix="+" label={t("yearsStudying")} />
                <StatCard
                  value={skills.length}
                  suffix="+"
                  label={t("technologies")}
                />
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
