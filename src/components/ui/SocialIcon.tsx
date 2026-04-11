import Image from "next/image";

type SocialType = "instagram" | "tiktok" | "youtube" | "facebook";

interface SocialIconProps {
    type: SocialType;
    href: string;
    size?: "sm" | "md" | "lg";
}

export default function SocialIcon({
    type,
    href,
    size = "md",
}: SocialIconProps) {

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
