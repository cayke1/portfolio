"use client";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Project } from "@/types/Project";

export default function Dashboard() {
  // Simplified state to track visibility of projects and experiences
  const [visibleProjects, setVisibleProjects] = useState<number[]>([1, 2, 3]);
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([
    1, 2, 3, 4, 5,
  ]);

  const projects: Project[] = [
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

  const experiences = [
    {
      id: 1,
      title: "Desenvolvedor Full Stack",
      company: "Tech Solutions",
      type: "work",
    },
    {
      id: 2,
      title: "Desenvolvedor Frontend",
      company: "Digital Agency",
      type: "work",
    },
    {
      id: 3,
      title: "Bacharelado em Ciência da Computação",
      company: "Universidade de São Paulo",
      type: "education",
    },
    {
      id: 4,
      title: "Hackathon - 1º Lugar",
      company: "",
      type: "achievement",
    },
    {
      id: 5,
      title: "Estágio em Desenvolvimento",
      company: "Startup X",
      type: "work",
    },
  ];

  const toggleProjectVisibility = (id: number) => {
    setVisibleProjects((prev) =>
      prev.includes(id)
        ? prev.filter((projectId) => projectId !== id)
        : [...prev, id]
    );
  };

  const toggleExperienceVisibility = (id: number) => {
    setVisibleExperiences((prev) =>
      prev.includes(id) ? prev.filter((expId) => expId !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Projects Section */}
      <Card>
        <CardHeader className="bg-muted/20">
          <CardTitle>Gerenciar Projetos</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Projeto</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-24 text-center">Visível</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>{project.category}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        project.status === "completo" ? "default" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Switch
                      checked={visibleProjects.includes(project.id)}
                      onCheckedChange={() =>
                        toggleProjectVisibility(project.id)
                      }
                      className="data-[state=checked]:bg-theme-purple"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Experiences Section */}
      <Card>
        <CardHeader className="bg-muted/20">
          <CardTitle>Gerenciar Experiências</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Empresa/Instituição</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead className="w-24 text-center">Visível</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {experiences.map((exp) => (
                <TableRow key={exp.id}>
                  <TableCell className="font-medium">{exp.title}</TableCell>
                  <TableCell>{exp.company}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        exp.type === "work"
                          ? "default"
                          : exp.type === "education"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {exp.type === "work"
                        ? "Trabalho"
                        : exp.type === "education"
                        ? "Educação"
                        : "Conquista"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Switch
                      checked={visibleExperiences.includes(exp.id)}
                      onCheckedChange={() => toggleExperienceVisibility(exp.id)}
                      className="data-[state=checked]:bg-theme-purple"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="text-center text-muted-foreground text-sm mt-4">
        Esta interface é simplificada apenas para visualização e controle de
        exibição dos itens. <br />O toggle de visibilidade indica quais itens
        serão exibidos no site público.
      </div>
    </div>
  );
}
