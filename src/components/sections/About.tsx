"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { personalInfo } from "@/data/personal";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Sobre mi"
          subtitle="Conociendome un poco mas"
        />

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Profile image placeholder */}
          <AnimatedContainer direction="left">
            <div className="mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-card">
                <div className="text-center">
                  <span className="text-6xl font-bold text-primary/20">
                    {personalInfo.name[0]}
                  </span>
                  <p className="mt-2 text-sm text-muted">Tu foto aqui</p>
                </div>
              </div>
            </div>
          </AnimatedContainer>

          {/* Bio */}
          <AnimatedContainer direction="right" delay={0.2}>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted">
                {personalInfo.bio}
              </p>
              <p className="text-lg leading-relaxed text-muted">
                Actualmente en mi tercer año de Ingenieria Informatica, busco
                oportunidades para aplicar mis conocimientos en proyectos reales
                y seguir creciendo como desarrollador.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl border border-border bg-card/50 p-4 text-center">
                  <p className="text-2xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted">Años estudiando</p>
                </div>
                <div className="rounded-xl border border-border bg-card/50 p-4 text-center">
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted">Tecnologias</p>
                </div>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
