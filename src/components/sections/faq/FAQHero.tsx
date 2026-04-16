import Hero from "@/components/shared/Hero";

export default function FAQHero() {
  return (
    <Hero
      title="RESOLVEMOS TUS DUDAS"
      highlight="ANTES DE EMPEZAR"

      description="Encuentra respuestas claras sobre nuestros procesos, aspectos legales, pagos y funcionamiento de los servicios para tomar decisiones informadas."

      ctaPrimaryText="Contactar ahora"
      ctaPrimaryLink="https://wa.me/573022016072?text=Hola,%20tengo%20una%20consulta%20sobre%20sus%20servicios"
      ctaPrimaryType="whatsapp_support"     // 🔥 intención: resolver duda directa

      ctaSecondaryText="Ver servicios"
      ctaSecondaryLink="/servicios"
      ctaSecondaryType="navigation_services" // 🔥 exploración comercial

      section="faq"                          // 🔥 contexto clave

      background="/img/hero/bg_1.png"
      variant="left"
      height="full"
    />
  );
}
