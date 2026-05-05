import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/573022016072?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20SatCore%20Solutions"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        shadow-lg
        hover:scale-110
        transition-transform duration-300
      "
    >
      <Image
        src="/icons/whatsapp.png"
        alt="WhatsApp SatCore"
        fill
        className="object-contain"
      />
    </Link>
  );
};

export default WhatsAppButton;