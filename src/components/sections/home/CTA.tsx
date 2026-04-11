export default function CTA() {
  return (
    <section className="section bg-background text-foreground relative overflow-hidden">

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-150 h-75 bg-accent/20 blur-[120px] rounded-full mx-auto" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Construyamos tu sistema
        </h2>

        {/* BUTTON */}
        <button className="btn-primary">
          Agendar asesoría
        </button>

      </div>

    </section>
  );
}
