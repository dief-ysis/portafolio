"use client";

import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      {/* Quote icon */}
      <svg
        className="mb-4 h-8 w-8 text-primary/30"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Quote text */}
      <p className="mb-6 text-lg leading-relaxed italic text-muted">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar or initials */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted">
            {testimonial.role} &middot; {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
