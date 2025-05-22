
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number; // 1-10
  category: string;
}

const skills: Skill[] = [
  { name: "JavaScript", level: 9, category: "Frontend" },
  { name: "React", level: 9, category: "Frontend" },
  { name: "TypeScript", level: 8, category: "Frontend" },
  { name: "Next.js", level: 8, category: "Frontend" },
  { name: "Tailwind CSS", level: 9, category: "Frontend" },
  { name: "Node.js", level: 8, category: "Backend" },
  { name: "Express", level: 7, category: "Backend" },
  { name: "MongoDB", level: 7, category: "Backend" },
  { name: "PostgreSQL", level: 7, category: "Backend" },
  { name: "GraphQL", level: 6, category: "Backend" },
  { name: "Docker", level: 6, category: "DevOps" },
  { name: "Git", level: 8, category: "DevOps" },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [visible, setVisible] = useState(false);
  
  const categories = ["all", ...Array.from(new Set(skills.map(skill => skill.category)))];
  
  useEffect(() => {
    setVisible(true);
  }, []);
  
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center">Minhas <span className="text-gradient">habilidades</span></h2>
        <p className="text-muted-foreground text-center mb-8">Tecnologias e ferramentas que utilizo</p>
        
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
                {category.charAt(0).toUpperCase() + category.slice(1)}
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
                <span className="text-sm text-muted-foreground">{skill.category}</span>
              </div>
              <div className="w-full h-2 bg-muted/50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(skill.level / 10) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full rounded-full ${
                    skill.level > 7 
                      ? "bg-theme-purple" 
                      : skill.level > 4 
                      ? "bg-theme-blue" 
                      : "bg-theme-lavender"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}