import Hero from "@/components/shared/Hero";

export default function SoftwareHero() {
  return (
    <Hero
      title="DESARROLLO DE SOFTWARE"
      highlight="A MEDIDA"
      description="Creamos sistemas escalables..."

      ctaPrimaryText="Hablemos de tu proyecto"
      ctaPrimaryLink="/contacto"
      ctaPrimaryType="navigation_contact"        // 🔥 intención de lead

      ctaSecondaryText="Ver proyectos"
      ctaSecondaryLink="#procesos"
      ctaSecondaryType="scroll_projects"         // 🔥 validación

      section="software_service"                 // 🔥 específico

      background="/img/hero/bg_4.png"
      variant="services"
    />
  );
}
