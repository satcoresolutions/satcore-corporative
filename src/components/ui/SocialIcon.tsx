"use client";

import Image from "next/image";

type SocialType = "instagram" | "tiktok" | "youtube" | "facebook";

interface SocialIconProps {
    type: SocialType;
    href: string;
    size?: "sm" | "md" | "lg";
    section?: string;
}

export default function SocialIcon({
    type,
    href,
    size = "md",
    section,
}: SocialIconProps) {

    const trackSocial = (platform: string, section?: string, url?: string) => {
        if (typeof window === "undefined") return;

        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
            event: "social_click",
            social_platform: platform,
            section: section || "unknown",
            page_path: window.location.pathname,
            link_url: url,
        } as SocialClickEvent);
    };

    const iconMap = {
        instagram: "/icons/instagram.png",
        tiktok: "/icons/tiktok.png",
        youtube: "/icons/youtube.png",
        facebook: "/icons/facebook.png",
    };

    const sizeMap = {
        sm: 20,
        md: 24,
        lg: 32,
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocial(type, section, href)}
            className="group flex items-center justify-center"
        >
            <Image
                src={iconMap[type]}
                alt={`Ir a ${type} de SatCore Solutions`}
                width={sizeMap[size]}
                height={sizeMap[size]}
                className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition"
            />
        </a>
    );
}
