import { name, social } from "@/lib/constants/social";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-muted/30 py-8 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gradient text-xl font-bold">
              {name.firstName} {" "}
              <span className="text-foreground">{name.lastName}</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {t("footer_subtitle")}
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-theme-purple transition"
            >
              <Github size={20} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-theme-purple transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={social.mail}
              className="text-foreground/70 hover:text-theme-purple transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
