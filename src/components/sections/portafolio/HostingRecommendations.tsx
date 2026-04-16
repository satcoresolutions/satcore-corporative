"use client";

import Section from "@/components/ui/universalSection";
import { motion, Variants } from "framer-motion";

const data = [
  {
    tipo: "Landing / Sitio básico",
    hosting: "Hostinger / Vercel",
    inversion: "$400.000 - $800.000",
  },
  {
    tipo: "Sitio corporativo",
    hosting: "SiteGround / Cloudways",
    inversion: "$800.000 - $1.500.000",
  },
  {
    tipo: "E-commerce",
    hosting: "AWS / Cloudways",
    inversion: "$1.200.000 - $3.000.000",
  },
  {
    tipo: "Web App / Alto tráfico",
    hosting: "AWS / Azure",
    inversion: "Cotización personalizada",
  },
];

/* 🎬 ANIMACIONES */

// contenedor de filas
const tbodyVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// cada fila
const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HostingRecommendations() {
  return (
    <Section variant="dark" paddingY="lg">

      {/* HEADER */}
      <motion.div
        className="mb-10 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-foreground">
          Recomendaciones de Hosting
        </h2>

        <p className="mt-3 text-muted">
          Seleccionamos la infraestructura adecuada según el tipo de proyecto y su escalabilidad.
        </p>
      </motion.div>

      {/* TABLE */}
      <motion.div
        className="overflow-x-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <table className="w-full text-left rounded-xl overflow-hidden border border-(--color-border)">

          {/* HEAD */}
          <thead className="bg-(--color-surface-dark) text-foreground">
            <tr>
              <th className="p-4 font-semibold">Tipo de Proyecto</th>
              <th className="p-4 font-semibold">Hosting</th>
              <th className="p-4 font-semibold">Inversión</th>
            </tr>
          </thead>

          {/* BODY */}
          <motion.tbody
            variants={tbodyVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {data.map((item, index) => (
              <motion.tr
                key={index}
                variants={rowVariants}
                className="
                  border-t border-(--color-border)
                  hover:bg-(--color-surface-dark)
                  transition
                "
              >
                <td className="p-4 text-foreground">
                  {item.tipo}
                </td>

                <td className="p-4 text-muted">
                  {item.hosting}
                </td>

                <td className="p-4 text-accent font-semibold">
                  {item.inversion}
                </td>
              </motion.tr>
            ))}
          </motion.tbody>

        </table>
      </motion.div>

    </Section>
  );
}
