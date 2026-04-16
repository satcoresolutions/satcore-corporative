"use client";

import { motion } from "framer-motion";

export default function ContactLocation() {
  return (
    <motion.div
      className="text-sm text-muted space-y-1"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        📍 Bogotá, Colombia
      </motion.div>

      <motion.div
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        ✉️ satcoresolutions@gmail.com
      </motion.div>
    </motion.div>
  );
}
