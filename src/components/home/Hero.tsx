import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-theme-purple/10 blur-3xl -z-10 top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-theme-purple mb-4 font-semibold">
            {t("hero_role")}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t("hero_title")} <br />
            <span className="text-gradient">{t("hero_title_highlight")}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("hero_description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-theme-purple hover:bg-theme-purple/90"
              >
                {t("hero_button_projects")}
              </Button>
            </Link>
            <Link href="/experience">
              <Button
                size="lg"
                variant="outline"
                className="border-theme-purple text-theme-purple hover:bg-theme-purple/10"
              >
                {t("hero_button_about")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-theme-purple" />
      </div>
    </section>
  );
}
