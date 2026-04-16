"use client";

import { useState } from "react";
import { ZodSchema } from "zod";

/* 🧠 GENERIC TYPE */
interface Field<T> {
  name: keyof T;
  label: string;
  type?: "text" | "email" | "password" | "textarea";
  placeholder?: string;
  required?: boolean;
}

interface UniversalFormProps<T> {
  title?: string;
  description?: string;
  fields: Field<T>[];
  schema: ZodSchema<T>;
  onSubmit: (data: T) => void | Promise<void>;
  submitText?: string;
}

export default function UniversalForm<T extends Record<string, unknown>>({
  title,
  description,
  fields,
  schema,
  onSubmit,
  submitText = "Enviar",
}: UniversalFormProps<T>) {
  const [formData, setFormData] = useState<Partial<T>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: keyof T, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name as string]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

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
    await onSubmit(result.data);
  };

  return (
    <div className="card w-full max-w-xl mx-auto">
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      {description && (
        <p className="text-muted mb-6">{description}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={String(field.name)} className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              {field.label}
            </label>

            {field.type === "textarea" ? (
              <textarea
                className={`input ${
                  errors[field.name as string]
                    ? "border-red-500"
                    : ""
                }`}
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) =>
                  handleChange(field.name, e.target.value)
                }
              />
            ) : (
              <input
                type={field.type || "text"}
                className={`input ${
                  errors[field.name as string]
                    ? "border-red-500"
                    : ""
                }`}
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) =>
                  handleChange(field.name, e.target.value)
                }
              />
            )}

            {errors[field.name as string] && (
              <span className="text-red-400 text-xs">
                {errors[field.name as string]}
              </span>
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
