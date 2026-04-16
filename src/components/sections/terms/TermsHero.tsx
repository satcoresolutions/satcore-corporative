import Hero from "@/components/shared/Hero";

export default function TermsHero() {
  return (
    <Hero
      title="TÉRMINOS Y CONDICIONES"
      highlight="TRANSPARENCIA Y CONFIANZA"

      description="Conoce las condiciones legales que rigen el uso de nuestros servicios y la relación con nuestros clientes."

      ctaPrimaryText="Contactar"
      ctaPrimaryLink="https://wa.me/573022016072"

      ctaSecondaryText="Ver privacidad"
      ctaSecondaryLink="/privacidad"

      background="/img/hero/bg_1.png"
      variant="left"
      height="full"
    />
  );
}
