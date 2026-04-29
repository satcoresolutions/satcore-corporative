import { LucideIcon } from "lucide-react";

export interface ServiceLevel {
  id: string;

  name: string;
  level: string;
  complexity: string;
  time: string;
  price: string;

  description: string;

  // 🔥 NUEVO (CLAVE NEGOCIO)
  target?: string;          // para quién es
  useCases?: string[];      // cuándo usarlo
  includes?: string[];      // qué incluye
  notIncludes?: string[];   // qué NO incluye

  // 💰 MODELO DE VENTA
  pricingType?: "fixed" | "project" | "monthly" | "custom" | "per_person" | "hourly" | "subscription" | "one-time" | "tiered" | "usage-based" | "freemium" | "pay-as-you-go" | "license" | "commission" | "ad-supported" | "donation" | "other" ; 

  // ⚙️ TÉCNICO
  stack: string[];
  features: string[];
  deliverables: string[];

  // 📊 ESCALABILIDAD (futuro paquetes)
  integrations?: string[];
  automationLevel?: "low" | "medium" | "high" | "enterprise"; //

  // 🧾 OPERATIVO
  support?: string;
  sla?: string;
}

export interface ServiceCategory {
  id: string;
  category: string;
  subtitle: string;
  icon: LucideIcon;

  levels: ServiceLevel[];
}
