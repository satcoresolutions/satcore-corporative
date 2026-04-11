import ServiceIcon from "@/components/ui/ServiceIcon";
import { LucideIcon } from "lucide-react"; // 👈 IMPORTANTE

type Variant = "default" | "minimal" | "highlight" | "dark";
type Size = "sm" | "md" | "lg";

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  type?: "software" | "educacion" | "ciberseguridad" | "ia" | "branding"; // 👈 opcional ahora
  icon?: LucideIcon; // 👈 soporte Lucide
  variant?: Variant;
  size?: Size;
  active?: boolean;
  className?: string;
}

export default function ServiceCard({
  title,
  subtitle,
  type,
  icon: Icon, // 👈 CAMBIO CLAVE (renombramos)
  variant = "default",
  size = "md",
  active = true,
  className,
}: ServiceCardProps) {
  if (!active) return null;

  /* 🎯 VARIANTES */
  const variantStyles = {
    default: `
      bg-white border border-gray-200 text-[#0A2540]
      hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]
    `,
    minimal: `
      bg-transparent border border-white/10 text-white
      hover:bg-white/5
    `,
    highlight: `
      bg-white border border-accent/30 text-[#0A2540]
      hover:shadow-[0_0_30px_rgba(27,255,60,0.15)]
    `,
    dark: `
      bg-[#111111] border border-white/10 text-white
      hover:shadow-[0_0_25px_rgba(27,255,60,0.12)]
    `,
  };

  /* 📏 TAMAÑOS */
  const sizeStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const iconSize = {
    sm: "icon",
    md: "feature",
    lg: "hero",
  } as const;

  const lucideSize = {
    sm: 28,
    md: 36,
    lg: 48,
  };

  /* 🎨 COLOR TEXTO SUBTITLE */
  const subtitleColor =
    variant === "dark" || variant === "minimal"
      ? "text-gray-400"
      : "text-gray-500";

  return (
    <div
      className={`
        group relative rounded-xl transition-all duration-300
        cursor-pointer text-center overflow-hidden
        hover:-translate-y-2 
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {/* 🧠 BACKGROUND BLANCO */}
      {variant === "default" && (
        <div className="absolute inset-0 bg-[url('/img/cards/card_white.png')] bg-center bg-cover bg-no-repeat opacity-20 pointer-events-none" />
      )}

      {/* 🌙 BACKGROUND DARK */}
      {variant === "dark" && (
        <div className="absolute inset-0 bg-[url('/img/cards/card_black.png')] bg-center bg-cover bg-no-repeat opacity-20 pointer-events-none" />
      )}

      

      {/* 🔹 CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center">

        {/* ICON */}
        <div className="mb-4 flex justify-center">
          {Icon ? (
            <Icon
              size={lucideSize[size]}
              className="
                text-accent
                opacity-90
                group-hover:scale-110
                transition
              "
            />
          ) : (
            type && (
              <ServiceIcon
                type={type}
                usage={iconSize[size]}
                className="
                  opacity-90
                  group-hover:opacity-100
                  group-hover:scale-110
                  transition
                "
              />
            )
          )}
        </div>

        {/* TITLE */}
        <h3 className="text-base md:text-lg font-semibold mb-1">
          {title}
        </h3>

        {/* SUBTITLE */}
        {subtitle && (
          <p className={`text-sm leading-relaxed ${subtitleColor}`}>
            {subtitle}
          </p>
        )}

      </div>
    </div>
  );
}
