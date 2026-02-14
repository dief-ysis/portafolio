"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <m.div
              key={activeIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard testimonial={testimonials[activeIndex]} />
            </m.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        {testimonials.length > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-border hover:bg-muted"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
