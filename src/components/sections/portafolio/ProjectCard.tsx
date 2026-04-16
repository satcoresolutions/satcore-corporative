"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Layout, AppWindow, Shield, LucideIcon } from "lucide-react";
import { Project, ProjectService } from "@/types/project";
import { pushEvent } from "@/lib/analytics";
import { motion } from "framer-motion";

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
      <motion.div
        className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 h-full"
        
        /* 🎬 ENTRADA */
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}

        /* 🖱️ HOVER */
        whileHover={{ y: -6 }}
      >

        {/* IMAGE */}
        <motion.div
          className="overflow-hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="object-cover w-full h-56 transition duration-500 group-hover:scale-110"
          />
        </motion.div>

        {/* OVERLAY */}
        <motion.div
          className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">

          {/* BADGE */}
          {config && Icon && (
            <motion.div
              className="inline-flex items-center gap-2 text-xs font-medium text-accent mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Icon size={14} />
              <span>{config.label}</span>
            </motion.div>
          )}

          {/* TITLE */}
          <h3 className="text-white font-semibold text-lg leading-tight">
            {project.title}
          </h3>

          {/* DESCRIPTION */}
          <motion.p
            className="text-gray-300 text-sm mt-1"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>
        </div>

        {/* BORDER HOVER */}
        <motion.div
          className="absolute inset-0 border border-transparent rounded-xl"
          whileHover={{
            borderColor: "rgba(0,255,150,0.4)",
          }}
          transition={{ duration: 0.3 }}
        />

      </motion.div>
    </Link>
  );
}
