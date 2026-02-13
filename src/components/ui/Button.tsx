"use client";

import { m } from "motion/react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25",
  secondary:
    "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/25",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors",
    variants[variant],
    className
  );

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (href) {
    return (
      <m.a href={href} className={classes} {...motionProps}>
        {children}
      </m.a>
    );
  }

  return (
    <m.button onClick={onClick} className={classes} {...motionProps}>
      {children}
    </m.button>
  );
}
