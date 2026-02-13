"use client";

import { m } from "motion/react";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/personal";

export default function Hero() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Animated background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute -right-40 top-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-40 left-1/2 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase"
        >
          Bienvenido a mi portafolio
        </m.p>

        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
        >
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-muted sm:text-xl"
        >
          {personalInfo.title}
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button onClick={() => handleScroll("#projects")}>
            Ver mis proyectos
          </Button>
          <Button variant="outline" onClick={() => handleScroll("#contact")}>
            Contactame
          </Button>
          {personalInfo.resumeUrl && (
            <Button
              variant="secondary"
              href={personalInfo.resumeUrl}
              download
              target="_blank"
            >
              📄 Descargar CV
            </Button>
          )}
        </m.div>
      </div>

      {/* Scroll indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <m.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted">Scroll</span>
          <div className="h-6 w-4 rounded-full border-2 border-muted p-0.5">
            <div className="h-1.5 w-1.5 rounded-full bg-muted" />
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
