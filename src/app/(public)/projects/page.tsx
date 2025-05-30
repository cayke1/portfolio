"use client";
import { useState } from "react";
import { ArrowUpRight, Code, CodeXml, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData, projectsDataEn } from "@/lib/constants/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const ProjectsData = language === 'pt' ? projectsData : projectsDataEn;
  const categories = [
    "Todos",
    ...Array.from(new Set(ProjectsData.map((project) => project.category))),
  ];

  const filteredProjects = ProjectsData.filter((project) => {
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
              {t("projects_title")}{" "}
              <span className="text-gradient">
                {t("projects_title_highlight")}
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("projects_subtitle")}
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
                  {category === "Todos" ? t("projects_category_all") : category}
                </button>
              ))}
            </div>

            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder={t("projects_search")}
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
                      {project.github && typeof project.github === "object" && (
                        <div className="flex gap-4">
                          <a
                            href={project.github.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition"
                            title="Backend"
                          >
                            <Code className="text-white" size={20} />
                          </a>

                          <a
                            href={project.github.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition"
                            title="Frontend"
                          >
                            <CodeXml className="text-white" size={20} />
                          </a>
                        </div>
                      )}

                      {project.github && typeof project.github === "string" && (
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
                  {t("projects_not_found")}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
