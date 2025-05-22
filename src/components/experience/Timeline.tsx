
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Experience } from "@/types/Experience";

const timelineData: Experience[] = [
  {
    id: 1,
    type: "work",
    title: "Desenvolvedor Full Stack",
    company: "Tech Solutions",
    location: "São Paulo, SP",
    date: "2022 - Presente",
    description: "Desenvolvimento de aplicações web e APIs para clientes enterprise, com foco em soluções escaláveis e de alta performance.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"]
  },
  {
    id: 2,
    type: "work",
    title: "Desenvolvedor Frontend",
    company: "Digital Agency",
    location: "Remoto",
    date: "2020 - 2022",
    description: "Criação de interfaces responsivas e acessíveis para aplicações web, trabalhando com times ágeis e em múltiplos projetos simultaneamente.",
    skills: ["React", "Vue.js", "SCSS", "Redux", "Jest"]
  },
  {
    id: 3,
    type: "education",
    title: "Bacharelado em Ciência da Computação",
    institution: "Universidade de São Paulo",
    location: "São Paulo, SP",
    date: "2016 - 2020",
    description: "Formação em desenvolvimento de software, algoritmos, estruturas de dados e engenharia de sistemas."
  },
  {
    id: 4,
    type: "achievement",
    title: "Hackathon - 1º Lugar",
    location: "São Paulo, SP",
    date: "2021",
    description: "Solução inovadora para rastreamento e otimização de cadeia de suprimentos utilizando blockchain e IoT."
  },
  {
    id: 5,
    type: "work",
    title: "Estágio em Desenvolvimento",
    company: "Startup X",
    location: "Remoto",
    date: "2019 - 2020",
    description: "Desenvolvimento de recursos para aplicação SaaS de gestão financeira, utilizando React e Node.js.",
    skills: ["JavaScript", "React", "CSS", "Node.js"]
  },
];

export function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setVisibleItems((prev) => [...prev, id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".timeline-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const getIconByType = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="text-theme-purple" />;
      case "education":
        return <GraduationCap className="text-theme-blue" />;
      case "achievement":
        return <Award className="text-theme-pink" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative py-10">
      {/* Timeline center line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

      {timelineData.map((item, index) => (
        <div
          key={item.id}
          data-id={item.id}
          className={`timeline-item mb-12 relative ${
            index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto" : "md:pl-12"
          } ${index % 2 === 0 ? "md:mr-1/2" : "md:ml-1/2"} w-full md:w-1/2`}
        >
          {/* Circle on timeline */}
          <div 
            className={`absolute hidden md:flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card ${
              index % 2 === 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
            } top-5`}
          >
            {getIconByType(item.type)}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visibleItems.includes(item.id) ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-lg shadow-md bg-card ${
              index % 2 === 0 
                ? "mr-0 md:mr-6 border-l-4" 
                : "ml-0 md:ml-6 border-l-4 md:border-l-0 md:border-r-4"
            } ${
              item.type === "work" 
                ? "border-theme-purple" 
                : item.type === "education" 
                ? "border-theme-blue" 
                : "border-theme-pink"
            }`}
          >
            {/* Mobile timeline icon */}
            <div className="flex md:hidden items-center gap-3 mb-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/30">
                {getIconByType(item.type)}
              </div>
              <div className="text-sm text-muted-foreground">{item.date}</div>
            </div>

            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-theme-purple">
              {item.company || item.institution} • {item.location}
            </p>
            <p className="hidden md:block text-muted-foreground text-sm my-2">{item.date}</p>
            <p className="mt-2 text-muted-foreground">{item.description}</p>

            {item.skills && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={`${item.id}-${skill}`}
                    className="text-xs py-1 px-2 rounded-full bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
}