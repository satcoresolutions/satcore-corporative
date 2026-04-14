"use client";

import { Target, Eye } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

export default function MisionVision() {
  return (
    <section className="section">
      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Misión & Visión
          </h2>
          <p className="text-muted text-sm mt-2 max-w-md mx-auto">
            Nuestra dirección estratégica y propósito como empresa.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* MISIÓN */}
          <ServiceCard
            title="Misión"
            subtitle="Brindar soluciones tecnológicas accesibles, seguras y personalizadas a través del desarrollo de software, automatizaciones, formación técnica y servicios de ciberseguridad, orientados a individuos, empresas y entornos educativos."
            icon={Target}
            iconVariant="circleBlue"   // 🔵 más importante visualmente
            variant="light"            // 🎨 CARD BLANCA
            size="lg"
            className="h-full"
          />

          {/* VISIÓN */}
          <ServiceCard
            title="Visión"
            subtitle="Ser reconocidos como una empresa líder en soluciones tecnológicas integrales en Latinoamérica, destacándose por nuestra capacidad técnica, innovación en ciberseguridad, formación educativa de calidad y servicios automatizados personalizados."
            icon={Eye}
            iconVariant="circleBlue"
            variant="light"
            size="lg"
            className="h-full"
          />

        </div>

      </div>
    </section>
  );
}