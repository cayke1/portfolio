"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { social } from "@/lib/constants/social";

export function Contact() {
  const { t } = useLanguage();
  const email = social.mail.replace(/^mailto:/, "");
  const githubLabel = social.github.replace(/^https?:\/\//, "");
  const linkedinLabel = social.linkedin
    .replace(/^https?:\/\/(www\.)?linkedin\.com\//, "")
    .replace(/\/$/, "");

  return (
    <section id="contato" className="border-t border-[#15171A] bg-white">
      <div className="mx-auto flex max-w-[1120px] flex-wrap gap-x-12 gap-y-8 px-[clamp(20px,4vw,40px)] py-[clamp(64px,10vw,120px)]">
        <div className="flex-[0_0_200px]">
          <p className="m-0 font-mono text-[13px] text-[#1E3A8A]">
            04 / {t("home_label_contact")}
          </p>
        </div>

        <div className="min-w-0 flex-[1_1_560px]">
          <h2 className="m-0 text-[clamp(40px,6vw,68px)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#15171A]">
            {t("home_contact_title")}
          </h2>
          <p className="mb-0 mt-6 max-w-[54ch] text-[18px] leading-[1.6] text-[#4B5160] [text-wrap:pretty]">
            {t("home_contact_sub")}
          </p>

          <a
            href={social.mail}
            className="mt-10 inline-block break-all font-mono text-[clamp(18px,2.6vw,28px)] text-[#1E3A8A] transition-colors hover:text-[#15171A]"
          >
            {email}
          </a>

          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] border-t border-[#E7E8EC]">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1.5 border-b border-[#E7E8EC] py-5 pr-5 text-[#15171A] no-underline transition-colors hover:text-[#1E3A8A]"
            >
              <span className="font-mono text-[12px] text-[#6B7280]">github</span>
              <span className="text-[16px] font-medium">{githubLabel}</span>
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1.5 border-b border-[#E7E8EC] py-5 pr-5 text-[#15171A] no-underline transition-colors hover:text-[#1E3A8A]"
            >
              <span className="font-mono text-[12px] text-[#6B7280]">
                linkedin
              </span>
              <span className="text-[16px] font-medium">{linkedinLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
