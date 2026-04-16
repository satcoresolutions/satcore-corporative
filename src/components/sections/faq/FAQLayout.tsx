"use client";

import { useState } from "react";
import Section from "@/components/ui/universalSection";
import { faqData } from "@/data/faq";
import ServiceCard from "@/components/ui/ServiceCard";

export default function FAQLayout() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index: number) => {
    setActiveIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Section variant="white" paddingY="lg">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* 🟦 SIDEBAR */}
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-2">

            {faqData.map((category, i) => (
              <button
                key={i}
                onClick={() => handleChange(i)}
                className={`
                  w-full text-left px-4 py-3 rounded-xl text-sm transition
                  ${
                    activeIndex === i
                      ? "bg-accent text-black font-semibold shadow-md"
                      : "text-(--color-muted-light) hover:bg-(--color-surface-light)"
                  }
                `}
              >
                {category.title}
              </button>
            ))}

          </div>
        </div>

        {/* 🟩 CONTENT */}
        <div className="md:col-span-3">

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-(--color-text-light) mb-6">
            {faqData[activeIndex].title}
          </h2>

          {/* GRID DE CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">

            {faqData[activeIndex].items.map((faq, i) => (
              <ServiceCard
                key={i}
                title={faq.question}
                variant="light"
                size="md"
              >
                <p className="text-sm leading-relaxed text-(--color-muted-light)">
                  {faq.answer}
                </p>
              </ServiceCard>
            ))}

          </div>

        </div>

      </div>
    </Section>
  );
}
