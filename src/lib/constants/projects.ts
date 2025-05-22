import { Project } from "@/types/Project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Sereno",
    description:
      "Sereno é um sistema de gestão desenvolvido para profissionais da saúde mental, com foco em proporcionar uma experiência tranquila e eficiente. Ele automatiza tarefas como agendamento, gestão de documentação, acompanhamento de pacientes e comunicação, permitindo que o profissional tenha mais tempo e foco para cuidar do que realmente importa: o bem-estar dos seus pacientes. Tudo isso com uma identidade visual leve, inspirada na calma da natureza.",
    tags: ["Next", "TypeScript", "Tailwind CSS"],
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
      "Discord Bot Logger é um bot desenvolvido para registrar e monitorar eventos de servidores Discord. Ele permite acompanhar logs importantes como entradas, saídas, exclusões de mensagens e muito mais, oferecendo uma ferramenta essencial para administradores que buscam organização e controle em suas comunidades.",
    tags: ["Node.js", "Discord.js", "SOLID"],
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
