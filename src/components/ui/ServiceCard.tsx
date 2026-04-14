import { ReactNode } from "react";
import Link from "next/link";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { LucideIcon } from "lucide-react";

/* 🧠 TYPES */
type Variant = "light" | "dark" | "info" | "minimal";
type Size = "sm" | "md" | "lg";

/* 🎨 ICON VARIANTS */
type IconVariant =
  | "default"
  | "flatBlue"
  | "circleGreen"
  | "circleBlue";

/* 🧩 PROPS */
interface ServiceCardProps {
  title: string;
  subtitle?: string;
  type?: "software" | "educacion" | "ciberseguridad" | "ia" | "branding";
  icon?: LucideIcon;
  iconVariant?: IconVariant; 
  variant?: Variant;
  size?: Size;
  active?: boolean;
  className?: string;
  href?: string;
  ctaLabel?: string;
  children?: ReactNode;
}

/* 🚀 COMPONENT */
export default function ServiceCard({
  title,
  subtitle,
  type,
  icon: Icon,
  iconVariant = "default", 
  variant = "light",
  size = "md",
  active = true,
  className,
  href,
  ctaLabel,
  children,
}: ServiceCardProps) {
  if (!active) return null;

  /* 🎨 VARIANTS (CARD) */
  const variantStyles = {
    light: `
    bg-[color:var(--color-bg-light)]
    border border-[color:var(--color-border)]
    text-[color:var(--color-primary-dark)]
    hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]
    hover:-translate-y-2 hover:shadow-lg
  `,

    dark: `
    bg-[color:var(--color-surface-dark)]
    border border-[color:var(--color-border)]
    text-[color:var(--color-text-dark)]
    hover:shadow-[0_0_25px_rgba(27,255,60,0.12)]
    hover:-translate-y-2 hover:shadow-lg
  `,

    info: `
    bg-[color:var(--color-bg-light)]
    border border-[color:var(--color-primary)]/20
    text-[color:var(--color-primary-dark)]
    hover:shadow-[0_0_30px_rgba(19,42,142,0.12)]
    hover:-translate-y-2 hover:shadow-lg
  `,

    minimal: `
    bg-transparent
    border border-[color:var(--color-border)]
    text-[color:var(--color-text-dark)]
    hover:bg-white/5
  `,
  };

  /* 📏 SIZES */
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

  const subtitleColor =
    variant === "dark" || variant === "minimal"
      ? "text-gray-400"
      : "text-gray-500";

  /* 🎨 ICON VARIANTS SYSTEM */
  const iconVariants: Record<
    IconVariant,
    { wrapper: string; icon: string }
  > = {
    /* 🌿 DEFAULT (neon verde actual) */
    default: {
      wrapper: "",
      icon: "text-[color:var(--color-accent)]",
    },

    /* 🔵 FLAT BLUE */
    flatBlue: {
      wrapper: "",
      icon: "text-[color:var(--color-primary)]",
    },

    /* 🟢 CIRCLE GREEN */
    circleGreen: {
      wrapper:
        "bg-[color:var(--color-accent)] text-white rounded-full p-3 shadow-[0_0_20px_rgba(27,255,60,0.25)]",
      icon: "text-white",
    },

    /* 🔵 CIRCLE BLUE */
    circleBlue: {
      wrapper:
        "bg-[color:var(--color-primary)] text-white rounded-full p-3 shadow-[0_0_20px_rgba(19,42,142,0.25)]",
      icon: "text-white",
    },
  };

  const iconStyle = iconVariants[iconVariant];

  /* 🧱 CARD CONTENT */
  const CardContent = (
    <div
      className={`
        group relative rounded-xl transition-all duration-300
        text-center overflow-hidden
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {/* 🧠 BACKGROUND */}
      {variant === "light" && (
        <div className="absolute inset-0 bg-[url('/img/cards/card_white.png')] bg-center bg-cover opacity-20 pointer-events-none" />
      )}

      {variant === "dark" && (
        <div className="absolute inset-0 bg-[url('/img/cards/card_black.png')] bg-center bg-cover opacity-20 pointer-events-none" />
      )}

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* ICON */}
        <div className="mb-4 flex justify-center">
          {Icon ? (
            <div
              className={`${iconStyle.wrapper} flex items-center justify-center transition group-hover:scale-110`}
            >
              <Icon
                size={lucideSize[size]}
                className={iconStyle.icon}
              />
            </div>
          ) : (
            type && (
              <ServiceIcon
                type={type}
                usage={iconSize[size]}
                className="transition group-hover:scale-110"
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

        {/* CONTENT EXTRA */}
        {children && (
          <div className="mt-4 text-left">
            {children}
          </div>
        )}

        {/* CTA */}
        {href && (
          <div className="mt-5">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80 transition">
              {ctaLabel || "Ver servicio"}
              <span className="text-lg">→</span>
            </span>
          </div>
        )}

      </div>
    </div>
  );

  /* 🔗 LINK WRAPPER */
  return href ? (
    <Link href={href} className="block">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}