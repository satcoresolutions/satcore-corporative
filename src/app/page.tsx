import Hero from "@/components/shared/Hero";
import ServicesHome from "@/components/sections/home/ServicesHome";
import Section from "@/components/ui/universalSection";
import WhySatCore from "@/components/sections/home/WhySatCore";
import UseCases from "@/components/sections/home/UseCases";
import Portfolio from "@/components/sections/home/Portfolio";
import Testimonials from "@/components/sections/home/Testimonials";
import CTA from "@/components/sections/home/CTA";

export default function HomePage() {
  return (
    <main>

      {/* 🚀 HERO */}
      <Hero
        title="IMPULSA TU NEGOCIO"
        highlight="CON TECNOLOGÍA"
        description="Desarrollamos software a medida, escalable y seguro, diseñado para automatizar procesos y hacer crecer tu empresa."

        ctaPrimaryText="Comienza tu transformación"
        ctaPrimaryLink="/contacto"

        ctaSecondaryText="Hablar por WhatsApp"
        ctaSecondaryLink="https://wa.me/573022016072"

        background="/img/hero/bg_2.png"
        variant="center"
        height="full"
      />

      {/* ⚙️ SERVICIOS */}
      <ServicesHome />

      {/* 🔥 BLOQUE COMBINADO */}
      <Section variant="dark" paddingY="sm">
        <div className="grid gap-16 md:grid-cols-[1fr_2.5fr] items-center px-0 w-full">
          <WhySatCore />
          <UseCases />
        </div>
      </Section>

      {/* 📦 PORTAFOLIO */}
      <Portfolio />

      {/* ⭐ TESTIMONIOS */}
      <Testimonials />

      {/* 🚀 CTA FINAL */}
      <CTA />

    </main>
  );
}