import Hero from "@/components/shared/Hero";

export default function AIHero() {
  return (
    <Hero
      title="AUTOMATIZACIÓN E"
      highlight="INTELIGENCIA ARTIFICIAL"
      description="Automatizamos procesos, tareas y operaciones con scripts, bots y agentes de IA que trabajan por ti 24/7."

      ctaPrimaryText="Automatizar mi negocio"
      ctaPrimaryLink="/contacto"
      ctaPrimaryType="navigation_contact"        // 🔥 lead directo

      ctaSecondaryText="Ver automatizaciones"
      ctaSecondaryLink="#servicios"
      ctaSecondaryType="scroll_services"         // 🔥 exploración

      section="ai_automation_service"            // 🔥 tracking específico

      background="/img/hero/bg_ai.png"
      variant="services"
    />
  );
}
