import Image from "next/image";
import Link from "next/link";
import { Globe, Layout, AppWindow, Shield, LucideIcon } from "lucide-react";
import { Project, ProjectService } from "@/types/project";

/* 🧠 CONFIG TIPADA CORRECTAMENTE */
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
      onClick={() => {
        window.dataLayer.push({
          event: "project_click",
          project_title: project.title,
          project_category: project.category,
          project_service: project.service,
          project_id: project.id,
          section: "projects_grid",
          page_path: window.location.pathname,
        });
      }}
    >
      <div className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/10">

        {/* IMAGE */}
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="object-cover w-full h-56 group-hover:scale-105 transition duration-500"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-100 transition" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">

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
          <p className="text-gray-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition duration-300">
            {project.description}
          </p>
        </div>

        {/* BORDER HOVER */}
        <div className="absolute inset-0 border border-transparent group-hover:border-accent/40 rounded-xl transition" />
      </div>
    </Link>
  );
}
