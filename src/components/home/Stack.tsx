"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { capabilities, capabilitiesEn } from "@/lib/constants/capabilities";

export function Stack() {
  const { t, language } = useLanguage();
  const caps = language === "pt" ? capabilities : capabilitiesEn;

  return (
    <section id="stack" className="border-t border-[#E7E8EC] bg-white">
      <div className="mx-auto flex max-w-[1120px] flex-wrap gap-x-12 gap-y-8 px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,96px)]">
        <div className="flex-[0_0_200px]">
          <p className="m-0 font-mono text-[13px] text-[#1E3A8A]">
            02 / {t("home_label_stack")}
          </p>
        </div>

        <div className="min-w-0 flex-[1_1_560px]">
          <h2 className="mb-10 mt-0 max-w-[22ch] text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#15171A] [text-wrap:balance]">
            {t("home_stack_title")}
          </h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-t border-[#15171A]">
            {caps.map((c) => (
              <div
                key={c.title}
                className="flex flex-col gap-3.5 border-b border-[#E7E8EC] pb-7 pr-6 pt-6"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="m-0 text-[18px] font-semibold tracking-[-0.01em] text-[#15171A]">
                    {c.title}
                  </h3>
                  {c.tag && (
                    <span className="font-mono text-[12px] text-[#6B7280]">
                      {c.tag}
                    </span>
                  )}
                </div>

                <p className="m-0 max-w-[40ch] text-[15px] leading-[1.6] text-[#4B5160]">
                  {c.description}
                </p>

                <ul className="mb-0 mt-1 flex list-none flex-col p-0 font-mono text-[14px]">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-dashed border-[#E7E8EC] py-[7px] text-[#15171A]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
