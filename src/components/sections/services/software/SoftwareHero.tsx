import Hero from "@/components/shared/Hero";

export default function SoftwareHero() {
  return (
    <Hero
      title="DESARROLLO DE SOFTWARE"
      highlight="A MEDIDA"
      description="Creamos sistemas escalables..."
      ctaPrimaryText="Hablemos de tu proyecto"
      ctaPrimaryLink="/contacto"
      ctaSecondaryText="Ver proyectos"
      ctaSecondaryLink="#procesos"
      background="/img/hero/bg_4.png"
      variant="services"
    />
  );
}