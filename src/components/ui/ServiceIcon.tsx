import Image from "next/image";

type ServiceType =
  | "software"
  | "educacion"
  | "ciberseguridad"
  | "ia"
  | "branding";

type Usage = "card" | "hero" | "feature" | "icon";

interface ServiceIconProps {
  type: ServiceType;
  usage?: Usage;
  width?: number;
  height?: number;
  className?: string;
}

export default function ServiceIcon({
  type,
  usage = "card",
  width,
  height,
  className,
}: ServiceIconProps) {

  /* 🧠 MAPEO SIMPLE (SIN VARIANTES) */
  const srcMap = {
    software: "/img/services/desarrollo.png",
    educacion: "/img/services/educacion.png",
    ciberseguridad: "/img/services/seguridad.png",
    ia: "/img/services/automatizacion.png",
    branding: "/img/services/marketing.png",
  };

  /* 📏 TAMAÑOS MÁS GRANDES (AJUSTADOS A DISEÑO REAL) */
  const sizeMap = {
    card: { width: 80, height: 80 },     // 🔥 antes 56 → ahora más visual
    hero: { width: 120, height: 120 },
    feature: { width: 100, height: 100 },
    icon: { width: 40, height: 40 },
  };

  const src = srcMap[type];
  const size = sizeMap[usage];

  return (
    <Image
      src={src}
      alt={`Icono de ${type}`}
      width={width || size.width}
      height={height || size.height}
      className={`
        object-contain
        ${className}
      `}
    />
  );
}
