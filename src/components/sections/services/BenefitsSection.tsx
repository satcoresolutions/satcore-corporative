"use client";

import { Zap, Shield, Rocket, Layers } from "lucide-react";
import Section from "../../ui/universalSection";
import ServiceCard from "../../ui/ServiceCard";
import { motion, Variants } from "framer-motion";

/* 🎬 ANIMACIONES */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // 🔥 easing profesional
    },
  },
};

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Automatización",
      description: "Reduce procesos manuales y aumenta eficiencia.",
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "Protección avanzada para tus sistemas y datos.",
    },
    {
      icon: Rocket,
      title: "Escalabilidad",
      description: "Soluciones listas para crecer contigo.",
    },
    {
      icon: Layers,
      title: "Integración",
      description: "Conectamos todos tus sistemas en un solo flujo.",
    },
  ];

  return (
    <Section variant="dark" paddingY="md">
      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Beneficios Clave
          </h2>

          <p className="text-muted max-w-2xl mx-auto">
            Más que servicios, creamos impacto real en tu negocio.
          </p>
        </div>

        {/* GRID ANIMADO */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {benefits.map((itemData, index) => (
            <motion.div key={index} variants={item}>
              <ServiceCard
                title={itemData.title}
                subtitle={itemData.description}
                icon={itemData.icon}
                variant="light"
                size="md"
                className="text-center"
                iconVariant="flatBlue"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}
