import ServiceCard from "@/components/ui/ServiceCard";
import Section from "@/components/ui/universalSection";
import {
  CreditCard,
  Clock,
  ShieldCheck,
  RefreshCw,
  Scale,
  Lock,
  XCircle,
  UserCheck,
  Workflow,
  LucideIcon,
} from "lucide-react";

/* 🧠 TYPES */
type TermItem = {
  title: string;
  content: string;
  icon: LucideIcon;
};

/* 📦 DATA */
const termsData: TermItem[] = [
  {
    title: "Pagos y Facturación",
    icon: CreditCard,
    content:
      "Anticipos según tipo de proyecto (50%, 40% o por sprints). Métodos: Nequi, Daviplata, PayU, MercadoPago.",
  },
  {
    title: "Tiempos de Entrega",
    icon: Clock,
    content:
      "Los tiempos son estimados y dependen de complejidad técnica y comunicación del cliente.",
  },
  {
    title: "Garantía y Soporte",
    icon: ShieldCheck,
    content:
      "Incluye 30 días de soporte post-entrega para corrección de errores técnicos menores.",
  },
  {
    title: "Cambios y Alcance",
    icon: RefreshCw,
    content:
      "Todo cambio fuera del alcance inicial será evaluado y cotizado por separado.",
  },
  {
    title: "Propiedad Intelectual",
    icon: Scale,
    content:
      "El cliente obtiene los derechos del proyecto tras el pago total. No incluye librerías open source.",
  },
  {
    title: "Confidencialidad",
    icon: Lock,
    content:
      "Toda la información del cliente es confidencial. Posibilidad de firmar NDA si es requerido.",
  },
  {
    title: "Cancelaciones",
    icon: XCircle,
    content:
      "Antes de iniciar: reembolso total. Durante: proporcional al avance. Después: no hay devoluciones.",
  },
  {
    title: "Responsabilidades del Cliente",
    icon: UserCheck,
    content:
      "El cliente debe entregar información clara, responder a tiempo y validar entregables.",
  },
  {
    title: "Modelo de Trabajo",
    icon: Workflow,
    content:
      "Trabajo ágil, iterativo y enfocado en resultados escalables con entregas progresivas.",
  },
];

/* 🚀 COMPONENT */
export default function TerminosCondiciones() {
  return (
    <Section variant="dark" paddingY="md">
      <div className="container space-y-10">

        {/* HEADER */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">
            Términos y Condiciones
          </h2>

          <p className="text-muted max-w-2xl mx-auto">
            Condiciones claras, transparentes y estructuradas para garantizar
            confianza y profesionalismo en cada proyecto.
          </p>
        </div>

        {/* GRID DINÁMICO */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {termsData.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              icon={item.icon}
              iconVariant="circleBlue"
              variant="minimal"
              size="md"
            >
              {item.content}
            </ServiceCard>
          ))}
        </div>

      </div>
    </Section>
  );
}