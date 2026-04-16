import Hero from "@/components/shared/Hero";

export default function AboutHero() {
  return (
    <Hero
      title="SOMOS EL NÚCLEO TECNOLÓGICO"
      highlight="DIGITAL"

      description="Impulsamos empresas en Latinoamérica con tecnología, automatización y desarrollo de software a medida, enfocados en escalabilidad, seguridad y resultados reales."

      ctaPrimaryText="Hablar ahora"
      ctaPrimaryLink="https://wa.me/573022016072"
      ctaPrimaryType="whatsapp"                // 🔥 contacto directo

      ctaSecondaryText="Ver servicios"
      ctaSecondaryLink="/servicios"
      ctaSecondaryType="navigation_services"  // 🔥 exploración comercial

      section="about"                          // 🔥 contexto de branding

      background="/img/hero/bg_3.png"
      variant="center"
      height="full"
    />
  );
}
