"use client";

import { Layout } from "@/components/layout/Layout";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Layout>{children}</Layout>
    </LanguageProvider>
  );
}
