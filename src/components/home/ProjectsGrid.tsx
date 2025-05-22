import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Dashboard administrativo para e-commerce com análise de dados em tempo real e gestão de produtos.",
    tags: ["React", "TypeScript", "Tailwind CSS", "ChartJS"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "Aplicativo de Finanças",
    description: "App para gerenciamento financeiro pessoal com categorização automática de gastos.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    github: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "API de Pagamentos",
    description: "Sistema de processamento de pagamentos com integração a múltiplos gateways.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
];

export function ProjectsGrid() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Projetos <span className="text-gradient">em destaque</span></h2>
            <p className="text-muted-foreground">Alguns dos meus trabalhos recentes</p>
          </div>
          
          <Link href="/projects" className="mt-4 md:mt-0">
            <Button variant="ghost" className="text-theme-purple hover:bg-theme-purple/10 flex items-center gap-2">
              Ver todos os projetos
              <ArrowUpRight size={16} />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="rounded-lg overflow-hidden bg-card card-hover animate-fade-in"
              style={{ animationDelay: `${(project.id - 1) * 0.1}s` }}
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
                    hoveredProject === project.id ? 'opacity-100' : ''
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
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs py-1 px-2 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}