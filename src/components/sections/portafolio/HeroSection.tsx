"use client";

import Hero from "@/components/shared/Hero";

export default function HeroSection() {
  return (
    <Hero
      title="NUESTROS"
      highlight="PROYECTOS"
      description="Soluciones reales para clientes reales. Explora cómo ayudamos a empresas a escalar con tecnología."

      ctaPrimaryText="Agendar asesoría"
      ctaPrimaryLink="/contacto"
      ctaPrimaryType="navigation_contact"     // 🔥 intención de conversión

      ctaSecondaryText="Ver portafolio"
      ctaSecondaryLink="#portafolio"
      ctaSecondaryType="scroll_portfolio"     // 🔥 exploración de proyectos

      section="projects"                      // 🔥 contexto clave

      background="/img/hero/bg_1.png"
      variant="projects"
      height="full"
    />
  );
}
