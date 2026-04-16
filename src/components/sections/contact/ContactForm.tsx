"use client";

import UniversalForm from "@/components/ui/Form";
import {
  contactSchema,
  ContactFormData,
} from "@/schemas/contact";

export default function ContactForm() {
  return (
    <UniversalForm<ContactFormData>
      title="Contáctanos"
      description="Déjanos tus datos y te respondemos rápido"
      submitText="ENVIAR MENSAJE"
      schema={contactSchema}
      fields={[
        {
          name: "name",
          label: "Nombre",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "tu@email.com",
          required: true,
        },
        {
          name: "message",
          label: "Mensaje",
          type: "textarea",
          placeholder: "Escribe tu mensaje...",
          required: true,
        },
      ]}
      onSubmit={async (data: ContactFormData) => {
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const result = await res.json();

          if (!res.ok) {
            throw new Error(result.error || "Error en servidor");
          }

          alert("✅ Mensaje enviado correctamente");
        } catch (error) {
          console.error(error);
          alert("❌ Error al enviar el mensaje");
        }
      }}
    />
  );
}
