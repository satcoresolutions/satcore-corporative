"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🖼️ BACKGROUND */}
      <Image
        src="/img/hero/bg_2.png"
        alt="SatCore Hero Background"
        fill
        priority
        className="object-cover object-center opacity-40"
      />

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/40 to-black/70" />

      {/* ✨ GLOW */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-125 h-75 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      {/* 🧠 CONTENIDO */}
      <div className="relative z-10 max-w-4xl text-center px-6 text-white">

        {/* 🔥 TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          IMPULSA TU NEGOCIO
          <span className="block text-accent mt-2">
            CON TECNOLOGÍA
          </span>
        </h1>

        {/* 💬 SUBTEXT */}
        <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
          Software a medida que es tu propiedad intelectual, no una plantilla. IA que automatiza tu estrategia única. Ciberseguridad que anticipa. No somos para todos, somos para quienes deciden liderar. Descubre si SatCore es para ti.
        </p>

        {/* 🚀 CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/contacto"
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
            Comienza tu transformación
          </Link>
        </div>

      </div>
    </section>
  );
}
