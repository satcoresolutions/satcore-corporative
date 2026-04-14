"use client";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import Section from "@/components/ui/universalSection";

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <ContactHero />

      {/* CONTENIDO */}
      <Section variant="dark" paddingY="lg">
        <div
          id="formulario"
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        >
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>
    </main>
  );
}