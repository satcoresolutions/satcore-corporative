"use client";

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
import { motion, Variants } from "framer-motion";

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

/* 🎬 ANIMACIONES */

// contenedor (stagger elegante)
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// items (entrada lateral alternada PRO)
const item: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -40 : 40, // alterna izquierda/derecha
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PropuestaValor() {
  return (
    <Section variant="blue" paddingY="md">
      <div className="container space-y-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">
            Propuesta de Valor
          </h2>

          <p className="text-muted mt-2 max-w-2xl">
            “En SatCore desarrollamos soluciones tecnológicas seguras,
            accesibles y funcionales, mientras enseñamos a nuestros clientes
            a utilizarlas para crecer y escalar.”
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {valueData.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              custom={index} // 🔥 necesario para alternar lados
            >
              <ServiceCard
                title={itemData.title}
                icon={itemData.icon}
                iconVariant="circleGreen"
                variant="info"
                size="sm"
                className="h-full"
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
