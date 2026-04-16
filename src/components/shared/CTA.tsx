"use client";

import Section from "@/components/ui/universalSection";
import Link from "next/link";

interface CTAProps {
  title: string;
  highlight?: string;
  description: string;

  primaryText: string;
  primaryLink: string;

  secondaryText?: string;
  secondaryLink?: string;

  tertiaryText?: string;
  tertiaryLink?: string;

  ctaPrimaryType?: string;
  ctaSecondaryType?: string;
  ctaTertiaryType?: string;
  section?: string;

  badge?: string;
}

const getFileName = (url: string) => {
  return url.split("/").pop() || "documento.pdf";
};

const isExternal = (url: string) =>
  url.startsWith("http") ||
  url.startsWith("mailto") ||
  url.startsWith("tel");

const trackCTA = (type: string, label: string, section?: string) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "cta_click",
    cta_type: type,
    cta_label: label,
    section: section || "unknown",
    page_path: window.location.pathname,
  });
};
export default function CTA({
  title,
  highlight,
  description,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  tertiaryText,
  tertiaryLink,
  ctaPrimaryType = "primary",
  ctaSecondaryType = "secondary",
  ctaTertiaryType = "pdf_view",
  section = "unknown",
  badge,
}: CTAProps) {
  return (
    <Section variant="dark" paddingY="lg" overflow withGlow>
      <div className="max-w-5xl mx-auto text-center relative">

        {/* 🔵 BADGE */}
        {badge && (
          <div className="mb-6 inline-block px-4 py-1 rounded-full text-xs bg-white/10 text-white/70 border border-white/10">
            {badge}
          </div>
        )}

        {/* 🔥 TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          {title}
          {highlight && (
            <span className="block text-accent mt-2">
              {highlight}
            </span>
          )}
        </h2>

        {/* 💬 DESCRIPTION */}
        <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
          {description}
        </p>

        {/* 🚀 BOTONES PRINCIPALES */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          {/* PRIMARY */}
          {isExternal(primaryLink) ? (
            <a
              href={primaryLink}
              onClick={() => trackCTA(ctaPrimaryType || "primary", primaryText, section)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-accent text-black font-semibold shadow-lg hover:scale-[1.05] transition"
            >
              {primaryText}
            </a>
          ) : (
            <Link
              href={primaryLink}
              onClick={() => trackCTA(ctaPrimaryType || "primary", primaryText, section)}
              className="px-8 py-3.5 rounded-xl bg-accent text-black font-semibold shadow-lg hover:scale-[1.05] transition"
            >
              {primaryText}
            </Link>
          )}

          {/* SECONDARY */}
          {secondaryText && secondaryLink && (
            isExternal(secondaryLink) ? (
              <a
                href={secondaryLink}
                onClick={() => trackCTA(ctaSecondaryType || "secondary", secondaryText, section)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
              >
                {secondaryText}
              </a>
            ) : (
              <Link
                href={secondaryLink}
                onClick={() => trackCTA(ctaSecondaryType || "secondary", secondaryText, section)}
                className="px-8 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
              >
                {secondaryText}
              </Link>
            )
          )}
        </div>

        {/* 📄 PDF ACTIONS (SEPARADO = MÁS PRO) */}
        {tertiaryText && tertiaryLink && (
          <div className="mt-8 flex flex-col items-center gap-2">

            {/* 👁️ VER PDF (PRINCIPAL PARA PDF) */}
            <a
              href={tertiaryLink}
              onClick={() => trackCTA(ctaTertiaryType || "pdf_view", tertiaryText, section)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-accent underline underline-offset-4 transition"
            >
              {tertiaryText}
            </a>

            {/* ⬇️ DESCARGAR (SECUNDARIO) */}
            <a
              href={tertiaryLink}
              onClick={() => trackCTA("pdf_download", "Descargar PDF", section)}
              download={getFileName(tertiaryLink)}
              className="text-xs text-white/40 hover:text-accent transition"
            >
              Descargar PDF
            </a>

          </div>
        )}

        {/* 🧠 TRUST */}
        <div className="mt-8 text-xs text-white/40 flex flex-wrap justify-center gap-4">
          <span>⚡ Respuesta en menos de 24h</span>
          <span>🔒 Desarrollo seguro</span>
          <span>📈 Soluciones escalables</span>
        </div>

      </div>
    </Section>
  );
}
