import {
  Lightbulb,
  Wrench,
  Cog,
  Target,
} from "lucide-react";

const features = [
  {
    title: "Tecnología accesible",
    icon: Lightbulb,
  },
  {
    title: "Soluciones a medida",
    icon: Wrench,
  },
  {
    title: "Automatización real",
    icon: Cog,
  },
  {
    title: "Enfoque en resultados",
    icon: Target,
  },
];

export default function WhySatCore() {
  return (
    <div className="h-full flex flex-col justify-center">

      {/* 🔥 TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        ¿Por qué SatCore?
      </h2>

      {/* 🧩 LIST */}
      <div className="space-y-6">

        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group flex items-center gap-4 transition"
            >

              {/* 🔹 ICON CONTAINER */}
              <div
                className="
                  flex items-center justify-center
                  w-11 h-11 rounded-xl
                  bg-white/5 border border-white/10
                  group-hover:bg-accent/10
                  group-hover:border-accent/30
                  transition
                "
              >
                <Icon
                  className="
                    w-5 h-5
                    text-gray-300
                    group-hover:text-accent
                    transition
                  "
                />
              </div>

              {/* 🔹 TEXT */}
              <p
                className="
                  text-base md:text-lg font-medium
                  text-gray-300
                  group-hover:text-white
                  transition
                "
              >
                {item.title}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
}
