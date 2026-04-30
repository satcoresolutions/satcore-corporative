import Image from "next/image";
import Section from "@/components/ui/universalSection";

const stacks = [
    // DISEÑO
    { name: "Figma", icon: "/icons/stack/figma.webp" },
    { name: "Adobe Illustrator", icon: "/icons/stack/illustrator.webp" },
    { name: "Adobe Photoshop", icon: "/icons/stack/photoshop.webp" },

    // CONTENIDO
    { name: "Canva", icon: "/icons/stack/canva.webp" },
    { name: "CapCut", icon: "/icons/stack/capcut.webp" },

    // MARKETING
    { name: "Meta Ads", icon: "/icons/stack/meta-ads.webp" },
    { name: "Google Ads", icon: "/icons/stack/google-ads.webp" },
    { name: "Google Analytics", icon: "/icons/stack/google-analytics.webp" },

    // AUTOMATIZACIÓN
    { name: "HubSpot", icon: "/icons/stack/hubspot.webp" },
    { name: "Mailchimp", icon: "/icons/stack/mailchimp.webp" },

    // GESTIÓN
    { name: "Notion", icon: "/icons/stack/notion.webp" },
    { name: "Trello", icon: "/icons/stack/trello.webp" },
];

export default function MarketingTechStack() {
    const looped = [...stacks, ...stacks];

    return (
        <Section variant="dark" paddingY="md">

            {/* 🔥 TITLE */}
            <div className="text-center mb-14">
                <h2 className="text-4xl font-bold mb-3">
                    Herramientas que utilizamos
                </h2>

                <p className="text-white/60">
                    Tecnologías y plataformas para diseño, contenido y marketing digital
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
