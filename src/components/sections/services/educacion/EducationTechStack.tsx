import Image from "next/image";
import Section from "@/components/ui/universalSection";

const stacks = [
    // DESARROLLO
    { name: "Next.js", icon: "/icons/stack/next-js.webp" },
    { name: "React", icon: "/icons/stack/React.webp" },
    { name: "TypeScript", icon: "/icons/stack/typescript.webp" },
    { name: "Angular", icon: "/icons/stack/angular.webp" },

    // BACKEND
    { name: "Node.js", icon: "/icons/stack/node-js.webp" },
    { name: "Express", icon: "/icons/stack/express.webp" },

    // DATA / IA
    { name: "Python", icon: "/icons/stack/python.webp" },
    { name: "TensorFlow", icon: "/icons/stack/tensorflow.webp" },

    // BASES DE DATOS
    { name: "PostgreSQL", icon: "/icons/stack/postgresql.webp" },
    { name: "MongoDB", icon: "/icons/stack/mongodb.webp" },

    // CLOUD / DEVOPS
    { name: "AWS", icon: "/icons/stack/aws.webp" },
    { name: "Docker", icon: "/icons/stack/Docker.webp" },

    // HERRAMIENTAS
    { name: "Git", icon: "/icons/stack/git.webp" },
    { name: "GitHub", icon: "/icons/stack/github.webp" },
];

export default function EducationTechStack() {
    const looped = [...stacks, ...stacks];

    return (
        <Section variant="dark" paddingY="md">

            {/* 🔥 TITLE */}
            <div className="text-center mb-14">
                <h2 className="text-4xl font-bold mb-3">
                    Tecnologías que aprenderás
                </h2>

                <p className="text-white/60">
                    Herramientas reales utilizadas en la industria tecnológica
                </p>
            </div>

            {/* 🚀 MARQUEE */}
            <div className="relative overflow-hidden marquee-fade">

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

        </Section>
    );
}
