import { Experience } from "@/types/Experience";

export const experience: Experience[] = [
  {
    id: 1,
    type: "work",
    title: "Desenvolvedor Full Stack",
    company: "Lovetickets",
    location: "Remoto",
    date: "2024 - 2025",
    description:
      "Atuação na manutenção de APIs e no desenvolvimento de interfaces para o sistema de validação de ingressos 'Checker', usado em diversos eventos para validação em tempo real.",
    skills: [
      "Node.js",
      "Next.js",
      "React",
      "TypeScript",
      "WebSockets",
      "React Query",
      "TailwindCSS",
    ],
  },
  {
    id: 2,
    type: "work",
    title: "Estagiário Backend",
    company: "Projeto Sigcer",
    location: "Remoto",
    date: "2023 - 2024",
    description:
      "Desenvolvimento da API de gerenciamento clínico e da funcionalidade de webconferência com WebRTC e Socket.IO, além de colaboração em tarefas de frontend relacionadas à comunicação em tempo real.",
    skills: ["NestJS", "CI/CD", "Swagger", "React", "Socket.IO", "WebRTC"],
  },
  {
    id: 3,
    type: "education",
    title: "Bacharelado em Ciência da Computação",
    institution: "Estácio (EAD)",
    location: "Palmas, TO",
    date: "2024 - Atual",
    description:
      "Curso em andamento com foco em fundamentos de ciência da computação aplicados ao desenvolvimento de software.",
  },
  {
    id: 4,
    type: "education",
    title: "Ciência da Computação",
    institution: "Universidade Federal do Tocantins",
    location: "Palmas, TO",
    date: "2022 - Atual",
    description:
      "Estudos em programação estruturada, estrutura de dados (C) e programação orientada a objetos (Java).",
  },
];
