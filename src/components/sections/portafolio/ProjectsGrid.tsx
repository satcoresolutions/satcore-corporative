"use client";

import { useState } from "react";
import Section from "@/components/ui/universalSection";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

import MacroFilters from "./MacroFilters";
import MicroFilters from "./MicroFilters";

import { MacroFilter, MicroFilter } from "@/types/project";

const ITEMS_PER_PAGE = 9;

export default function ProjectsGrid() {
  const [macro, setMacro] = useState<MacroFilter>("Todos");
  const [micro, setMicro] = useState<MicroFilter>("Todos");
  const [page, setPage] = useState(1);

  /* 🔍 FILTRADO */
  const filteredProjects = projects.filter((project) => {
    const matchMacro =
      macro === "Todos" || project.category === macro;

    const matchMicro =
      micro === "Todos" || project.service === micro;

    return matchMacro && matchMicro;
  });

  /* 📄 PAGINACIÓN */
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const paginatedProjects = filteredProjects.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Section variant="white" paddingY="md" id="portafolio">

      <div className="mb-8 max-w-3xl">
        <h2 className="text-3xl font-bold text-(--color-text-light)">
          Portafolio de Casos
        </h2>

        <p className="mt-2 text-(--color-muted-light)">
          Filtra por pilar y tipo de solución.
        </p>
      </div>

      {/* 🔵 MACRO */}
      <MacroFilters
        active={macro}
        onChange={(value) => {
          setMacro(value);
          setMicro("Todos");
          setPage(1); // 🔥 reset paginación
        }}
      />

      {/* 🟣 MICRO */}
      <MicroFilters
        active={micro}
        onChange={(value) => {
          setMicro(value);
          setPage(1); // 🔥 reset paginación
        }}
        macro={macro}
      />

      {/* 🧱 GRID */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {paginatedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* ❌ EMPTY */}
      {filteredProjects.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-(--color-muted-light)">
            No hay proyectos en esta categoría.
          </p>
        </div>
      )}

      {/* 📄 PAGINATION */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-2 flex-wrap">

          {/* ⬅️ PREV */}
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-4 py-2 rounded-full border border-(--color-border) text-sm"
            disabled={page === 1}
          >
            ←
          </button>

          {/* 🔢 NUMBERS */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`
                px-4 py-2 rounded-full text-sm transition
                border border-(--color-border)
                ${
                  page === num
                    ? "bg-accent text-black font-semibold"
                    : "text-(--color-muted-light) hover:opacity-80"
                }
              `}
            >
              {num}
            </button>
          ))}

          {/* ➡️ NEXT */}
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="px-4 py-2 rounded-full border border-(--color-border) text-sm"
            disabled={page === totalPages}
          >
            →
          </button>

        </div>
      )}
    </Section>
  );
}
