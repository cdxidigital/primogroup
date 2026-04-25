"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Family-owned business since 2003",
  "Award-winning designs & craftsmanship",
  "Premium materials & equipment only",
  "Fully licensed & insured",
  "Comprehensive warranties included",
];

export function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="section-padding bg-cream">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2940&auto=format&fit=crop"
                alt="Luxury pool construction by Primo Pools"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-forest text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold font-serif">20+</p>
              <p className="text-sm text-white/80">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Crafting Dreams in{" "}
              <span className="text-forest">Western Australia</span>
            </h2>
            <p className="text-stone text-lg mb-6 leading-relaxed">
              For over two decades, Primo Pools has been the trusted choice for
              discerning Perth homeowners seeking exceptional pool experiences.
              Our passion for perfection and commitment to quality has earned us
              a reputation as Western Australia&apos;s premier luxury pool
              builders.
            </p>
            <p className="text-stone text-lg mb-8 leading-relaxed">
              We believe every pool should be a masterpiece, reflecting your
              unique lifestyle and enhancing your outdoor living space. From
              initial consultation to final handover, our dedicated team ensures
              an experience as exceptional as the pools we create.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-forest flex-shrink-0" />
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                const element = document.querySelector("#process");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-forest hover:bg-sage text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Learn Our Process
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
