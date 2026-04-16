import { z } from "zod";

/* 📩 CONTACT FORM SCHEMA */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),

  email: z
    .string()
    .email("Correo electrónico inválido"),

  phone: z
    .string()
    .min(7, "Número de teléfono inválido")
    .max(20, "Número de teléfono demasiado largo")
    .optional()
    .or(z.literal("")), // permite vacío

  company: z
    .string()
    .max(100, "Nombre de empresa demasiado largo")
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje es demasiado largo"),
});

/* 🧠 TYPE INFERIDO (TypeScript automático) */
export type ContactFormData = z.infer<typeof contactSchema>;
