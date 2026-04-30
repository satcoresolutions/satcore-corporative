import Hero from "@/components/shared/Hero";

export default function MarketingHero() {
    return (
        <Hero
            title="MARKETING DIGITAL"
            highlight="Y DISEÑO ESTRATÉGICO"
            description="Creamos marcas sólidas, contenido de alto impacto y estrategias digitales basadas en datos para posicionar tu negocio y generar resultados reales."

            ctaPrimaryText="Hablemos de tu marca"
            ctaPrimaryLink="/contacto"
            ctaPrimaryType="navigation_contact"        // 🔥 intención de lead

            ctaSecondaryText="Ver servicios"
            ctaSecondaryLink="#procesos"
            ctaSecondaryType="scroll_projects"         // 🔥 validación

            section="marketing_service"                // 🔥 específico

            background="/img/hero/bg_4.png"
            variant="services"
        />
    );
}
