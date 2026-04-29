import CTA from "@/components/shared/CTA";
import { GOOGLE_CALENDAR_LINK } from "@/lib/calendar";

export default function MarketingCTA() {
    return (
        <CTA
            badge="🎨 Marketing y Diseño Estratégico"

            title="Convierte tu marca en"
            highlight="una identidad sólida, atractiva y rentable"

            description="Diseñamos marcas con propósito y ejecutamos estrategias digitales enfocadas en resultados: desde identidad visual hasta crecimiento en redes y publicidad. Sin improvisación. Sin plantillas. Marketing que genera impacto real."

            /* 🔥 PRIMARY */
            primaryText="Solicitar propuesta personalizada"
            primaryLink="https://wa.me/573022016072?text=Hola,%20quiero%20cotizar%20servicios%20de%20marketing%20y%20branding"
            ctaPrimaryType="whatsapp"

            /* 🔥 SECONDARY */
            secondaryText="Agendar reunión estratégica"
            secondaryLink={GOOGLE_CALENDAR_LINK}
            ctaSecondaryType="calendar"

            /* 🔥 TERTIARY (PDF) */
            tertiaryText="Ver portafolio completo (PDF)"
            tertiaryLink="/docs/marketing/MARKETING_SERVICIOS.pdf"
            ctaTertiaryType="pdf_view"

            /* 🧠 TRACKING */
            section="marketing_cta"
        />
    );
}
