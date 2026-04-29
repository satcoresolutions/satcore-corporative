import Hero from "@/components/shared/Hero";

export default function SecurityHero() {
    return (
        <Hero
            title="CIBERSEGURIDAD"
            highlight="AUDITORÍAS Y PROTECCIÓN"

            description="Evaluamos, identificamos y corregimos vulnerabilidades en tus sistemas, redes y aplicaciones. Seguridad práctica, pruebas reales y remediación clara para proteger lo que más valoras."

            ctaPrimaryText="Solicitar evaluación de seguridad"
            ctaPrimaryLink="/contacto"
            ctaPrimaryType="navigation_contact"        // 🔥 intención de lead

            ctaSecondaryText="Ver servicios de seguridad"
            ctaSecondaryLink="#procesos"
            ctaSecondaryType="scroll_projects"         // 🔥 validación

            section="security_service"                 // 🔥 específico

            background="/img/hero/bg_4.png"
            variant="services"
        />
    );
}
