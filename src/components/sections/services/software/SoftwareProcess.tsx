import ServiceCard from "@/components/ui/ServiceCard";
import { Search, Palette, Code, Rocket, RefreshCw } from "lucide-react";
import Section from "@/components/ui/universalSection";

/* 📦 DATA */
const steps = [
  {
    title: "Descubrimiento",
    subtitle: "Entendemos tu negocio, objetivos y alcance del proyecto.",
    icon: Search,
  },
  {
    title: "Diseño UX/UI",
    subtitle: "Wireframes, prototipos y diseño visual profesional.",
    icon: Palette,
  },
  {
    title: "Desarrollo",
    subtitle: "Construcción del sistema frontend, backend y base de datos.",
    icon: Code,
  },
  {
    title: "Testing & Deploy",
    subtitle: "Pruebas, optimización y puesta en producción.",
    icon: Rocket,
  },
  {
    title: "Mantenimiento",
    subtitle: "Soporte, mejoras y evolución del sistema.",
    icon: RefreshCw,
  },
];

export default function SoftwareProcess() {
  return (
    <Section variant="white" paddingY="md">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-dark">
            Metodología de trabajo
          </h2>

          <p className="text-(--color-muted-light) max-w-2xl mx-auto">
            Un proceso estructurado para garantizar calidad, velocidad y escalabilidad.
          </p>
        </div>

        {/* 🧩 STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

          {steps.map((step, i) => (
            <ServiceCard
              key={i}
              title={`${i + 1}. ${step.title}`}
              subtitle={step.subtitle}
              icon={step.icon}
              variant="info"
              size="md"
              iconVariant="circleBlue"
            />
          ))}

        </div>

      </div>
    </Section>
  );
}