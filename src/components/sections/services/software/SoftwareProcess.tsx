"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { Search, Palette, Code, Rocket, RefreshCw } from "lucide-react";
import Section from "@/components/ui/universalSection";
import { motion, Variants } from "framer-motion";

/* 📦 DATA */
const steps = [
  {
    title: "Descubrimiento",
    subtitle: "Entendemos tu negocio, objetivos y alcance del proyecto.",
    icon: Search,
  },
  {
    title: "Diseño UX/UI",
    subtitle: "Wireframes, prototipos y diseño visual profesional.",
    icon: Palette,
  },
  {
    title: "Desarrollo",
    subtitle: "Construcción del sistema frontend, backend y base de datos.",
    icon: Code,
  },
  {
    title: "Testing & Deploy",
    subtitle: "Pruebas, optimización y puesta en producción.",
    icon: Rocket,
  },
  {
    title: "Mantenimiento",
    subtitle: "Soporte, mejoras y evolución del sistema.",
    icon: RefreshCw,
  },
];

/* 🎬 ANIMACIONES */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SoftwareProcess() {
  return (
    <Section variant="white" paddingY="md">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-dark">
            Metodología de trabajo
          </h2>

          <p className="text-(--color-muted-light) max-w-2xl mx-auto">
            Un proceso estructurado para garantizar calidad, velocidad y escalabilidad.
          </p>
        </motion.div>

        {/* 🧩 STEPS ANIMADOS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <ServiceCard
                title={`${i + 1}. ${step.title}`}
                subtitle={step.subtitle}
                icon={step.icon}
                variant="info"
                size="md"
                iconVariant="circleBlue"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}
