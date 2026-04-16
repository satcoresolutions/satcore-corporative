"use client";

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
import { motion, Variants } from "framer-motion";

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

/* 🎬 ANIMACIONES */

// contenedor
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// items (cards)
const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* 🚀 COMPONENT */
export default function ProblemasQueResolvemos() {
  return (
    <Section variant="dark" paddingY="md">
      <div className="container space-y-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">
            Problemas que resolvemos
          </h2>

          <p className="text-muted mt-2 max-w-2xl">
            Identificamos los principales bloqueos tecnológicos de las empresas
            y los transformamos en soluciones digitales escalables.
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
          {problems.map((itemData, index) => (
            <motion.div key={index} variants={item}>
              <ServiceCard
                title={itemData.problem}
                icon={itemData.icon}
                iconVariant="flatBlue"
                variant="info"
                size="md"
              >
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-green-500">
                      ✔ Solución:
                    </span>{" "}
                    {itemData.solution}
                  </p>

                  <p className="text-sm text-muted">
                    <span className="font-semibold">
                      🚀 Impacto:
                    </span>{" "}
                    {itemData.impact}
                  </p>
                </div>
              </ServiceCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}
