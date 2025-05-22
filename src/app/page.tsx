"use client";
import { Hero } from "@/components/home/Hero";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { Skills } from "@/components/home/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <Skills />
    </>
  );
}
