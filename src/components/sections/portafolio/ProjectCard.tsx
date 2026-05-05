"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Layout, AppWindow, Shield, LucideIcon } from "lucide-react";
import { Project, ProjectService } from "@/types/project";
import { pushEvent } from "@/lib/analytics";

/* 🧠 CONFIG */
const serviceConfig: Record<
  ProjectService,
  { icon: LucideIcon; label: string }
> = {
  landing: { icon: Globe, label: "Landing Page" },
  corporativa: { icon: Layout, label: "Web Corporativa" },
  webapp: { icon: AppWindow, label: "Web App" },
  custom: { icon: Shield, label: "Solución a medida" },
  ecommerce: { icon: Layout, label: "E-commerce" },
  portal: { icon: AppWindow, label: "Portal Web" },
};

export default function ProjectCard({ project }: { project: Project }) {
  const config = project.service
    ? serviceConfig[project.service]
    : null;

  const Icon = config?.icon;

  return (
    <Link
      href={project.href}
      target="_blank"
      onClick={(e) => {
        pushEvent({
          event: "project_click",
          project_title: project.title,
          project_category: project.category,
          project_service: project.service,
          project_id: project.id,
          section: "projects_grid",
          page_path: window.location.pathname,
        });

        setTimeout(() => {
          window.open(project.href, "_blank");
        }, 150);

        e.preventDefault();
      }}
    >
      <div className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 h-full transition-transform duration-300 hover:-translate-y-1.5">

        {/* IMAGE */}
        <div className="overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="object-cover w-full h-56 transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col p-5">
          <div className="mt-auto">

            {/* BADGE */}
            {config && Icon && (
              <div className="inline-flex items-center gap-2 text-xs font-medium text-accent mb-2">
                <Icon size={14} />
                <span>{config.label}</span>
              </div>
            )}

            {/* TITLE */}
            <h3 className="text-white font-semibold text-lg leading-tight">
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-sm mt-1">
              {project.description}
            </p>

          </div>
        </div>

        {/* BORDER HOVER */}
        <div className="absolute inset-0 border border-transparent rounded-xl group-hover:border-[rgba(0,255,150,0.4)] transition duration-300" />

      </div>
    </Link>
  );
}