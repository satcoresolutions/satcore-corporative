"use client";

import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import { privacyData } from "@/data/privacy";
import { motion, Variants } from "framer-motion";

/* 🎬 ANIMACIONES */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
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

export default function PrivacyCards() {
  return (
    <Section variant="white" paddingY="lg">

      <motion.div
        className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {privacyData.map((item, i) => (
          <motion.div key={i} variants={cardVariants} className="h-full">
            <ServiceCard
              title={item.title}
              subtitle={item.description}
              variant="info"
              size="md"
              iconVariant="circleBlue"
              className="h-full"
            />
          </motion.div>
        ))}
      </motion.div>

    </Section>
  );
}
