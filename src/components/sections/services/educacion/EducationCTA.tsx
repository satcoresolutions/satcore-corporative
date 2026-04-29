import CTA from "@/components/shared/CTA";
import { GOOGLE_CALENDAR_LINK } from "@/lib/calendar";

export default function EducationCTA() {
    return (
        <CTA
            badge="🎓 Formación y Cursos Especializados"

            title="Impulsa tu conocimiento con"
            highlight="habilidades reales y aplicables desde el día uno"

            description="Capacitación práctica, actualizada y orientada a resultados. Desde cursos introductorios hasta programas avanzados, diseñados para que apliques lo aprendido en escenarios reales."

            /* 🔥 PRIMARY */
            primaryText="Inscribirme a un curso"
            primaryLink="https://wa.me/573022016072?text=Hola,%20quiero%20información%20sobre%20los%20cursos"
            ctaPrimaryType="whatsapp"

            /* 🔥 SECONDARY */
            secondaryText="Agendar asesoría académica"
            secondaryLink={GOOGLE_CALENDAR_LINK}
            ctaSecondaryType="calendar"

            /* 🔥 TERTIARY (PDF) */
            tertiaryText="Ver catálogo completo (PDF)"
            tertiaryLink="/docs/estudio/CATALOGO_CURSOS.pdf"
            ctaTertiaryType="pdf_view"

            /* 🧠 TRACKING */
            section="education_cta"
        />
    );
}
