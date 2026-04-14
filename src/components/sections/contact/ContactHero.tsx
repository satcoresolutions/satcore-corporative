import Hero from "@/components/shared/Hero";

export default function ContactHero() {
  return (
    <Hero
      title="HABLEMOS DE TU PROYECTO"
      highlight="CONSTRUYAMOS ALGO GRANDE"

      description="Estamos listos para ayudarte a convertir tu idea en una solución digital escalable, segura y enfocada en resultados reales para tu negocio."

      ctaPrimaryText="Hablar ahora"
      ctaPrimaryLink="https://wa.me/573022016072"

      ctaSecondaryText="Agendar reunión"
      ctaSecondaryLink="#contacto"

      background="/img/hero/bg_1.png"
      variant="contact"
      
    />
  );
}