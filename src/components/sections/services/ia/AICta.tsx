import CTA from "@/components/shared/CTA";
import { GOOGLE_CALENDAR_LINK } from "@/lib/calendar";

export default function AICta() {
    return (
        <CTA
            badge="🤖 Automatización y Agentes de IA"

            title="Deja de hacer tareas repetitivas,"
            highlight="deja que la IA trabaje por ti"

            description="Implementamos automatizaciones, bots y agentes inteligentes que ejecutan procesos, responden clientes y analizan información 24/7. Menos trabajo manual, más eficiencia y crecimiento para tu negocio."

            /* 🔥 PRIMARY */
            primaryText="Quiero automatizar mi negocio"
            primaryLink="https://wa.me/573022016072?text=Hola,%20quiero%20automatizar%20procesos%20con%20IA"
            ctaPrimaryType="whatsapp"

            /* 🔥 SECONDARY */
            secondaryText="Agendar diagnóstico gratuito"
            secondaryLink={GOOGLE_CALENDAR_LINK}
            ctaSecondaryType="calendar"

            /* 🔥 TERTIARY (PDF) */
            tertiaryText="Ver servicios de automatización (PDF)"
            tertiaryLink="/docs/ia/AUTOMATIZACION_IA.pdf"
            ctaTertiaryType="pdf_view"

            /* 🧠 TRACKING */
            section="ai_automation_cta"
        />
    );
}
