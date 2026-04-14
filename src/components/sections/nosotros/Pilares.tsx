"use client";

import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import ServiceIcon from "@/components/ui/ServiceIcon";

/* 🧠 TIPOS */
type ServiceType =
  | "software"
  | "educacion"
  | "ciberseguridad"
  | "ia"
  | "branding";

interface Pilar {
  title: string;
  subtitle: string;
  type: ServiceType;
  active: boolean;
}

/* 📦 DATA */
const pilares: Pilar[] = [
  {
    title: "Estudio",
    subtitle: "Formación tecnológica basada en proyectos reales.",
    type: "educacion",
    active: true,
  },
  {
    title: "Desarrollo",
    subtitle: "Creación de sitios web y aplicaciones.",
    type: "software",
    active: true,
  },
  {
    title: "Automatización",
    subtitle: "Sistemas inteligentes y agentes automatizados.",
    type: "ia",
    active: true,
  },
  {
    title: "Seguridad",
    subtitle: "Auditorías, pentesting y protección digital.",
    type: "ciberseguridad",
    active: true,
  },
  {
    title: "Marketing",
    subtitle: "Branding estratégico y contenido digital.",
    type: "branding",
    active: true,
  },
];

/* 🚀 COMPONENTE */
export default function Pilares() {
  return (
    <Section variant="white" paddingY="md">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nuestros Pilares
          </h2>
          <p className="text-muted text-sm mt-2 max-w-md mx-auto">
            Construimos soluciones tecnológicas completas a través de un
            ecosistema de servicios especializados.
          </p>
        </div>

        {/* 🧩 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {pilares
            .filter((pilar) => pilar.active)
            .map((pilar, index) => (
              <ServiceCard
                key={index}
                title={pilar.title}
                subtitle={pilar.subtitle}
                type={pilar.type}
                variant="light"
                size="md"
                className="h-full"
              >
              </ServiceCard>
            ))}

        </div>

      </div>
    </Section>
  );
}