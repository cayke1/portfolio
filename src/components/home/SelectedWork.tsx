"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsData, projectsDataEn } from "@/lib/constants/projects";
import type { Project } from "@/types/Project";

type ProjectLink = { label: string; href: string };

function projectLinks(p: Project): ProjectLink[] {
  const links: ProjectLink[] = [];
  if (p.github && typeof p.github === "object") {
    links.push({ label: "repo/backend", href: p.github.backend });
    links.push({ label: "repo/frontend", href: p.github.frontend });
  } else if (typeof p.github === "string") {
    links.push({ label: "repo", href: p.github });
  }
  if (p.demo) links.push({ label: "demo", href: p.demo });
  return links;
}

export function SelectedWork() {
  const { t, language } = useLanguage();
  const projects = (language === "pt" ? projectsData : projectsDataEn).filter(
    (p) => p.id <= 3
  );

  return (
    <section id="trabalho" className="border-t border-[#E7E8EC]">
      <div className="mx-auto flex max-w-[1120px] flex-wrap gap-x-12 gap-y-8 px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,96px)]">
        <div className="flex-[0_0_200px]">
          <p className="m-0 font-mono text-[13px] text-[#1E3A8A]">
            01 / {t("home_label_work")}
          </p>
        </div>

        <div className="min-w-0 flex-[1_1_560px]">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="m-0 text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#15171A]">
              {t("home_work_title")}
            </h2>
            <Link
              href="/projects"
              className="text-[15px] text-[#1E3A8A] transition-colors hover:text-[#15171A]"
            >
              {t("home_all_projects")}
            </Link>
          </div>

          <ol className="m-0 list-none border-t border-[#15171A] p-0">
            {projects.map((p, i) => (
              <li
                key={p.id}
                className="flex flex-wrap gap-x-8 gap-y-5 border-b border-[#E7E8EC] py-8 transition-colors hover:bg-white"
              >
                <span className="flex-[0_0_40px] pt-1.5 font-mono text-[13px] text-[#6B7280]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-[1_1_300px]">
                  <h3 className="m-0 text-[22px] font-semibold tracking-[-0.02em] text-[#15171A]">
                    {p.title}
                  </h3>
                  <p className="mb-0 mt-2.5 max-w-[62ch] text-[15px] leading-[1.6] text-[#4B5160] [text-wrap:pretty]">
                    {p.description}
                  </p>
                </div>

                <div className="flex min-w-[220px] flex-[0_1_260px] flex-col gap-[18px]">
                  <ul
                    aria-label="Stack"
                    className="m-0 flex list-none flex-wrap gap-1.5 p-0"
                  >
                    {p.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-[#E7E8EC] bg-[#F3F4F7] px-2 py-[3px] font-mono text-[12px] text-[#15171A]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4 font-mono text-[13px]">
                    {projectLinks(p).map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1E3A8A] transition-colors hover:text-[#15171A]"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
