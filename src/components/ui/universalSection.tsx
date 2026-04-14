import { ReactNode, HTMLAttributes } from "react";

type SectionVariant = "white" | "blue" | "dark";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  paddingY?: "sm" | "md" | "lg";

  overflow?: boolean;
  withGlow?: boolean;
}

export default function Section({
  children,
  variant = "white",
  className = "",
  paddingY = "md",
  overflow = false,
  withGlow = false,
  ...props
}: SectionProps) {

  /* 🎨 BACKGROUNDS */
  const variants = {
    white: `
      bg-[color:var(--color-bg-light)]
      text-[color:var(--color-primary-dark)]
    `,

    blue: `
      bg-[color:var(--color-primary-dark)]
      text-white
    `,

    dark: `
      bg-[color:var(--color-surface-dark)]
      text-white
    `,
  };

  /* 📏 SPACING */
  const padding = {
    sm: "py-12",
    md: "py-20",
    lg: "py-28",
  };

  return (
    <section
      {...props}
      className={`
        w-full
        ${variants[variant]}
        ${padding[paddingY]}

        ${overflow ? "relative overflow-hidden" : ""}

        transition-all duration-300
        ${className}
      `}
    >

      {/* 🌟 GLOW BACKGROUND (CTA STYLE) */}
      {withGlow && (
        <div className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(27,255,60,0.25),transparent_60%)]
          opacity-30
        " />
      )}

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {children}
      </div>

    </section>
  );
}