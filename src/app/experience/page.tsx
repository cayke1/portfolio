"use client"
import { Timeline } from "@/components/experience/Timeline";

export default function Experience() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Minha <span className="text-gradient">Jornada</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça minha trajetória profissional e acadêmica ao longo do tempo.
          </p>
        </div>

        <Timeline />
      </div>
    </section>
  );
}
