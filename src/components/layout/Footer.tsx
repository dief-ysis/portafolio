"use client";

import { useTranslations } from "next-intl";
import { personalInfo } from "@/data/personal";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border bg-card/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {personalInfo.name}. {t("builtWith")}{" "}
          Next.js {t("by")} {personalInfo.name}.
        </p>
        <div className="flex gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-sm text-muted transition-colors hover:text-primary"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
