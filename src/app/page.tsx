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

      <Hero
        title="IMPULSA TU NEGOCIO"
        highlight="CON TECNOLOGÍA"
        description="Software a medida que es tu propiedad intelectual..."
        ctaText="Comienza tu transformación"
        ctaLink="/contacto"
        background="/img/hero/bg_2.png"
        variant="center"
        height="full"
      />
      <ServicesHome />

      {/* BLOQUE COMBINADO */}
      <Section variant="dark" paddingY="sm">
        <div className="grid gap-16 md:grid-cols-[1fr_2.5fr] items-center px-0 w-full">
          <WhySatCore />
          <UseCases />
        </div>
      </Section>

      {/* NUEVAS SECCIONES */}
      <Portfolio />
      <Testimonials />
      <CTA />

    </main>
  );
}
