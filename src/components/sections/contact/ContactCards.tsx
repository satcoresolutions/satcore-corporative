"use client";

import Image from "next/image";
import CalendarCard from "./CalendarCard";
import { motion, Variants } from "framer-motion";

/* 🎬 ANIMACIONES */

// contenedor
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// cards
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactCards() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* WHATSAPP */}
      <motion.div
        variants={item}
        whileHover={{ y: -4, scale: 1.02 }}
        className="card-contact"
      >
        <div className="flex items-center gap-3 mb-3">
          <Image src="/icons/whatsapp.png" alt="" width={24} height={24} />
          <h3 className="font-semibold">WhatsApp</h3>
        </div>

        <p className="text-sm text-muted mb-3">
          +57 302 201 6072
        </p>

        <a
          href="https://wa.me/573022016072"
          target="_blank"
          className="text-accent text-sm font-medium"
        >
          Chat con nosotros →
        </a>
      </motion.div>

      {/* CALENDARIO */}
      <motion.div
        variants={item}
        whileHover={{ y: -4, scale: 1.02 }}
      >
        <CalendarCard />
      </motion.div>

    </motion.div>
  );
}
