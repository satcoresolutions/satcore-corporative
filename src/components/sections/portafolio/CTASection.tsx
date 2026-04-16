import CTA from "@/components/shared/CTA";
import { GOOGLE_CALENDAR_LINK } from "@/lib/calendar";

export default function PortfolioCTA() {
  return (
    <CTA
      badge="📂 Casos reales • Resultados reales"

      title="¿Quieres un proyecto"
      highlight="como estos?"

      description="Hemos ayudado a empresas a construir soluciones digitales que generan resultados. Cuéntanos tu idea y diseñemos una solución a tu medida, alineada a tus objetivos y lista para escalar."

      /* 🔥 PRIMARY */
      primaryText="Iniciar mi proyecto"
      primaryLink="https://wa.me/573022016072?text=Hola,%20quiero%20crear%20un%20proyecto%20similar"
      ctaPrimaryType="whatsapp"

      /* 🔥 SECONDARY */
      secondaryText="Agendar reunión"
      secondaryLink={GOOGLE_CALENDAR_LINK}
      ctaSecondaryType="calendar"

      /* 🧠 TRACKING */
      section="portfolio_cta"
    />
  );
}
