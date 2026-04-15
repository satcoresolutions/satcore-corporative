"use client";

import { PROJECT_CATEGORIES, MacroFilter } from "@/types/project";

interface Props {
  active: MacroFilter;
  onChange: (filter: MacroFilter) => void;
}

const labels: Record<MacroFilter, string> = {
  Todos: "Todos",
  software: "Software",
  ciberseguridad: "Ciberseguridad",
  ia: "IA",
  branding: "Branding",
  educacion: "Educación",
};

const filters: MacroFilter[] = ["Todos", ...PROJECT_CATEGORIES];

export default function MacroFilters({ active, onChange }: Props) {
  return (
    <div className="flex gap-3 flex-wrap">
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
