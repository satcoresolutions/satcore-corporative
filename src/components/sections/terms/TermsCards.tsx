"use client";

import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import { termsData } from "@/data/terms";
import { motion, Variants } from "framer-motion";

/* 🎬 VARIANTES */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};


export default function TermsCards() {
  return (
    <Section variant="white" paddingY="lg">
      <motion.div
        className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {termsData.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }} // 🔥 extra pro
            transition={{ type: "spring", stiffness: 200 }}
          >
            <ServiceCard
              title={item.title}
              subtitle={item.description}
              variant="light"
              size="md"
              iconVariant="circleGreen"
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
