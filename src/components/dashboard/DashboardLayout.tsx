"use client";
import { ReactNode } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { Bell, Search, User } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col">
        <header className="border-b border-border h-16 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">{title}</h1>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={16}
              />
              <input
                type="text"
                placeholder="Buscar..."
                className="py-1.5 pl-9 pr-4 rounded-md bg-muted/50 focus:bg-muted text-sm w-48 border-none focus:outline-none focus:ring-1 focus:ring-theme-purple"
              />
            </div>

            <button className="p-1.5 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition">
              <Bell size={18} />
            </button>

            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-theme-purple/20 flex items-center justify-center">
                <User size={16} className="text-theme-purple" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 flex-1 overflow-auto">{children}</div>
      </main>
    </div>
  );
}
