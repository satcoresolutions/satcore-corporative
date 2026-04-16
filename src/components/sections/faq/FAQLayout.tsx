"use client";

import { useState } from "react";
import Section from "@/components/ui/universalSection";
import { faqData } from "@/data/faq";
import ServiceCard from "@/components/ui/ServiceCard";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQLayout() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index: number) => {
    setActiveIndex(index);

    const el = document.getElementById("faq-content");

    if (el) {
      const yOffset = -100; // 🔥 ajusta según tu header
      const y =
        el.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section variant="white" paddingY="lg">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* 🟦 SIDEBAR */}
        <motion.div
          className="md:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="sticky top-24 space-y-2">
            {faqData.map((category, i) => (
              <button
                key={i}
                onClick={() => handleChange(i)}
                className={`
                  w-full text-left px-4 py-3 rounded-xl text-sm transition
                  ${activeIndex === i
                    ? "bg-accent text-black font-semibold shadow-md"
                    : "text-(--color-muted-light) hover:bg-(--color-surface-light)"
                  }
                `}
              >
                {category.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 🟩 CONTENT */}
        <div id="faq-content" className="md:col-span-3">

          {/* TITLE */}
          <motion.h2
            key={activeIndex} // 🔥 importante para animar cambio
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-(--color-text-light) mb-6"
          >
            {faqData[activeIndex].title}
          </motion.h2>

          {/* GRID */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex} // 🔥 anima cambio de categoría
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {faqData[activeIndex].items.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.05, // 🔥 stagger
                  }}
                >
                  <ServiceCard
                    title={faq.question}
                    variant="light"
                    size="md"
                  >
                    <p className="text-sm leading-relaxed text-(--color-muted-light)">
                      {faq.answer}
                    </p>
                  </ServiceCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </Section>
  );
}
