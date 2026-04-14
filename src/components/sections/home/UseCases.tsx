import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import {
  Rocket,
  Building2,
  ShoppingCart,
  GraduationCap,
} from "lucide-react";

/* 📦 DATA */
const cases = [
  {
    title: "Startups",
    subtitle: "Soluciones escalables desde cero",
    icon: Rocket,
    active: true,
  },
  {
    title: "Empresas",
    subtitle: "Transformación digital empresarial",
    icon: Building2,
    active: true,
  },
  {
    title: "E-commerce",
    subtitle: "Automatización de ventas",
    icon: ShoppingCart,
    active: true,
  },
  {
    title: "Educación",
    subtitle: "Plataformas y capacitación",
    icon: GraduationCap,
    active: true,
  },
];

export default function UseCases() {
  return (
    <Section variant="dark" paddingY="md">

      {/* 🔹 CONTENEDOR */}
      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Soluciones para cada tipo de negocio
        </h2>

        {/* 🧩 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {cases
            .filter(item => item.active)
            .map((item, index) => (
              <ServiceCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}  
                variant="dark"
                size="sm"
              />
            ))}

        </div>

      </div>
    </Section>
  );
}
