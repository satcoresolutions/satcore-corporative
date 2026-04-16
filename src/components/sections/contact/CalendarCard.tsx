"use client";

import Image from "next/image";
import { GOOGLE_CALENDAR_LINK } from "@/lib/calendar";

export default function CalendarCard() {
  return (
    <div className="card-contact">
      <div className="flex items-center gap-3 mb-3">
        <Image src="/icons/site.png" alt="" width={24} height={24} />
        <h3 className="font-semibold">Agendar reunión</h3>
      </div>

      <p className="text-sm text-muted mb-3">
        Reserva tu espacio
      </p>

      <button
        id="cta-calendar-main"
        onClick={() => window.open(GOOGLE_CALENDAR_LINK, "_blank")}
        className="btn-primary w-full"
      >
        Agendar reunión
      </button>
    </div>
  );
}