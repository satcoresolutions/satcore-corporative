import { Check, X } from "lucide-react";
import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";

const includes = [
  "Diseño responsive (mobile, tablet, desktop)",
  "Hasta 10 páginas o secciones",
  "Formulario de contacto funcional",
  "Integración básica SEO",
  "Panel administrativo (CMS)",
  "Capacitación de uso",
  "Documentación básica",
];

const notIncludes = [
  "Dominio y hosting",
  "Marketing digital",
  "Contenido o copywriting avanzado",
  "Integraciones de pago complejas",
  "Apps móviles nativas",
];

export default function SoftwareScope() {
  return (
    <Section variant="blue" paddingY="lg">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Alcance del proyecto
        </h2>

        <p className="text-(--color-muted-light) max-w-2xl mx-auto">
          Definimos claramente qué está incluido y qué no, para evitar ambigüedades.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* ✅ INCLUYE */}
        <ServiceCard
          title="Incluye"
          icon={Check}
          iconVariant="circleGreen"
          variant="minimal"
          size="sm"
          className="text-left"
        >
          <ul className="mt-4 space-y-3">
            {includes.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <Check className="w-4 h-4 text-(--color-success) mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ServiceCard>

        {/* ❌ NO INCLUYE */}
        <ServiceCard
          title="No incluye"
          icon={X}
          iconVariant="circleBlue"
          variant="minimal"
          size="sm"
          className="text-left"
        >
          <ul className="mt-4 space-y-3">
            {notIncludes.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <X className="w-4 h-4 text-(--color-error) mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ServiceCard>

      </div>

    </Section>
  );
}