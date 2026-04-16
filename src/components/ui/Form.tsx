"use client";

import { useState } from "react";
import { ZodSchema } from "zod";

/* 🧠 TYPES */
type FormData = Record<string, string>;

interface Field {
  name: string;
  label: string;
  type?: "text" | "email" | "password" | "textarea";
  placeholder?: string;
  required?: boolean;
}

interface UniversalFormProps {
  title?: string;
  description?: string;
  fields: Field[];
  schema: ZodSchema<FormData>;
  onSubmit: (data: FormData) => void;
  submitText?: string;
}

export default function UniversalForm({
  title,
  description,
  fields,
  schema,
  onSubmit,
  submitText = "Enviar",
}: UniversalFormProps) {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormData>({});

  /* ✍️ HANDLE CHANGE */
  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // limpiar error al escribir
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* 🚀 HANDLE SUBMIT */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormData = {};

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0];

        if (typeof fieldName === "string") {
          fieldErrors[fieldName] = issue.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    onSubmit(result.data);
  };

  return (
    <div className="card w-full max-w-xl mx-auto">
      {/* 🧠 HEADER */}
      {title && (
        <h2 className="text-2xl font-bold mb-2">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-muted mb-6">
          {description}
        </p>
      )}

      {/* 📝 FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1">

            <label className="text-sm font-medium">
              {field.label}
            </label>

            {field.type === "textarea" ? (
              <textarea
                className={`input ${errors[field.name] ? "border-red-500" : ""}`}
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) =>
                  handleChange(field.name, e.target.value)
                }
              />
            ) : (
              <input
                type={field.type || "text"}
                className={`input ${errors[field.name] ? "border-red-500" : ""}`}
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) =>
                  handleChange(field.name, e.target.value)
                }
              />
            )}

            {/* ❌ ERROR */}
            {errors[field.name] && (
              <span className="text-red-400 text-xs">
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}

        {/* 🔘 BUTTON */}
        <button type="submit" className="btn-primary w-full">
          {submitText}
        </button>
      </form>
    </div>
  );
}
