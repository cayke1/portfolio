"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { experience, experienceEn } from "@/lib/constants/experience";

const isCurrent = (date: string) => /atual|present/i.test(date);

export function ExperienceHighlight() {
  const { t, language } = useLanguage();
  const items = (language === "pt" ? experience : experienceEn).filter(
    (e) => e.type === "work"
  );

  return (
    <section id="experiencia" className="border-t border-[#E7E8EC]">
      <div className="mx-auto flex max-w-[1120px] flex-wrap gap-x-12 gap-y-8 px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,96px)]">
        <div className="flex-[0_0_200px]">
          <p className="m-0 font-mono text-[13px] text-[#1E3A8A]">
            03 / {t("home_label_exp")}
          </p>
        </div>

        <div className="min-w-0 flex-[1_1_560px]">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="m-0 text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#15171A]">
              {t("home_exp_title")}
            </h2>
            <Link
              href="/experience"
              className="text-[15px] text-[#1E3A8A] transition-colors hover:text-[#15171A]"
            >
              {t("home_full_exp")}
            </Link>
          </div>

          <ol className="m-0 list-none border-t border-[#15171A] p-0">
            {items.map((e) => (
              <li
                key={e.id}
                className="flex flex-wrap gap-x-8 gap-y-3 border-b border-[#E7E8EC] py-7"
              >
                <div className="flex flex-[0_0_160px] flex-col gap-1.5 pt-1 font-mono text-[13px] text-[#6B7280]">
                  <span>{e.date}</span>
                  {isCurrent(e.date) && (
                    <span className="text-[#1E3A8A]">{t("home_current")}</span>
                  )}
                </div>

                <div className="min-w-0 flex-[1_1_320px]">
                  <h3 className="m-0 text-[19px] font-semibold tracking-[-0.01em] text-[#15171A]">
                    {e.title}
                  </h3>
                  <p className="mb-0 mt-1 text-[15px] text-[#6B7280]">
                    {e.company || e.institution}
                    {e.location ? ` — ${e.location}` : ""}
                  </p>
                  <p className="mb-0 mt-3 max-w-[62ch] text-[15px] leading-[1.6] text-[#4B5160] [text-wrap:pretty]">
                    {e.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
