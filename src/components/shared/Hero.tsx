"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  highlight: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  background: string;

  variant?: "center" | "left";
  height?: "full" | "medium";
}

export default function Hero({
  title,
  highlight,
  description,
  ctaText,
  ctaLink,
  background,
  variant = "center",
  height = "full",
}: HeroProps) {
  return (
    <section
      className={`
        relative flex items-center overflow-hidden
        ${height === "full" ? "min-h-screen" : "h-[60vh]"}
        ${variant === "center" ? "justify-center" : "justify-start"}
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
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/40 to-black/80" />

      {/* ✨ GLOW */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-125 h-75 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      {/* 🧠 CONTENIDO */}
      <div
        className={`
          relative z-10 w-full px-6 text-white
          ${
            variant === "center"
              ? "max-w-4xl mx-auto text-center"
              : "max-w-6xl mx-auto text-left"
          }
        `}
      >
        {/* 🔥 TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {title}
          <span className="block text-accent mt-2">
            {highlight}
          </span>
        </h1>

        {/* 💬 SUBTEXT */}
        <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>

        {/* 🚀 CTA */}
        <div
          className={`mt-8 flex ${
            variant === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <Link
            href={ctaLink}
            className="
              px-6 py-3
              rounded-md
              bg-accent
              text-black
              font-semibold
              text-sm md:text-base
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(27,255,60,0.5)]
              transition-all duration-300
            "
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}