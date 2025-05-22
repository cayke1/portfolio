import { useState, useEffect } from "react";
import { motion, spring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "DevOps" },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  const categories = [
    "all",
    ...Array.from(new Set(skills.map((skill) => skill.category))),
  ];

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(
        skills.filter((skill) => skill.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center">
          {t("skills_title")} <span className="text-gradient">{t("skills_title_highlight")}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          {t("skills_subtitle")}
        </p>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm transition ${
                  activeCategory === category
                    ? "bg-theme-purple text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                {category === "all" 
                  ? t("projects_category_all") 
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`p-6 rounded-lg bg-card gradient-border animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .group:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </section>
  );
}
