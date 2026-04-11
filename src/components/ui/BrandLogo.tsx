import Image from "next/image";

type LogoType = "logo" | "isotipo" | "logotipo";
type Variant = "normal" | "positivo" | "negativo";
type Usage = "navbar" | "footer" | "hero" | "card" | "icon";

interface BrandLogoProps {
  type?: LogoType;
  variant?: Variant;
  usage?: Usage;
  width?: number;
  height?: number;
  className?: string;
}

export default function BrandLogo({
  type = "logo",
  variant = "normal",
  usage = "navbar",
  width,
  height,
  className,
}: BrandLogoProps) {

  /* 🧠 MAPEO DE IMÁGENES */
  const srcMap = {
    logo: {
      normal: "/logos/01_Logo_Principal.png",
      positivo: "/logos/Logo_Principal_positivo.png",
      negativo: "/logos/Logo_Principal_negativo.png",
    },
    isotipo: {
      normal: "/logos/02_isotipo.png",
      positivo: "/logos/isotipo_positivo.png",
      negativo: "/logos/Isotipo_negativo.png",
    },
    logotipo: {
      normal: "/logos/03_Logotipo.png",
      positivo: "/logos/Logotipo_positivo.png",
      negativo: "/logos/Logotipo_negativo.png",
    },
  };

  /* 📏 TAMAÑOS SEGÚN USO */
  const sizeMap = {
    navbar: { width: 140, height: 40 },
    footer: { width: 160, height: 50 },
    hero: { width: 240, height: 80 },
    card: { width: 60, height: 60 },
    icon: { width: 32, height: 32 },
  };

  const src = srcMap[type][variant];
  const size = sizeMap[usage];

  return (
    <Image
      src={src}
      alt="SatCore Solutions"
      width={width || size.width}
      height={height || size.height}
      className={className}
      priority={usage === "hero"}
    />
  );
}
