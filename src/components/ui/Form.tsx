"use client";

import { useState } from "react";

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
  onSubmit: (data: Record<string, string>) => void;
  submitText?: string;
}

export default function UniversalForm({
  title,
  description,
  fields,
  onSubmit,
  submitText = "Enviar",
}: UniversalFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="card w-full max-w-xl mx-auto">
      {title && (
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
      )}

      {description && (
        <p className="text-muted mb-6">{description}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              {field.label}
            </label>

            {field.type === "textarea" ? (
              <textarea
                className="w-full rounded-md px-3 py-2 bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) =>
                  handleChange(field.name, e.target.value)
                }
              />
            ) : (
              <input
                type={field.type || "text"}
                className="input"
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) =>
                  handleChange(field.name, e.target.value)
                }
              />
            )}
          </div>
        ))}

        <button type="submit" className="btn-primary w-full">
          {submitText}
        </button>
      </form>
    </div>
  );
}