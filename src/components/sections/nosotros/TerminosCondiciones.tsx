"use client";

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
import { motion, Variants } from "framer-motion";

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

/* 🎬 ANIMACIONES */

// contenedor (stagger)
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// items (entrada lateral alternada)
const item: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -30 : 30, // izquierda / derecha
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TerminosCondiciones() {
  return (
    <Section variant="dark" paddingY="md">
      <div className="container space-y-10">

        {/* HEADER */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">
            Términos y Condiciones
          </h2>

          <p className="text-muted max-w-2xl mx-auto">
            Condiciones claras, transparentes y estructuradas para garantizar
            confianza y profesionalismo en cada proyecto.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {termsData.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              custom={index}
            >
              <ServiceCard
                title={itemData.title}
                icon={itemData.icon}
                iconVariant="circleBlue"
                variant="minimal"
                size="md"
              >
                {itemData.content}
              </ServiceCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}
