"use client";

import SocialIcon from "@/components/ui/SocialIcon";
import { motion, Variants } from "framer-motion";

/* 🎬 ANIMACIONES */

// contenedor
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// items (iconos)
const item: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactSocials() {
  return (
    <div>

      {/* 🔥 TITLE */}
      <motion.h3
        className="font-semibold mb-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Síguenos
      </motion.h3>

      {/* 🧩 ICONS */}
      <motion.div
        className="flex gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <motion.div variants={item} whileHover={{ y: -4, scale: 1.1 }}>
          <SocialIcon
            section="contact"
            size="lg"
            type="instagram"
            href="https://instagram.com/satcore_solutions"
          />
        </motion.div>

        <motion.div variants={item} whileHover={{ y: -4, scale: 1.1 }}>
          <SocialIcon
            section="contact"
            size="lg"
            type="tiktok"
            href="https://www.tiktok.com/@satcore_solutions"
          />
        </motion.div>

        <motion.div variants={item} whileHover={{ y: -4, scale: 1.1 }}>
          <SocialIcon
            section="contact"
            size="lg"
            type="youtube"
            href="https://www.youtube.com/@SatCore_Solutions"
          />
        </motion.div>

        <motion.div variants={item} whileHover={{ y: -4, scale: 1.1 }}>
          <SocialIcon
            section="contact"
            size="lg"
            type="facebook"
            href="https://www.facebook.com/SatCore.Solutions/"
          />
        </motion.div>

      </motion.div>

    </div>
  );
}
