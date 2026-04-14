"use client";

import { useState, useEffect } from "react";

/* 🧠 TYPES */
interface FormState {
  name: string;
  email: string;
  message: string;
}

/* 🧩 UI FIELD COMPONENT */
function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-muted">{label}</label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  /* 🔥 AUTO RESET STATUS */
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        card
        p-8 rounded-2xl
        bg-linear-to-br
        from-primary-dark
        via-[#0f172a]
        to-black
        border border-white/10
        shadow-[0_0_40px_rgba(27,255,60,0.08)]
        space-y-5
        max-w-xl mx-auto
      "
    >
      <h2 className="text-2xl font-bold">Contáctanos</h2>
      <p className="text-muted text-sm">
        Déjanos tus datos y te respondemos rápido
      </p>

      <FormField label="Nombre">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="input"
          placeholder="Tu nombre"
          required
        />
      </FormField>

      <FormField label="Email">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="input"
          placeholder="tu@email.com"
          required
        />
      </FormField>

      <FormField label="Mensaje">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="input"
          placeholder="Escribe tu mensaje..."
        />
      </FormField>

      {/* 🔥 BOTÓN */}
      <button
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "ENVIAR MENSAJE"}
      </button>

      {/* 🔥 MENSAJES PRO */}
      {status === "success" && (
        <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm p-3 rounded-md">
          ✅ Mensaje enviado correctamente
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-md">
          ❌ Error al enviar el mensaje. Intenta nuevamente.
        </div>
      )}
    </form>
  );
}