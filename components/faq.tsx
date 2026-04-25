"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a pool?",
    answer:
      "A typical luxury pool construction takes between 8-12 weeks from excavation to completion. This timeline can vary based on the complexity of the design, site conditions, council approval processes, and weather conditions. We provide a detailed project timeline during the design phase and keep you informed throughout the process.",
  },
  {
    question: "What is the cost of building a luxury pool?",
    answer:
      "Luxury pool costs vary significantly based on size, design complexity, materials, and features. Our projects typically range from $80,000 to $300,000+. We provide detailed, transparent quotes after the initial consultation and design phase. There are no hidden costs, and we work with you to achieve your vision within your budget.",
  },
  {
    question: "Do you handle council approvals?",
    answer:
      "Yes, we handle all council approvals and permits as part of our comprehensive service. Our team prepares and submits all necessary documentation, engineering drawings, and applications. We have extensive experience working with Perth councils and understand the requirements for pool construction in Western Australia.",
  },
  {
    question: "What warranties do you offer?",
    answer:
      "We stand behind our work with comprehensive warranties: 10 years structural warranty on the pool shell, 5 years on equipment and plumbing, and 2 years on interior finishes. We also offer ongoing maintenance services to keep your pool in perfect condition.",
  },
  {
    question: "Can you renovate my existing pool?",
    answer:
      "Absolutely! Pool renovations are one of our specialties. We can completely transform your existing pool with new interior finishes, updated coping, modern equipment, added water features, and improved landscaping. We assess your current pool structure and provide options to bring it up to modern luxury standards.",
  },
  {
    question: "Do you offer pool maintenance services?",
    answer:
      "Yes, we provide comprehensive maintenance services including regular cleaning, water chemistry balancing, equipment servicing, and seasonal care. We offer weekly, fortnightly, and monthly maintenance packages tailored to your needs. Our technicians are trained on all pool systems and equipment.",
  },
  {
    question: "What payment options are available?",
    answer:
      "We offer flexible payment plans structured around project milestones. A typical payment schedule includes a deposit at contract signing, followed by progress payments at excavation, shell completion, equipment installation, and final handover. We can discuss options that work for your financial situation.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Frequently Asked{" "}
              <span className="text-forest">Questions</span>
            </h2>
            <p className="text-stone text-lg mb-8">
              Have questions about your pool project? We&apos;ve compiled
              answers to the most common queries. If you don&apos;t find what
              you&apos;re looking for, feel free to contact us directly.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-forest hover:bg-sage text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Ask a Question
            </button>
          </motion.div>

          {/* Right Side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border/50 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-charcoal pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-beige flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-forest" />
                    ) : (
                      <Plus className="w-4 h-4 text-forest" />
                    )}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-stone leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
