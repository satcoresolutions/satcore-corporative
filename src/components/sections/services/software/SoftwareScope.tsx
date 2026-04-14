import { Check, X } from "lucide-react";
import Section from "@/components/ui/universalSection";

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
    <Section variant="white" paddingY="md">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Alcance del proyecto
          </h2>

          <p className="text-(--color-muted-light) max-w-2xl mx-auto">
            Definimos claramente qué está incluido y qué no, para evitar ambigüedades.
          </p>
        </div>

        {/* 🧩 GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* ✅ INCLUYE */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">

            <h3 className="text-xl font-semibold mb-6 text-green-600 flex items-center gap-2">
              <Check className="w-5 h-5" />
              Incluye
            </h3>

            <ul className="space-y-4">
              {includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* ❌ NO INCLUYE */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">

            <h3 className="text-xl font-semibold mb-6 text-red-500 flex items-center gap-2">
              <X className="w-5 h-5" />
              No incluye
            </h3>

            <ul className="space-y-4">
              {notIncludes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <X className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </Section>
  );
}