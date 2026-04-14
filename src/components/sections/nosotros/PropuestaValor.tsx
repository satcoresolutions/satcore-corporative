import ServiceCard from "@/components/ui/ServiceCard";
import Section from "@/components/ui/universalSection";
import {
  Globe,
  GraduationCap,
  ShieldCheck,
  Cpu,
  BarChart3,
  LucideIcon,
} from "lucide-react";

/* 🧠 TYPES */
type ValueItem = {
  title: string;
  content: string;
  icon: LucideIcon;
};

/* 📦 DATA */
const valueData: ValueItem[] = [
  {
    title: "Enfoque Accesible",
    icon: Globe,
    content:
      "Comunicación clara, soluciones adaptadas a Latinoamérica, precios accesibles y material educativo incluido.",
  },
  {
    title: "Formación Integrada",
    icon: GraduationCap,
    content:
      "No solo entregamos software, enseñamos a usarlo con guías, documentación y soporte educativo.",
  },
  {
    title: "Seguridad por Diseño",
    icon: ShieldCheck,
    content:
      "Buenas prácticas desde el inicio, análisis de riesgos y posibilidad de auditorías avanzadas.",
  },
  {
    title: "Soluciones Funcionales",
    icon: Cpu,
    content:
      "Automatización real, herramientas listas para usar y enfoque en utilidad, no solo diseño.",
  },
  {
    title: "Enfoque en Datos",
    icon: BarChart3,
    content:
      "Decisiones basadas en métricas, analítica e integración con sistemas escalables.",
  },
];

/* 🚀 COMPONENT */
export default function PropuestaValor() {
  return (
    <Section variant="blue" paddingY="md">
      <div className="container space-y-10">

        {/* HEADER */}
        <div>
          <h2 className="text-3xl font-bold">
            Propuesta de Valor
          </h2>

          <p className="text-muted mt-2 max-w-2xl">
            “En SatCore desarrollamos soluciones tecnológicas seguras,
            accesibles y funcionales, mientras enseñamos a nuestros clientes
            a utilizarlas para crecer y escalar.”
          </p>
        </div>

        {/* GRID 5 COLUMNAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {valueData.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              icon={item.icon}
              iconVariant="circleGreen"
              variant="info"
              size="sm"
            >
              {item.content}
            </ServiceCard>
          ))}
        </div>

      </div>
    </Section>
  );
}