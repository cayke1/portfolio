
import { Globe, Github, Linkedin, Twitter, Instagram, Mail, File, MessageSquare } from "lucide-react";

interface LinkItem {
  id: number;
  title: string;
  url: string;
  icon: keyof typeof iconMap;
}

const iconMap = {
  globe: Globe,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  mail: Mail,
  file: File,
  chat: MessageSquare
};

const links: LinkItem[] = [
  {
    id: 1,
    title: "Meu Site",
    url: "/",
    icon: "globe"
  },
  {
    id: 2,
    title: "GitHub",
    url: "https://github.com",
    icon: "github"
  },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin"
  },
  {
    id: 4,
    title: "Twitter",
    url: "https://twitter.com",
    icon: "twitter"
  },
  {
    id: 5,
    title: "Instagram",
    url: "https://instagram.com",
    icon: "instagram"
  },
  {
    id: 6,
    title: "Email",
    url: "mailto:email@example.com",
    icon: "mail"
  },
  {
    id: 7,
    title: "Currículo",
    url: "#",
    icon: "file"
  },
  {
    id: 8,
    title: "Chat",
    url: "#",
    icon: "chat"
  }
];

export function LinkTree() {
  return (
    <div className="max-w-md mx-auto px-4">
      <div className="mb-8 text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-theme-purple p-1">
          <img 
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-xl font-bold">Desenvolvedor</h1>
        <p className="text-muted-foreground text-sm mt-1">@devportfolio</p>
      </div>

      <div className="space-y-3">
        {links.map((link, index) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.id}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block w-full p-4 rounded-lg bg-card hover:bg-card/80 gradient-border transition-all transform hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/30 group-hover:bg-theme-purple/20 transition-colors">
                  <Icon size={18} className="text-theme-purple" />
                </div>
                <span className="ml-3">{link.title}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}