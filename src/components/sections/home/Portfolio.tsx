import Image from "next/image";

const projects = [
  {
    title: "Proyecto 1",
    image: "/img/projects/project1.jpg",
  },
  {
    title: "Proyecto 2",
    image: "/img/projects/project2.jpg",
  },
  {
    title: "Proyecto 3",
    image: "/img/projects/project3.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="section bg-white text-[#0A2540]">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Proyectos destacados
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                rounded-xl
                overflow-hidden
                border border-gray-200
                bg-white
                hover:shadow-lg
                hover:-translate-y-2
                transition
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-40 bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* TITLE */}
              <div className="p-4">
                <p className="font-semibold">
                  {project.title}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
