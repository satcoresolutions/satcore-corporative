import { LucideIcon } from "lucide-react";

export interface ServiceLevel {
  id: string; // 👈 SKU único para facturación
  name: string;
  level: string;
  complexity: string;
  time: string;
  price: string;
  description: string;

  stack: string[];
  features: string[];
  deliverables: string[];
}

export interface ServiceCategory {
  id: string; 
  category: string;
  subtitle: string;
  icon: LucideIcon;

  levels: ServiceLevel[];
}