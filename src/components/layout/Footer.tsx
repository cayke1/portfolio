import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 py-8 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gradient text-xl font-bold">Dev<span className="text-foreground">Portfólio</span></p>
            <p className="text-sm text-muted-foreground mt-1">Projetos e experiências de desenvolvimento</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-theme-purple transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-theme-purple transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:email@example.com" className="text-foreground/70 hover:text-theme-purple transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Dev Portfolio. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-theme-purple transition">Privacidade</a>
            <a href="/contact" className="text-sm text-muted-foreground hover:text-theme-purple transition">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}