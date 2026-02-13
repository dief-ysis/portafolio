import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "portafolio-web",
    title: "Portafolio Web",
    description:
      "Mi portafolio personal construido con Next.js, TypeScript y Tailwind CSS con animaciones modernas.",
    longDescription:
      "Sitio web de portafolio personal responsive con animaciones fluidas usando Motion. Incluye secciones de presentacion, habilidades, proyectos y contacto. Construido con Next.js App Router, TypeScript para type safety, y Tailwind CSS v4 para estilos.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    imageUrl: "/images/projects/og-image.png",
    githubUrl: "https://github.com/dief-ysis/portafolio",
    featured: true,
  },
];
