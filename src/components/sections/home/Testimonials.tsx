import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Excelente servicio, optimizaron todos nuestros procesos.",
  },
  {
    text: "Automatizamos ventas y mejoramos resultados en semanas.",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-white text-[#0A2540]">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Clientes que confían en nosotros
        </h2>

        {/* LIST */}
        <div className="space-y-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                flex items-start gap-4
                p-6 rounded-xl
                border border-gray-200
                bg-white
                hover:shadow-lg
                hover:-translate-y-1
                transition
              "
            >
              {/* ICON */}
              <div className="
                w-10 h-10 rounded-full
                bg-gray-100
                flex items-center justify-center
              ">
                <Quote className="w-5 h-5 text-gray-600" />
              </div>

              {/* TEXT */}
              <p className="text-gray-600 italic leading-relaxed">
                &ldquo;{item.text}&rdquo;
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
