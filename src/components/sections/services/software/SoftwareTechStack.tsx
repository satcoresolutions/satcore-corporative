import Image from "next/image";

const stacks = [
  // FRONTEND
  { name: "Next.js", icon: "/icons/stack/next-js.webp" },
  { name: "React", icon: "/icons/stack/React.webp" },
  { name: "TypeScript", icon: "/icons/stack/typescript.webp" },
  { name: "Tailwind CSS", icon: "/icons/stack/tailwind-css.webp" },
  { name: "Angular", icon: "/icons/stack/angular.webp" },

  // BACKEND
  { name: "Node.js", icon: "/icons/stack/node-js.webp" },
  { name: "Express", icon: "/icons/stack/express.webp" },
  { name: "GraphQL", icon: "/icons/stack/graphql.webp" },

  // DATABASE
  { name: "PostgreSQL", icon: "/icons/stack/postgresql.webp" },
  { name: "MongoDB", icon: "/icons/stack/mongodb.webp" },
  { name: "Redis", icon: "/icons/stack/redis.webp" },
  { name: "Firebase", icon: "/icons/stack/firebase.webp" },

  // INFRA
  { name: "AWS", icon: "/icons/stack/aws.webp" },
  { name: "Vercel", icon: "/icons/stack/vercel.webp" },
  { name: "Docker", icon: "/icons/stack/Docker.webp" },

  // TOOLS
  { name: "Git", icon: "/icons/stack/git.webp" },
  { name: "GitHub", icon: "/icons/stack/github.webp" },
];

export default function SoftwareTechStack() {
  const looped = [...stacks, ...stacks];

  return (
    <section className="py-10 bg-primary-dark text-white overflow-hidden">

      {/* 🔥 TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-3">
          Tecnologías que utilizamos
        </h2>

        <p className="text-white/60">
          Stack moderno para soluciones escalables y seguras
        </p>
      </div>

      {/* 🚀 MARQUEE */}
      <div className="relative overflow-hidden">

        <div className="flex items-center gap-16 w-max animate-scroll">

          {looped.map((tech, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={60}
                height={60}
                className="w-14 h-14 object-contain"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}