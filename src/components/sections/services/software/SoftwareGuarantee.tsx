"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { ShieldCheck, Wrench } from "lucide-react";
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
              title="Garantía (30 días)"
              subtitle="Incluye corrección de bugs y ajustes menores posteriores a la entrega. No cubre nuevas funcionalidades ni cambios de alcance."
              icon={ShieldCheck}
              variant="minimal"
              size="lg"
              iconVariant="circleGreen"
            />
          </motion.div>

          {/* 🔧 MAINTENANCE */}
          <motion.div variants={rightItem}>
            <ServiceCard
              title="Plan de mantenimiento"
              subtitle="Actualizaciones de seguridad, backups automáticos, soporte técnico y mejoras continuas según plan."
              icon={Wrench}
              variant="minimal"
              size="lg"
              iconVariant="circleBlue"
            />
          </motion.div>

        </motion.div>

      </div>
    </Section>
  );
}
