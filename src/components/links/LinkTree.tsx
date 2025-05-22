import { social } from "../../lib/social";
import { LinkIconMap, LinkItem } from "@/types/Link";

const links: LinkItem[] = [
  {
    id: 1,
    title: "Meu Site",
    url: "/",
    icon: "globe",
  },
  {
    id: 2,
    title: "GitHub",
    url: social.github,
    icon: "github",
  },
  {
    id: 3,
    title: "LinkedIn",
    url: social.linkedin,
    icon: "linkedin",
  },
  {
    id: 5,
    title: "Instagram",
    url: social.instagram,
    icon: "instagram",
  },
  {
    id: 6,
    title: "Email",
    url: social.mail,
    icon: "mail",
  },
  {
    id: 7,
    title: "Currículo",
    url: social.curriculum,
    icon: "file",
  },
];

export function LinkTree() {
  return (
    <div className="max-w-md mx-auto px-4 pb-4">
      <div className="mb-8 text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-theme-purple p-1">
          <img
            src={`${social.github}.png`}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-xl font-bold">Cayke</h1>
        <p className="text-muted-foreground text-sm mt-1">@cayke.d</p>
      </div>

      <div className="space-y-3">
        {links.map((link, index) => {
          const Icon = LinkIconMap[link.icon];
          return (
            <a
              key={link.id}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={
                link.url.startsWith("http") ? "noopener noreferrer" : undefined
              }
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
