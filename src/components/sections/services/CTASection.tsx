import CTA from "@/components/shared/CTA";
import { GOOGLE_CALENDAR_LINK } from "@/lib/calendar";

export default function ServicesCTA() {
  return (
    <CTA
      badge="🧠 Soluciones Tecnológicas Integrales"

      title="¿No tienes claro"
      highlight="qué solución necesitas?"

      description="
        Te ayudamos a identificar la mejor estrategia tecnológica para tu negocio.
        Analizamos tu caso y te proponemos la solución más eficiente, escalable
        y alineada a tus objetivos.
      "

      primaryText="Recibir asesoría gratuita"
      primaryLink="https://wa.me/573022016072?text=Hola,%20necesito%20asesoría%20sobre%20servicios%20tecnológicos"

      secondaryText="Agendar diagnóstico"
      secondaryLink={GOOGLE_CALENDAR_LINK}

      tertiaryText=""
      tertiaryLink=""
    />
  );
}
