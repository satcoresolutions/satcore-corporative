import Section from "@/components/ui/universalSection";
import { GOOGLE_CALENDAR_LINK } from "@/lib/calendar";

export default function CTASection() {
  return (
    <Section variant="dark" paddingY="lg" overflow withGlow>
      <div className="max-w-4xl mx-auto text-center space-y-8">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          ¿Listo para transformar tu idea en realidad?
        </h2>

        {/* DESCRIPTION */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
          Hablemos de tu proyecto y creemos una solución tecnológica a tu medida,
          escalable, segura y lista para crecer.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">

          {/* PRIMARY CTA → WHATSAPP */}
          <a
            href="https://wa.me/573022016072"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-accent
              text-black
              px-7 py-3.5
              rounded-xl
              font-semibold
              shadow-lg shadow-green-500/20
              hover:scale-[1.03]
              hover:shadow-green-500/30
              transition-all duration-300
            "
          >
            Hablar por WhatsApp
          </a>

          {/* SECONDARY CTA → GOOGLE CALENDAR */}
          <a
            href={GOOGLE_CALENDAR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-7 py-3.5
              rounded-xl
              border border-white/20
              text-white
              hover:bg-white/10
              hover:border-white/30
              transition-all duration-300
              backdrop-blur-sm
            "
          >
            Agendar reunión
          </a>

        </div>

        {/* MICRO TRUST LINE */}
        <p className="text-xs text-white/40 pt-4">
          Respuesta en menos de 24 horas • Soporte personalizado • Desarrollo profesional
        </p>

      </div>
    </Section>
  );
}