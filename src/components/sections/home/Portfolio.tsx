import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/universalSection";
import { projects } from "@/data/projects";

/* 🧠 HELPERS */
function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

function getLatestProjects() {
  return [...projects].sort((a, b) => b.id - a.id);
}

export default function Portfolio() {
  const featured = getFeaturedProjects();
  const latest = getLatestProjects();

  const homeProjects =
    featured.length > 0 ? featured.slice(0, 3) : latest.slice(0, 3);

  return (
    <Section variant="white" paddingY="md">
      <div className="max-w-6xl mx-auto px-6">

        {/* 🧠 HEADER */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-light)">
            Proyectos destacados
          </h2>

          <p className="mt-3 text-(--color-muted-light)">
            Soluciones reales que reflejan cómo transformamos ideas en productos digitales escalables.
          </p>
        </div>

        {/* 🧱 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {homeProjects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="
                  group rounded-xl overflow-hidden
                  border border-(--color-border)
                  bg-white
                  hover:shadow-xl hover:-translate-y-2
                  transition duration-300
                "
              >
                {/* 🖼️ IMAGE */}
                <div className="relative w-full h-44 bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* 🧾 CONTENT */}
                <div className="p-4">
                  <p className="font-semibold text-(--color-text-light)">
                    {project.title}
                  </p>

                  <p className="text-sm text-(--color-muted-light) mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}

        </div>

        {/* 🚀 CTA */}
        <div className="mt-16 text-center">
          <p className="text-(--color-muted-light)">
            Descubre cómo aplicamos tecnología para impulsar negocios reales.
          </p>

          <Link
            href="/portafolio"
            className="
              inline-block mt-5 px-7 py-3 rounded-full
              bg-accent text-black font-medium text-sm
              hover:opacity-90 transition
            "
          >
            Explorar portafolio completo
          </Link>
        </div>

      </div>
    </Section>
  );
}
