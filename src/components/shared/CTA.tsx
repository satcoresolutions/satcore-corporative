import Section from "@/components/ui/universalSection";

export default function CTASection() {
  return (
    <Section
      variant="dark"
      paddingY="lg"
      overflow
      withGlow
    >

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          ¿Listo para transformar tu idea en realidad?
        </h2>

        <p className="text-white/70 mb-10 text-lg">
          Hablemos de tu proyecto y creemos una solución tecnológica a tu medida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/573022016072"
            target="_blank"
            className="
              bg-accent
              text-black px-6 py-3 rounded-md
              font-semibold
              hover:opacity-90 hover:scale-105
              transition
            "
          >
            Hablar por WhatsApp
          </a>

          <a
            href="#contacto"
            className="
              border border-white/20
              px-6 py-3 rounded-md
              hover:bg-white/5
              transition
            "
          >
            Agendar reunión
          </a>

        </div>

      </div>

    </Section>
  );
}