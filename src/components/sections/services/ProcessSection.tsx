import Section from "../../ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";

/* 🧠 TYPES */
type ServiceType =
  | "software"
  | "educacion"
  | "ciberseguridad"
  | "ia"
  | "branding";

/* 📦 DATA */
const steps: {
  title: string;
  subtitle: string;
  type: ServiceType;
  active: boolean;
}[] = [
  {
    title: "Diagnóstico",
    subtitle: "Analizamos tu negocio, procesos y necesidades tecnológicas.",
    type: "software",
    active: true,
  },
  {
    title: "Arquitectura",
    subtitle: "Diseñamos la solución ideal con escalabilidad y seguridad.",
    type: "ciberseguridad",
    active: true,
  },
  {
    title: "Desarrollo",
    subtitle: "Construimos el sistema con tecnologías modernas y eficientes.",
    type: "ia",
    active: true,
  },
  {
    title: "Implementación",
    subtitle: "Desplegamos la solución e integramos tu operación.",
    type: "software",
    active: true,
  },
  {
    title: "Soporte & Evolución",
    subtitle: "Mejoras continuas, mantenimiento y optimización.",
    type: "branding",
    active: true,
  },
];

/* 🚀 COMPONENT */
export default function ProcessSection() {
  return (
    <Section variant="white" paddingY="md">

      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-dark">
            Nuestro Proceso
          </h2>

          <p className="text-(--color-muted-light) max-w-2xl mx-auto">
            Un flujo estructurado que garantiza resultados claros y escalables.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {steps
            .filter((step) => step.active)
            .map((step, index) => (
              <ServiceCard
                key={index}
                title={step.title}
                subtitle={step.subtitle}           
                variant="info"
                size="md"
              />
            ))}

        </div>

      </div>
    </Section>
  );
}