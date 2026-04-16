"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import Modal from "@/components/ui/Modal";
import { servicesData } from "@/data/servicesData";
import Section from "@/components/ui/universalSection";
import { ServiceCategory } from "@/types/service";
import { pushEvent } from "@/lib/analytics";
import { motion, Variants } from "framer-motion";

export default function SoftwareServiceCatalog() {
  const [selected, setSelected] = useState<ServiceCategory | null>(null);

  /* 🎬 ANIMACIONES */

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item: Variants = {
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

  return (
    <Section id="procesos" variant="white" paddingY="lg">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tipos de proyectos que desarrollamos
          </h2>

          <p className="text-muted max-w-2xl mx-auto">
            Soluciones digitales adaptadas a cada negocio.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {servicesData.map((category, index) => (
            <motion.div
              key={category.id}
              variants={item}
              className="h-full"
            >
              <div
                onClick={() => {
                  setSelected(category);

                  pushEvent({
                    event: "service_card_click",
                    service_name: category.category,
                    service_id: category.id,
                    service_category: "software",
                    position: index + 1,
                    section: "services_catalog",
                    page_path: window.location.pathname,
                  });
                }}
                className="cursor-pointer h-full"
              >
                <ServiceCard
                  title={category.category}
                  subtitle={category.subtitle}
                  icon={category.icon}
                  variant="dark"
                  size="md"
                  className="text-center h-full hover:scale-105 transition"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* MODAL */}
        <Modal
          open={!!selected}
          onClose={() => setSelected(null)}
          title={selected?.category}
          services={selected?.levels || []}
        />
      </div>
    </Section>
  );
}
