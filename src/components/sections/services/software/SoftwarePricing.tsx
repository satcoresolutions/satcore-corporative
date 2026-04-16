"use client";

import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import { DollarSign, Clock } from "lucide-react";
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
    y: 30,
    scale: 0.96,
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

export default function SoftwarePricing() {
  const plans = [
    {
      title: "Landing Page",
      price: "$1.500.000 - $3.500.000",
      time: "2-3 semanas promedio",
    },
    {
      title: "Web Corporativa",
      price: "$4.000.000 - $15.000.000",
      time: "4-10 semanas promedio",
    },
    {
      title: "E-commerce",
      price: "$6.000.000 - $25.000.000",
      time: "6-16 semanas promedio",
    },
    {
      title: "Web App / SaaS",
      price: "Desde $15.000.000",
      time: "Cotización personalizada",
    },
  ];

  return (
    <Section variant="dark" paddingY="lg" overflow>

      {/* TITLE */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Tarifas referenciales
        </h2>

        <p className="text-(--color-muted-light) max-w-2xl mx-auto">
          Valores estimados según complejidad del proyecto. Cada solución es personalizada.
        </p>
      </motion.div>

      {/* GRID ANIMADO */}
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }} // 🔥 hover pro
          >
            <ServiceCard
              title={plan.title}
              variant="minimal"
              size="md"
              iconVariant="flatBlue"
              className="text-left"
              active
            >
              {/* 💰 PRICE */}
              <div className="mt-4 flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-accent" />
                <span className="text-lg font-semibold text-white">
                  {plan.price}
                </span>
              </div>

              {/* ⏱ TIME */}
              <div className="mt-2 flex items-center gap-2 text-sm text-white/60">
                <Clock className="w-4 h-4 text-primary" />
                <span>{plan.time}</span>
              </div>
            </ServiceCard>
          </motion.div>
        ))}
      </motion.div>

    </Section>
  );
}
