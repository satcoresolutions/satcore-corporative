import CTA from "@/components/shared/CTA";
import { GOOGLE_CALENDAR_LINK } from "@/lib/calendar";

export default function SecurityCTA() {
    return (
        <CTA
            badge="🛡️ Ciberseguridad y Pentesting Profesional"

            title="Protege tu empresa antes de que sea tarde"
            highlight="con auditorías reales de seguridad"

            description="Detectamos vulnerabilidades críticas en tus sistemas, aplicaciones e infraestructura antes de que lo hagan los atacantes. Seguridad práctica, reportes claros y planes de remediación accionables."

            /* 🔥 PRIMARY */
            primaryText="Solicitar auditoría de seguridad"
            primaryLink="https://wa.me/573022016072?text=Hola,%20quiero%20una%20auditoría%20de%20ciberseguridad"
            ctaPrimaryType="whatsapp"

            /* 🔥 SECONDARY */
            secondaryText="Agendar evaluación de seguridad"
            secondaryLink={GOOGLE_CALENDAR_LINK}
            ctaSecondaryType="calendar"

            /* 🔥 TERTIARY (PDF) */
            tertiaryText="Ver portafolio de seguridad (PDF)"
            tertiaryLink="/docs/seguridad/ERICK-SAT_SECURITY.pdf"
            ctaTertiaryType="pdf_view"

            /* 🧠 TRACKING */
            section="security_cta"
        />
    );
}
