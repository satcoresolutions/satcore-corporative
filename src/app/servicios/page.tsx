import Hero from "@/components/shared/Hero";
import ServicesSection from "@/components/sections/services/ServicesSection";
import ProcessSection from "@/components/sections/services/ProcessSection";
import BenefitsSection from "@/components/sections/services/BenefitsSection";
import CTASection from "@/components/sections/services/CTASection";

export default function ServiciosPage() {
  return (
    <main>

      {/* HERO */}
      <Hero
        title="SOLUCIONES TECNOLÓGICAS"
        highlight="INTEGRALES"
        description="Desde desarrollo de software hasta inteligencia artificial y ciberseguridad."
        ctaText="Ver servicios"
        ctaLink="#servicios"
        background="/img/hero/bg_3.png"
        variant="left"
        height="full"
      />

      {/* 🔥 AQUÍ VA TU SECCIÓN IMPORTANTE */}
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      <CTASection />
    </main>
  );
}