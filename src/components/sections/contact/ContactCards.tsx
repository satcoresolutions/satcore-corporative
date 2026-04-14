import Image from "next/image";
import CalendarCard from "./CalendarCard";

export default function ContactCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      {/* WHATSAPP */}
      <div className="card-contact">
        <div className="flex items-center gap-3 mb-3">
          <Image src="/icons/whatsapp.png" alt="" width={24} height={24} />
          <h3 className="font-semibold">WhatsApp</h3>
        </div>

        <p className="text-sm text-muted mb-3">
          +57 302 201 6072
        </p>

        <a
          href="https://wa.me/573022016072"
          target="_blank"
          className="text-accent text-sm font-medium"
        >
          Chat con nosotros →
        </a>
      </div>

      {/* CALENDARIO (COMPONENTE AISLADO) */}
      <CalendarCard />

    </div>
  );
}