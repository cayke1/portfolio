import { Project } from "@/types/Project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Sereno",
    description:
      "Sereno é um sistema de gestão desenvolvido para profissionais da saúde mental, com foco em proporcionar uma experiência tranquila e eficiente. Ele automatiza tarefas como agendamento, gestão de documentação, acompanhamento de pacientes e comunicação, permitindo que o profissional tenha mais tempo e foco para cuidar do que realmente importa: o bem-estar dos seus pacientes. Tudo isso com uma identidade visual leve, inspirada na calma da natureza.",
    tags: ["Next", "TypeScript", "Tailwind CSS", "CI/CD", "Docker", "Stripe"],
    image: "sereno.png",
    github: {
      backend: "https://github.com/cayke1/mental-health-backend",
      frontend: "https://github.com/cayke1/sereno",
    },
    demo: "https://mindsereno.caykedev.com",
    category: "Web",
    status: "em andamento",
  },
  {
    id: 2,
    title: "Discord Bot Logger",
    description:
      "Discord Bot Logger é um bot desenvolvido para registrar logs de aplicações e enviar em canais específicos no discord. Ele permite acompanhar logs importantes como erros ou qualquer informação que você precise, a regra de negócio é feita pelo usuário.",
    tags: ["Node.js", "Discord.js", "SOLID", "CI/CD", "Docker"],
    image: "discord-log.png",
    github: "https://github.com/cayke1/Discord-bot-logger",
    category: "Bot",
    status: "completo",
  },
  {
    id: 3,
    title: "Nutria",
    description:
      "Nutria é uma aplicação web voltada para auxiliar no planejamento e acompanhamento nutricional. Com uma interface simples e intuitiva, o sistema permite registrar refeições, calcular macros, acompanhar metas alimentares e manter um histórico detalhado da alimentação diária, promovendo hábitos saudáveis de forma acessível.",
    tags: ["Next", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose"],
    image: "nutria.png",
    github: "https://github.com/cayke1/nutria",
    demo: "https://nutria.digital",
    category: "Web",
    status: "em andamento",
  },
];

export const projectsDataEn: Project[] = [
  {
    id: 1,
    title: "Sereno",
    description:
      "Sereno is a management system designed for mental health professionals, focused on providing a calm and efficient experience. It automates tasks such as scheduling, documentation management, patient monitoring, and communication, allowing professionals to spend more time focusing on what truly matters: their patients' well-being. All of this is delivered with a light visual identity inspired by the calmness of nature.",
    tags: ["Next", "TypeScript", "Tailwind CSS", "CI/CD", "Docker", "Stripe"],
    image: "sereno.png",
    github: {
      backend: "https://github.com/cayke1/mental-health-backend",
      frontend: "https://github.com/cayke1/sereno",
    },
    demo: "https://mindsereno.caykedev.com",
    category: "Web",
    status: "em andamento",
  },
  {
    id: 2,
    title: "Discord Bot Logger",
    description:
      "Discord Bot Logger is a bot developed to log application messages and send them to specific Discord channels. It allows you to track important logs such as errors or any information you need—the business rules are defined by the user.",
    tags: ["Node.js", "Discord.js", "SOLID", "CI/CD", "Docker"],
    image: "discord-log.png",
    github: "https://github.com/cayke1/Discord-bot-logger",
    category: "Bot",
    status: "completo",
  },
  {
    id: 3,
    title: "Nutria",
    description:
      "Nutria is a web application aimed at helping users plan and track their nutritional intake. With a simple and intuitive interface, the system allows users to log meals, calculate macros, track dietary goals, and maintain a detailed history of daily eating habits—promoting healthy lifestyles in an accessible way.",
    tags: ["Next", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose"],
    image: "nutria.png",
    github: "https://github.com/cayke1/nutria",
    demo: "https://nutria.digital",
    category: "Web",
    status: "em andamento",
  },
];
