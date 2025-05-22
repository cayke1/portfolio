import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { 
  LayoutDashboard, 
  FileCode, 
  Briefcase, 
  Settings, 
  LogOut,
  Link as LinkIcon
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export function DashboardSidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems: NavItem[] = [
    {
      title: t("nav_dashboard"),
      href: "/dashboard",
      icon: <LayoutDashboard size={18} />
    },
    {
      title: t("nav_projects"),
      href: "/dashboard/projects",
      icon: <FileCode size={18} />
    },
    {
      title: t("nav_experience"),
      href: "/dashboard/experience",
      icon: <Briefcase size={18} />
    },
    {
      title: t("nav_links"),
      href: "/dashboard/links",
      icon: <LinkIcon size={18} />
    },
    {
      title: t("nav_settings"),
      href: "/dashboard/settings",
      icon: <Settings size={18} />
    }
  ];

  return (
    <aside className="w-64 border-r border-border h-screen flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gradient">
          Dev<span className="text-foreground">Dashboard</span>
        </h2>
      </div>

      <nav className="flex-1 px-3 py-2">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <NextLink
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm transition ${
                    isActive
                      ? "bg-theme-purple/10 text-theme-purple font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.title}
                </NextLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-3 border-t border-border">
        <button className="w-full flex items-center px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition">
          <LogOut size={18} className="mr-3" />
          {t("dashboard_logout")}
        </button>
      </div>
    </aside>
  );
}
