export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "language" | "tool";
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
  resumeUrl?: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "work" | "project" | "course";
}
