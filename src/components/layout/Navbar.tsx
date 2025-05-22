import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { name, social } from "@/lib/social";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Projetos", path: "/projects" },
    { name: "Experiência", path: "/experience" },
    { name: "Links", path: "/links" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold text-gradient">
            {name.firstName} {" "}<span className="text-white">{name.lastName}</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative py-2 text-sm font-medium transition hover:text-theme-purple ${
                    isActive
                      ? "text-theme-purple after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-theme-purple"
                      : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-4 pl-8 border-l border-border">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-theme-purple transition"
            >
              <Github size={18} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-theme-purple transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={social.mail}
              className="text-foreground/70 hover:text-theme-purple transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block py-3 text-base font-medium transition ${
                    isActive ? "text-theme-purple" : "text-foreground/80"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="flex items-center space-x-6 pt-4 mt-4 border-t border-border">
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
      )}
    </header>
  );
}
