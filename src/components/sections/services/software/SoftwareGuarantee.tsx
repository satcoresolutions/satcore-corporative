import ServiceCard from "@/components/ui/ServiceCard";
import { ShieldCheck, Wrench } from "lucide-react";
import Section from "@/components/ui/universalSection";

export default function SoftwareGuarantee() {
  return (
    <Section variant="blue" paddingY="md">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Garantías y mantenimiento
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            Aseguramos estabilidad, soporte y evolución continua después de la entrega.
          </p>
        </div>

        {/* 🧩 GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* 🛡️ WARRANTY */}
          <ServiceCard
            title="Garantía (30 días)"
            subtitle="Incluye corrección de bugs y ajustes menores posteriores a la entrega. No cubre nuevas funcionalidades ni cambios de alcance."
            icon={ShieldCheck}
            variant="minimal"
            size="lg"
            iconVariant="circleGreen"
          />

          {/* 🔧 MAINTENANCE */}
          <ServiceCard
            title="Plan de mantenimiento"
            subtitle="Actualizaciones de seguridad, backups automáticos, soporte técnico y mejoras continuas según plan."
            icon={Wrench}
            variant="minimal"
            size="lg"
            iconVariant="circleBlue"
          />

        </div>

      </div>
    </Section>
  );
}