import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import {
  GraduationCap,
  UserX,
  RefreshCw,
  Globe,
  Layers,
  DollarSign,
  ShieldAlert,
  Rocket,
  LucideIcon,
} from "lucide-react";

/* 🧠 TYPES */
type ProblemItem = {
  problem: string;
  solution: string;
  impact: string;
  icon: LucideIcon;
};

/* 📦 DATA */
const problems: ProblemItem[] = [
  {
    problem: "Falta de conocimientos técnicos",
    icon: GraduationCap,
    solution: "Formación práctica + soluciones listas para usar",
    impact: "El cliente puede operar su sistema sin depender de terceros",
  },
  {
    problem: "Dependencia de desarrolladores externos",
    icon: UserX,
    solution: "Sistemas documentados y fáciles de mantener",
    impact: "Autonomía total del cliente sobre su producto digital",
  },
  {
    problem: "Procesos manuales e ineficientes",
    icon: RefreshCw,
    solution: "Automatización de tareas repetitivas y flujos internos",
    impact: "Ahorro de tiempo y reducción de errores humanos",
  },
  {
    problem: "Presencia digital inexistente",
    icon: Globe,
    solution: "Desarrollo web profesional y optimizado para conversión",
    impact: "Mayor visibilidad y generación de clientes potenciales",
  },
  {
    problem: "Herramientas desorganizadas",
    icon: Layers,
    solution: "Integración de sistemas en un solo ecosistema digital",
    impact: "Mejor control y centralización de la información",
  },
  {
    problem: "Costos altos de software",
    icon: DollarSign,
    solution: "Soluciones a medida optimizadas en costo-beneficio",
    impact: "Inversión más inteligente y escalable",
  },
  {
    problem: "Riesgos de seguridad",
    icon: ShieldAlert,
    solution: "Buenas prácticas de seguridad desde el desarrollo",
    impact: "Reducción de vulnerabilidades críticas",
  },
  {
    problem: "Falta de escalabilidad",
    icon: Rocket,
    solution: "Arquitecturas preparadas para crecimiento",
    impact: "El sistema crece junto al negocio sin rehacerlo",
  },
];

/* 🚀 COMPONENT */
export default function ProblemasQueResolvemos() {
  return (
    <Section variant="dark" paddingY="md">
      <div className="container space-y-10">

        {/* HEADER */}
        <div>
          <h2 className="text-3xl font-bold">
            Problemas que resolvemos
          </h2>

          <p className="text-muted mt-2 max-w-2xl">
            Identificamos los principales bloqueos tecnológicos de las empresas
            y los transformamos en soluciones digitales escalables.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.problem}
              icon={item.icon}
              iconVariant="flatBlue"
              variant="info"
              size="md"
            >
              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-green-500">
                    ✔ Solución:
                  </span>{" "}
                  {item.solution}
                </p>

                <p className="text-sm text-muted">
                  <span className="font-semibold">
                    🚀 Impacto:
                  </span>{" "}
                  {item.impact}
                </p>
              </div>
            </ServiceCard>
          ))}
        </div>

      </div>
    </Section>
  );
}