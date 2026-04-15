"use client";

import { PROJECT_SERVICES, MicroFilter, MacroFilter } from "@/types/project";

interface Props {
  active: MicroFilter;
  onChange: (filter: MicroFilter) => void;
  macro: MacroFilter;
}

/* 🧠 MAPEO */
const servicesByMacro: Record<MacroFilter, MicroFilter[]> = {
  Todos: ["Todos"],
  software: ["Todos", ...PROJECT_SERVICES],
  ciberseguridad: ["Todos"],
  ia: ["Todos"],
  branding: ["Todos"],
  educacion: ["Todos"],
};

const labels: Record<MicroFilter, string> = {
  Todos: "Todos",
  landing: "Landing",
  corporativa: "Web Corporativa",
  ecommerce: "E-commerce",
  webapp: "Web App",
  portal: "Portal",
  custom: "A medida",
};

export default function MicroFilters({ active, onChange, macro }: Props) {
  
  /* 🚫 NO MOSTRAR SI NO HAY MACRO */
  if (macro === "Todos") return null;

  const filters = servicesByMacro[macro] || ["Todos"];

  return (
    <div className="flex gap-3 flex-wrap mt-4 animate-fade-in">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`
            px-4 py-2 rounded-full text-sm transition
            border border-(--color-border)
            ${
              active === filter
                ? "bg-accent text-black font-semibold"
                : "bg-(--color-surface-light) text-(--color-muted-light) hover:opacity-80"
            }
          `}
        >
          {labels[filter]}
        </button>
      ))}
    </div>
  );
}
