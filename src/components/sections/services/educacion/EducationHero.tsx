import Hero from "@/components/shared/Hero";

export default function EducationHero() {
    return (
        <Hero
            title="FORMACIÓN"
            highlight="TECNOLÓGICA"

            description="Capacitación práctica, actualizada y aplicable desde el primer día. Cursos y programas diseñados para profesionales y empresas que buscan desarrollar habilidades reales en tecnología."

            ctaPrimaryText="Explorar cursos"
            ctaPrimaryLink="/contacto"
            ctaPrimaryType="navigation_contact"

            ctaSecondaryText="Ver modalidades"
            ctaSecondaryLink="#procesos"
            ctaSecondaryType="scroll_projects"

            section="education_service"

            background="/img/hero/bg_4.png"
            variant="services"
        />
    );
}
