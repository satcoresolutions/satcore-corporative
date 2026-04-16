"use client";

import Image from "next/image";
import Link from "next/link";

type HeroVariant =
  | "center"
  | "left"
  | "services"
  | "about"
  | "projects"
  | "contact";

interface HeroProps {
  title: string;
  highlight: string;
  description: string;

  ctaPrimaryText: string;
  ctaPrimaryLink: string;

  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;

  ctaPrimaryType?: string;
  ctaSecondaryType?: string;
  section?: string;

  background: string;
  variant?: HeroVariant;
  height?: "full" | "medium";
}

/* 🧠 detecta links externos */
const isExternal = (url: string) =>
  url.startsWith("http") ||
  url.startsWith("https") ||
  url.startsWith("mailto") ||
  url.startsWith("tel");

export default function Hero({
  title,
  highlight,
  description,
  ctaPrimaryText,
  ctaPrimaryLink,
  ctaSecondaryText,
  ctaSecondaryLink,
  ctaPrimaryType = "primary",
  ctaSecondaryType = "secondary",
  section = "unknown",
  background,
  variant = "center",
  height = "full",
}: HeroProps) {

  const isCenter = variant === "center" || variant === "about";

  const trackCTA = (type: string, label: string) => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "hero_cta_click",
      cta_type: type,
      cta_label: label,
      section: section,
      page_path: window.location.pathname,
    });
  };

  return (
    <section
      className={`
        relative flex items-center overflow-hidden
        ${height === "full" ? "min-h-screen" : "h-[70vh]"}
        ${isCenter ? "justify-center" : "justify-start"}
      `}
    >

      {/* 🖼️ BACKGROUND */}
      <Image
        src={background}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center opacity-40"
      />

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* ✨ GLOW */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      {/* 🧠 CONTENT WRAPPER */}
      <div
        className={`
          relative z-10 w-full px-6 text-white
          ${isCenter ? "max-w-4xl mx-auto text-center" : "max-w-6xl mx-auto text-left"}
        `}
      >

        {/* 🔥 TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {title}
          <span className="block text-accent mt-2">
            {highlight}
          </span>
        </h1>

        {/* 💬 DESCRIPTION (FIX CENTRADO REAL) */}
        <p
          className={`
            mt-6 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl
            ${isCenter ? "mx-auto text-center" : ""}
          `}
        >
          {description}
        </p>

        {/* 🚀 CTA SYSTEM */}
        <div
          className={`
            mt-8 flex flex-col sm:flex-row gap-4
            ${isCenter ? "justify-center" : "justify-start"}
          `}
        >

          {/* 🔥 PRIMARY CTA */}
          {isExternal(ctaPrimaryLink) ? (
            <a
              href={ctaPrimaryLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA(ctaPrimaryType, ctaPrimaryText)}
              className="
                px-6 py-3
                rounded-xl
                bg-accent
                text-black
                font-semibold
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(27,255,60,0.5)]
                transition-all duration-300
              "
            >
              {ctaPrimaryText}
            </a>
          ) : (
            <Link
              href={ctaPrimaryLink}
              onClick={() => trackCTA(ctaPrimaryType, ctaPrimaryText)}
              className="
                px-6 py-3
                rounded-xl
                bg-accent
                text-black
                font-semibold
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(27,255,60,0.5)]
                transition-all duration-300
              "
            >
              {ctaPrimaryText}
            </Link>
          )}

          {/* 🔥 SECONDARY CTA */}
          {ctaSecondaryText && ctaSecondaryLink && (
            isExternal(ctaSecondaryLink) ? (
              <a
                href={ctaSecondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTA(ctaSecondaryType, ctaSecondaryText)}
                className="
                  px-6 py-3
                  rounded-xl
                  border border-white/20
                  text-white
                  hover:bg-white/10
                  transition-all duration-300
                  backdrop-blur-sm
                "
              >
                {ctaSecondaryText}
              </a>
            ) : (
              <Link
                href={ctaSecondaryLink}
                onClick={() => trackCTA(ctaSecondaryType, ctaSecondaryText)}
                className="
                  px-6 py-3
                  rounded-xl
                  border border-white/20
                  text-white
                  hover:bg-white/10
                  transition-all duration-300
                  backdrop-blur-sm
                "
              >
                {ctaSecondaryText}
              </Link>
            )
          )}

        </div>
      </div>
    </section>
  );
}