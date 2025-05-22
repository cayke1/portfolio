"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "pt" | "en";

type TranslationKey = keyof typeof translations.pt;

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load saved language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  // Translation function
  const t = (key: string): string => {
    if (language === "pt") {
      return translations.pt[key as keyof typeof translations.pt] || key;
    } else {
      return translations.en[key as keyof typeof translations.en] || key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Translations object
const translations = {
  pt: {
    // Common
    toggle_language: "EN",

    // Hero section
    hero_role: "Desenvolvedor Full Stack",
    hero_title: "Construindo experiências digitais",
    hero_title_highlight: "inovadoras e impactantes",
    hero_description:
      "Transformando ideias em aplicações intuitivas e escaláveis com tecnologias modernas e práticas de desenvolvimento ágil.",
    hero_button_projects: "Ver Projetos",
    hero_button_about: "Sobre mim",

    // Projects section
    projects_title: "Projetos",
    projects_title_highlight: "em destaque",
    projects_subtitle: "Alguns dos meus trabalhos recentes",
    projects_view_all: "Ver todos os projetos",
    projects_search: "Buscar projetos...",
    projects_category_all: "Todos",
    projects_not_found: "Nenhum projeto encontrado.",

    // Skills section
    skills_title: "Minhas",
    skills_title_highlight: "habilidades",
    skills_subtitle: "Tecnologias e ferramentas que utilizo",

    // Experience page
    experience_title: "Minha",
    experience_title_highlight: "Jornada",
    experience_subtitle:
      "Conheça minha trajetória profissional e acadêmica ao longo do tempo.",
    experience_type_work: "Trabalho",
    experience_type_education: "Educação",
    experience_type_achievement: "Conquista",

    // Dashboard
    dashboard_search: "Buscar...",
    dashboard_logout: "Sair",
    dashboard_projects_title: "Gerenciar Projetos",
    dashboard_projects_column_project: "Projeto",
    dashboard_projects_column_category: "Categoria",
    dashboard_projects_column_status: "Status",
    dashboard_projects_column_visible: "Visível",
    dashboard_projects_status_complete: "completo",
    dashboard_projects_status_progress: "em andamento",
    dashboard_experiences_title: "Gerenciar Experiências",
    dashboard_experiences_column_title: "Título",
    dashboard_experiences_column_company: "Empresa/Instituição",
    dashboard_experiences_column_type: "Tipo",
    dashboard_experiences_column_visible: "Visível",
    dashboard_footer_note:
      "Esta interface é simplificada apenas para visualização e controle de exibição dos itens.",
    dashboard_footer_note_2:
      "O toggle de visibilidade indica quais itens serão exibidos no site público.",

    // Navigation
    nav_home: "Início",
    nav_projects: "Projetos",
    nav_experience: "Experiência",
    nav_links: "Links",
    nav_dashboard: "Dashboard",
    nav_settings: "Configurações",

    // Footer
    footer_subtitle: "Projetos e experiências de desenvolvimento",

    // constants
    projects_status_complete: "completo",
    projects_status_in_progress: "em andamento",
  },
  en: {
    // Common
    toggle_language: "PT",

    // Hero section
    hero_role: "Full Stack Developer",
    hero_title: "Building digital experiences that are",
    hero_title_highlight: "innovative and impactful",
    hero_description:
      "Transforming ideas into intuitive and scalable applications with modern technologies and agile development practices.",
    hero_button_projects: "View Projects",
    hero_button_about: "About me",

    // Projects section
    projects_title: "Featured",
    projects_title_highlight: "Projects",
    projects_subtitle: "Some of my recent work",
    projects_view_all: "View all projects",
    projects_search: "Search projects...",
    projects_category_all: "All",
    projects_not_found: "No projects found.",

    // Skills section
    skills_title: "My",
    skills_title_highlight: "Skills",
    skills_subtitle: "Technologies and tools I use",

    // Experience page
    experience_title: "My",
    experience_title_highlight: "Journey",
    experience_subtitle: "Explore my professional and academic path over time.",
    experience_type_work: "Work",
    experience_type_education: "Education",
    experience_type_achievement: "Achievement",

    // Dashboard
    dashboard_search: "Search...",
    dashboard_logout: "Logout",
    dashboard_projects_title: "Manage Projects",
    dashboard_projects_column_project: "Project",
    dashboard_projects_column_category: "Category",
    dashboard_projects_column_status: "Status",
    dashboard_projects_column_visible: "Visible",
    dashboard_projects_status_complete: "complete",
    dashboard_projects_status_progress: "in progress",
    dashboard_experiences_title: "Manage Experiences",
    dashboard_experiences_column_title: "Title",
    dashboard_experiences_column_company: "Company/Institution",
    dashboard_experiences_column_type: "Type",
    dashboard_experiences_column_visible: "Visible",
    dashboard_footer_note:
      "This interface is simplified for viewing and controlling the display of items.",
    dashboard_footer_note_2:
      "The visibility toggle indicates which items will be displayed on the public site.",

    // Navigation
    nav_home: "Home",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_links: "Links",
    nav_dashboard: "Dashboard",
    nav_settings: "Settings",

    // Footer
    footer_subtitle: "Development projects and experiences",

    // constants
    projects_status_complete: "complete",
    projects_status_in_progress: "in progress",
  },
};
