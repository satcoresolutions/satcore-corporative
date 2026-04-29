import Image from "next/image";
import Section from "@/components/ui/universalSection";

const stacks = [
    // IA / MODELOS
    { name: "OpenAI", icon: "/icons/stack/openai.webp" },
    { name: "Claude", icon: "/icons/stack/claude.webp" },
    { name: "Gemini", icon: "/icons/stack/gemini.webp" },

    // AGENTES / IA
    { name: "LangChain", icon: "/icons/stack/langchain.webp" },
    { name: "LlamaIndex", icon: "/icons/stack/llamaindex.webp" },

    // AUTOMATIZACIÓN
    { name: "Python", icon: "/icons/stack/python.webp" },
    { name: "Node.js", icon: "/icons/stack/node-js.webp" },
    { name: "Playwright", icon: "/icons/stack/playwright.webp" },
    { name: "Selenium", icon: "/icons/stack/selenium.webp" },

    // WORKFLOWS
    { name: "n8n", icon: "/icons/stack/n8n.webp" },
    { name: "Make", icon: "/icons/stack/make.webp" },

    // BASES DE DATOS
    { name: "PostgreSQL", icon: "/icons/stack/postgresql.webp" },
    { name: "MongoDB", icon: "/icons/stack/mongodb.webp" },

    // INFRA
    { name: "Docker", icon: "/icons/stack/Docker.webp" },
    { name: "AWS", icon: "/icons/stack/aws.webp" },
    { name: "Vercel", icon: "/icons/stack/vercel.webp" },

    // TOOLS
    { name: "Git", icon: "/icons/stack/git.webp" },
    { name: "GitHub", icon: "/icons/stack/github.webp" },
];

export default function AITechStack() {
    const looped = [...stacks, ...stacks];

    return (
        <Section variant="dark" paddingY="md">

            {/* 🔥 TITLE */}
            <div className="text-center mb-14">
                <h2 className="text-4xl font-bold mb-3">
                    Tecnologías de automatización e IA
                </h2>

                <p className="text-white/60">
                    Herramientas modernas para automatizar procesos y crear agentes inteligentes
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
