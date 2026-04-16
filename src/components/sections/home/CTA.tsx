import CTA from "@/components/shared/CTA";
import { GOOGLE_CALENDAR_LINK } from "@/lib/calendar";

export default function HomeCTA() {
  return (
    <CTA
      badge="🚀 Transformación digital para empresas"

      title="Impulsa tu negocio con"
      highlight="tecnología que genera resultados"

      description="
        En SatCore desarrollamos soluciones digitales a medida: software,
        automatización con IA, ciberseguridad y experiencias digitales que
        optimizan procesos y aceleran el crecimiento de tu empresa.
      "

      primaryText="Hablar con un experto"
      primaryLink="https://wa.me/573022016072?text=Hola,%20quiero%20impulsar%20mi%20negocio%20con%20tecnología"

      secondaryText="Agendar reunión"
      secondaryLink={GOOGLE_CALENDAR_LINK}

      tertiaryText=""
      tertiaryLink=""
    />
  );
}
