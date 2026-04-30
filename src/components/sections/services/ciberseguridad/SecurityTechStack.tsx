import Image from "next/image";
import Section from "@/components/ui/universalSection";

const stacks = [
    // PENTESTING
    { name: "Kali Linux", icon: "/icons/stack/kali.webp" },
    { name: "Metasploit", icon: "/icons/stack/metasploit.webp" },
    { name: "Burp Suite", icon: "/icons/stack/burp.webp" },
    { name: "Nmap", icon: "/icons/stack/nmap.webp" },
    { name: "OWASP ZAP", icon: "/icons/stack/zap.webp" },

    // ANALYSIS
    { name: "Wireshark", icon: "/icons/stack/wireshark.webp" },
    { name: "Nessus", icon: "/icons/stack/nessus.webp" },
    { name: "OpenVAS", icon: "/icons/stack/openvas.webp" },

    // CLOUD SECURITY
    { name: "AWS Security", icon: "/icons/stack/aws.webp" },
    { name: "Azure Security", icon: "/icons/stack/azure.webp" },
    { name: "GCP Security", icon: "/icons/stack/gcp.webp" },

    // FORENSICS
    { name: "Autopsy", icon: "/icons/stack/autopsy.webp" },
    { name: "Volatility", icon: "/icons/stack/volatility.webp" },

    // TOOLS
    { name: "Git", icon: "/icons/stack/git.webp" },
    { name: "Docker", icon: "/icons/stack/Docker.webp" },
];

export default function SecurityTechStack() {
    const looped = [...stacks, ...stacks];

    return (
        <Section variant="dark" paddingY="md">

            {/* 🔥 TITLE */}
            <div className="text-center mb-14">
                <h2 className="text-4xl font-bold mb-3">
                    Herramientas y tecnologías de seguridad
                </h2>

                <p className="text-white/60">
                    Stack profesional para auditorías, pentesting y protección avanzada
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
