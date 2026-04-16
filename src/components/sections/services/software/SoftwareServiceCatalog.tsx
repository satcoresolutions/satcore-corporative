"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import Modal from "@/components/ui/Modal";
import { servicesData } from "@/data/servicesData";
import Section from "@/components/ui/universalSection";
import { ServiceCategory } from "@/types/service";
import { pushEvent } from "@/lib/analytics";

export default function SoftwareServiceCatalog() {
  const [selected, setSelected] = useState<ServiceCategory | null>(null);

  return (
    <Section id="procesos" variant="white" paddingY="lg">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tipos de proyectos que desarrollamos
          </h2>

          <p className="text-muted max-w-2xl mx-auto">
            Soluciones digitales adaptadas a cada negocio.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((category, index) => (
            <div
              key={category.id}
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
              className="cursor-pointer"
            >
              <ServiceCard
                title={category.category}
                subtitle={category.subtitle}
                icon={category.icon}
                variant="dark"
                size="md"
                className="text-center hover:scale-105 transition"
              />
            </div>
          ))}
        </div>

        {/* MODAL */}
        <Modal
          open={!!selected}
          onClose={() => setSelected(null)}
          title={selected?.category}
          services={selected?.levels || []} // 🔥 AQUÍ ESTÁ LA MAGIA
        />
      </div>
    </Section>
  );
}