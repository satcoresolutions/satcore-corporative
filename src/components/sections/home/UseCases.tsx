"use client";

import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import {
  Rocket,
  Building2,
  ShoppingCart,
  GraduationCap,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

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

/* 🎬 ANIMACIONES */

// contenedor
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// items (fade + subida + leve escala)
const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function UseCases() {
  return (
    <Section variant="dark" paddingY="md">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 TITLE */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Soluciones para cada tipo de negocio
        </motion.h2>

        {/* 🧩 GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {cases
            .filter(item => item.active)
            .map((itemData, index) => (
              <motion.div
                key={index}
                variants={item}
                className="h-full"
                whileHover={{ y: -6 }} // 🔥 micro interacción pro
              >
                <ServiceCard
                  title={itemData.title}
                  subtitle={itemData.subtitle}
                  icon={itemData.icon}
                  variant="dark"
                  size="sm"
                  className="h-full"
                />
              </motion.div>
            ))}
        </motion.div>

      </div>
    </Section>
  );
}
