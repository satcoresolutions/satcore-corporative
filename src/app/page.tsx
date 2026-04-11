import Hero from "@/components/shared/Hero";
import ServicesHome from "@/components/sections/home/ServicesHome";
import WhySatCore from "@/components/sections/home/WhySatCore";
import UseCases from "@/components/sections/home/UseCases";
import Portfolio from "@/components/sections/home/Portfolio";
import Testimonials from "@/components/sections/home/Testimonials";
import CTA from "@/components/sections/home/CTA";

export default function HomePage() {
  return (
    <main>

      <Hero />
      <ServicesHome />

      {/* BLOQUE COMBINADO */}
      <section className="section bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] items-center">
            <WhySatCore />
            <UseCases />
          </div>
        </div>
      </section>

      {/* NUEVAS SECCIONES */}
      <Portfolio />
      <Testimonials />
      <CTA />

    </main>
  );
}
