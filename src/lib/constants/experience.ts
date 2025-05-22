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

export const experienceEn: Experience[] = [
  {
    id: 1,
    type: "work",
    title: "Full Stack Developer",
    company: "Lovetickets",
    location: "Remote",
    date: "2024 - 2025",
    description:
      "Worked on API maintenance and interface development for the 'Checker' ticket validation system, used in various events for real-time validation.",
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
    title: "Backend Intern",
    company: "Projeto Sigcer",
    location: "Remote",
    date: "2023 - 2024",
    description:
      "Developed the clinical management API and the web conferencing feature using WebRTC and Socket.IO, in addition to contributing to frontend tasks related to real-time communication.",
    skills: ["NestJS", "CI/CD", "Swagger", "React", "Socket.IO", "WebRTC"],
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor's in Computer Science",
    institution: "Estácio (Distance Learning)",
    location: "Palmas, TO",
    date: "2024 - Present",
    description:
      "Ongoing course focused on computer science fundamentals applied to software development.",
  },
  {
    id: 4,
    type: "education",
    title: "Computer Science",
    institution: "Federal University of Tocantins",
    location: "Palmas, TO",
    date: "2022 - Present",
    description:
      "Studies in structured programming, data structures (C), and object-oriented programming (Java).",
  },
];

