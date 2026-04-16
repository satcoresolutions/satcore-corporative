import Hero from "@/components/shared/Hero";
import ServicesSection from "@/components/sections/services/ServicesSection";
import ProcessSection from "@/components/sections/services/ProcessSection";
import BenefitsSection from "@/components/sections/services/BenefitsSection";
import CTASection from "@/components/sections/services/CTASection";

export default function ServiciosPage() {
  return (
    <main>

      {/* 🚀 HERO */}
      <Hero
        title="SOLUCIONES TECNOLÓGICAS"
        highlight="INTEGRALES"
        description="Desde desarrollo de software hasta inteligencia artificial y ciberseguridad, creamos soluciones escalables y seguras."

        ctaPrimaryText="Ver servicios"
        ctaPrimaryLink="#servicios"
        ctaPrimaryType="scroll_services"       // 🔥 exploración de oferta

        ctaSecondaryText="Hablemos"
        ctaSecondaryLink="https://wa.me/573022016072"
        ctaSecondaryType="whatsapp"            // 🔥 contacto directo

        section="services"                     // 🔥 contexto comercial

        background="/img/hero/bg_3.png"
        variant="services"
        height="full"
      />


      {/* 📦 SECCIONES */}
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />

      {/* 🔥 CTA FINAL */}
      <CTASection />

    </main>
  );
}