import ServiceCard from "@/components/ui/ServiceCard";
import { CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/universalSection";

export default function SoftwareRequirements() {
  const items = [
    {
      title: "Entrega de información",
      subtitle: "Proveer materiales y contenido en tiempo",
    },
    {
      title: "Interlocutor único",
      subtitle: "Designar una persona responsable del proyecto",
    },
    {
      title: "Aprobación de entregables",
      subtitle: "Validar avances dentro de los tiempos establecidos",
    },
    {
      title: "Accesos técnicos",
      subtitle: "Hosting, APIs y recursos necesarios",
    },
    {
      title: "Pagos al día",
      subtitle: "Cumplimiento según cronograma acordado",
    },
    {
      title: "Seguimiento activo",
      subtitle: "Participación en reuniones de control",
    },
  ];

  return (
    <Section variant="dark" paddingY="md">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Requisitos del cliente
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">

          {items.map((item, i) => (
            <ServiceCard
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              icon={CheckCircle2}
              iconVariant="default"
              variant="minimal"
              size="sm"
              className="text-left"
            />
          ))}

        </div>

      </div>
    </Section>
  );
}