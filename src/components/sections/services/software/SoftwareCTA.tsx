import CTA from "@/components/shared/CTA";
import { GOOGLE_CALENDAR_LINK } from "@/lib/calendar";

export default function SoftwareCTA() {
  return (
    <CTA
      badge="🚀 Desarrollo de Software a Medida"

      title="Convierte tu idea en"
      highlight="una plataforma real, escalable y rentable"

      description="Diseñamos y desarrollamos software alineado a objetivos de negocio: desde MVPs rápidos hasta sistemas empresariales listos para crecer. Sin improvisación. Sin plantillas. Tecnología que impulsa resultados."

      /* 🔥 PRIMARY */
      primaryText="Solicitar cotización personalizada"
      primaryLink="https://wa.me/573022016072?text=Hola,%20quiero%20cotizar%20un%20software"
      ctaPrimaryType="whatsapp"

      /* 🔥 SECONDARY */
      secondaryText="Agendar reunión estratégica"
      secondaryLink={GOOGLE_CALENDAR_LINK}
      ctaSecondaryType="calendar"

      /* 🔥 TERTIARY (PDF) */
      tertiaryText="Ver portafolio completo (PDF)"
      tertiaryLink="/docs/desarrollo/DESARROLLO_SOFTWARE.pdf"
      ctaTertiaryType="pdf_view"

      /* 🧠 TRACKING */
      section="software_cta"
    />
  );
}
