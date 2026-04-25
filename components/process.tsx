"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Pencil,
  FileCheck,
  HardHat,
  KeyRound,
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "Consult",
    description:
      "We begin with a free consultation to understand your vision, lifestyle, and budget. Our experts visit your property to assess possibilities and provide initial recommendations.",
  },
  {
    number: 2,
    icon: Pencil,
    title: "Design",
    description:
      "Our design team creates custom 3D renderings and technical drawings, allowing you to visualize your dream pool before construction begins.",
  },
  {
    number: 3,
    icon: FileCheck,
    title: "Engineering",
    description:
      "Detailed engineering plans are prepared and submitted for council approvals. We handle all permits and ensure compliance with local regulations.",
  },
  {
    number: 4,
    icon: HardHat,
    title: "Build",
    description:
      "Expert construction using only premium materials and equipment. Our skilled team brings your design to life with meticulous attention to detail.",
  },
  {
    number: 5,
    icon: KeyRound,
    title: "Handover",
    description:
      "Complete handover with comprehensive training on pool operation, maintenance guidance, and warranty documentation. Your oasis awaits.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-beige">
      <div className="container-max mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Our Process
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Your Journey to the <span className="text-forest">Perfect Pool</span>
          </h2>
          <p className="text-stone text-lg">
            We guide you through every step, ensuring a seamless experience from
            initial concept to the moment you dive in.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step Number Badge */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-forest text-white flex items-center justify-center shadow-lg">
                  <step.icon className="w-7 h-7" />
                </div>

                {/* Step Number */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full bg-gold text-charcoal text-xs font-bold flex items-center justify-center">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-forest rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
            Quality Assurance Guaranteed
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Every Primo Pool comes with comprehensive warranties, ongoing
            support, and our commitment to excellence. We stand behind our work
            with industry-leading guarantees.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gold hover:bg-gold-light text-charcoal px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
