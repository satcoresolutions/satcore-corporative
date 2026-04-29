"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { ShieldCheck, Bot } from "lucide-react";
import Section from "@/components/ui/universalSection";
import { motion, Variants } from "framer-motion";

/* 🎬 ANIMACIONES */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const leftItem: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightItem: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AIGuarantee() {
  return (
    <Section variant="blue" paddingY="md">

      {/* 🔥 TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Estabilidad y evolución continua
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto">
          Tus automatizaciones y agentes de IA se mantienen operativos, actualizados y optimizados en el tiempo.
        </p>
      </div>

      {/* 🧩 GRID ANIMADO */}
      <motion.div
        className="grid md:grid-cols-2 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >

        {/* 🛡️ WARRANTY */}
        <motion.div variants={leftItem}>
          <ServiceCard
            title="Garantía técnica (30 días)"
            subtitle="Corrección de errores y ajustes sobre automatizaciones, bots o agentes implementados. No incluye cambios por modificaciones externas (APIs, sitios web, plataformas)."
            icon={ShieldCheck}
            variant="minimal"
            size="lg"
            iconVariant="circleGreen"
          />
        </motion.div>

        {/* 🤖 MONITORING & OPTIMIZATION */}
        <motion.div variants={rightItem}>
          <ServiceCard
            title="Monitoreo y optimización"
            subtitle="Supervisión de flujos, ajuste de prompts, mejoras en agentes IA, adaptación a cambios externos y evolución continua según necesidades del negocio."
            icon={Bot}
            variant="minimal"
            size="lg"
            iconVariant="circleBlue"
          />
        </motion.div>

      </motion.div>

    </Section>
  );
}
