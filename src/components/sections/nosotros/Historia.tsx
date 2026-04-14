"use client";

import { Sparkles } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Historia() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">

        {/* 🧠 TEXTO */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra Historia
          </h2>

          <p className="text-muted text-sm leading-relaxed mb-4">
            <strong>SatCore Solutions</strong> nace como una iniciativa enfocada
            en cerrar la brecha entre la tecnología avanzada y las necesidades
            reales de personas, emprendedores y empresas.
          </p>

          <p className="text-muted text-sm leading-relaxed mb-4">
            Desde sus inicios, la empresa se ha orientado al desarrollo de
            soluciones digitales funcionales, combinando{" "}
            <strong>software, automatización e inteligencia aplicada</strong>
            para optimizar procesos, mejorar la productividad y fortalecer la
            seguridad de la información.
          </p>

          <p className="text-muted text-sm leading-relaxed">
            Hoy, SatCore Solutions evoluciona como un ecosistema tecnológico
            integral, con enfoque en la escalabilidad, la innovación constante
            y la creación de soluciones reales que generan impacto en el mundo
            digital.
          </p>
        </div>

        {/* 🚀 CARD DESTACADA */}
        <ServiceCard
          title="Enfoque Tecnológico"
          subtitle="Desarrollamos soluciones digitales escalables, seguras y orientadas a resultados reales, combinando software, automatización y ciberseguridad."
          icon={Sparkles}
          iconVariant="circleBlue"
          variant="light"
          size="lg"
          className="h-full"
        />

      </div>
    </section>
  );
}