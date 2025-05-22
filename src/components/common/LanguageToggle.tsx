"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="w-8 h-8 p-0 rounded-full"
    >
      {t("toggle_language")}
    </Button>
  );
} 