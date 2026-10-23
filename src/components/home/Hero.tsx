"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const AVAILABLE = true;

export function Hero() {
  const { t, language } = useLanguage();

  const spec: [string, string][] =
    language === "pt"
      ? [
          ["função", "full stack"],
          ["foco", "backend"],
          ["stack", "node, nestjs, postgres"],
          ["base", "Palmas, TO"],
          ["idiomas", "pt, en"],
        ]
      : [
          ["role", "full stack"],
          ["focus", "backend"],
          ["stack", "node, nestjs, postgres"],
          ["based", "Palmas, BR"],
          ["speaks", "pt, en"],
        ];

  const rows: [string, string][] = AVAILABLE
    ? [...spec, ["status", language === "pt" ? "disponível" : "available"]]
    : spec;

  return (
    <section className="mx-auto flex max-w-[1120px] flex-wrap items-end gap-x-[clamp(40px,6vw,72px)] gap-y-10 px-[clamp(20px,4vw,40px)] pb-[clamp(56px,8vw,96px)] pt-[clamp(40px,8vw,88px)]">
      <div className="min-w-0 max-w-[720px] flex-[1_1_520px]">
        <p
          data-anim
          className="m-0 mb-7 flex items-center gap-2.5 font-mono text-[13px] text-[#6B7280]"
          style={{ animation: "rise 600ms cubic-bezier(.2,.7,.2,1) both" }}
        >
          {AVAILABLE && (
            <span
              aria-hidden
              data-anim
              className="inline-block h-[7px] w-[7px] bg-[#1E3A8A]"
              style={{ animation: "pulse-dot 2.4s ease-in-out 1s infinite" }}
            />
          )}
          <span>
            {t("hero_role")}
            {AVAILABLE ? `, ${t("home_available_suffix")}` : ""}
          </span>
        </p>

        <h1
          data-anim
          className="m-0 text-[clamp(40px,6.2vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#15171A] [text-wrap:balance]"
          style={{ animation: "rise 700ms cubic-bezier(.2,.7,.2,1) 90ms both" }}
        >
          {t("home_hero_title")}
        </h1>

        <p
          data-anim
          className="mt-7 max-w-[58ch] text-[clamp(17px,1.6vw,19px)] leading-[1.6] text-[#4B5160] [text-wrap:pretty]"
          style={{ animation: "rise 700ms cubic-bezier(.2,.7,.2,1) 180ms both" }}
        >
          {t("home_hero_sub")}
        </p>

        <div
          data-anim
          className="mt-10 flex flex-wrap gap-3"
          style={{ animation: "rise 700ms cubic-bezier(.2,.7,.2,1) 270ms both" }}
        >
          <a
            href="#trabalho"
            className="inline-flex h-12 items-center border border-[#1E3A8A] bg-[#1E3A8A] px-[22px] text-[15px] font-medium text-white no-underline transition-colors hover:bg-[#15296B]"
          >
            {t("home_cta_work")}
          </a>
          <a
            href="#contato"
            className="inline-flex h-12 items-center border border-[#CFD2DA] bg-white px-[22px] text-[15px] font-medium text-[#15171A] no-underline transition-colors hover:border-[#15171A]"
          >
            {t("home_cta_contact")}
          </a>
        </div>
      </div>

      <dl
        data-anim
        aria-label={t("home_spec_label")}
        className="m-0 min-w-[260px] flex-[0_1_340px] border border-[#E7E8EC] bg-white font-mono text-[13px] leading-[1.5]"
        style={{ animation: "rise 800ms cubic-bezier(.2,.7,.2,1) 380ms both" }}
      >
        <div className="flex justify-between border-b border-[#E7E8EC] px-4 py-2.5 text-[#6B7280]">
          <span>profile.json</span>
          <span>v2026</span>
        </div>
        {rows.map(([k, v]) => (
          <div
            key={k}
            className="grid grid-cols-[84px_minmax(0,1fr)] gap-3 border-b border-[#F0F1F4] px-4 py-2.5 last:border-b-0"
          >
            <dt className="text-[#6B7280]">{k}</dt>
            <dd className="m-0 text-[#15171A]">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
