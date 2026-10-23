export interface Capability {
  title: string;
  tag: string;
  description: string;
  items: string[];
}

export const capabilities: Capability[] = [
  {
    title: "Backend",
    tag: "foco",
    description:
      "APIs REST, modelagem relacional e de documentos, autenticação e regras de negócio testáveis.",
    items: ["Node.js", "NestJS", "Express", "TypeScript", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Frontend",
    tag: "",
    description:
      "Interfaces tipadas e responsivas que consomem as APIs que eu mesmo desenho.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "DevOps",
    tag: "",
    description:
      "Ambientes reproduzíveis, versionamento disciplinado e integração contínua.",
    items: ["Docker", "Git", "CI/CD"],
  },
];

export const capabilitiesEn: Capability[] = [
  {
    title: "Backend",
    tag: "focus",
    description:
      "REST APIs, relational and document modeling, authentication and testable business logic.",
    items: ["Node.js", "NestJS", "Express", "TypeScript", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Frontend",
    tag: "",
    description:
      "Typed, responsive interfaces that consume the APIs I design myself.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "DevOps",
    tag: "",
    description:
      "Reproducible environments, disciplined version control and continuous integration.",
    items: ["Docker", "Git", "CI/CD"],
  },
];
