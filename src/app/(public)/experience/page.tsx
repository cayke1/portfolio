"use client"
import { Timeline } from "@/components/experience/Timeline";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {t("experience_title")} <span className="text-gradient">{t("experience_title_highlight")}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("experience_subtitle")}
          </p>
        </div>

        <Timeline />
      </div>
    </section>
  );
}
