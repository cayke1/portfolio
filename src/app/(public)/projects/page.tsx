"use client";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/types/Project";

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "Dashboard administrativo para e-commerce com análise de dados em tempo real e gestão de produtos.",
    tags: ["React", "TypeScript", "Tailwind CSS", "ChartJS"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web",
    status: "completo",
  },
  {
    id: 2,
    title: "Aplicativo de Finanças",
    description:
      "App para gerenciamento financeiro pessoal com categorização automática de gastos.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    github: "https://github.com",
    category: "Mobile",
    status: "em andamento",
  },
  {
    id: 3,
    title: "API de Pagamentos",
    description:
      "Sistema de processamento de pagamentos com integração a múltiplos gateways.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Backend",
    status: "completo",
  },
  {
    id: 4,
    title: "Landing Page para SaaS",
    description:
      "Página de destino para produto SaaS focado em produtividade e colaboração entre times.",
    tags: ["Next.js", "Framer Motion", "GSAP", "Vercel"],
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web",
    status: "completo",
  },
  {
    id: 5,
    title: "Biblioteca de Componentes UI",
    description:
      "Conjunto de componentes reutilizáveis com design system consistente e documentação.",
    tags: ["React", "Storybook", "Jest", "Styled Components"],
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Frontend",
    status: "completo",
  },
  {
    id: 6,
    title: "CLI para Automação de Tarefas",
    description:
      "Ferramenta de linha de comando para automação de fluxos de trabalho de desenvolvimento.",
    tags: ["Node.js", "Commander", "Inquirer", "Shell"],
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    github: "https://github.com",
    category: "Utilitário",
    status: "em andamento",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    "Todos",
    ...Array.from(new Set(projectsData.map((project) => project.category))),
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === "Todos" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Meus <span className="text-gradient">Projetos</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore meu portfólio de trabalhos e projetos pessoais, destacando
              minhas habilidades e experiências com diversas tecnologias.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex overflow-x-auto pb-2 md:pb-0 space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition ${
                    activeCategory === category
                      ? "bg-theme-purple text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/70"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 px-4 py-2 rounded-md bg-muted/50 border-none focus:outline-none focus:ring-1 focus:ring-theme-purple"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: (project.id * 0.1) % 0.5,
                  }}
                  className="rounded-lg overflow-hidden bg-card card-hover"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 ${
                        hoveredProject === project.id ? "opacity-100" : ""
                      }`}
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition"
                        >
                          <Github className="text-white" size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition"
                        >
                          <ArrowUpRight className="text-white" size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className="text-xs py-0.5 px-2 rounded-full bg-theme-purple/20 text-theme-purple">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.id}-${tag}`}
                          className="text-xs py-1 px-2 rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-muted-foreground">
                  Nenhum projeto encontrado.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
