"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Waves,
  RefreshCcw,
  Droplets,
  TreePine,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "New Pool Construction",
    description:
      "Custom-designed luxury pools built to the highest standards. From infinity edges to natural lagoon styles, we bring your vision to life.",
    features: ["Custom designs", "Premium finishes", "Smart automation"],
  },
  {
    icon: RefreshCcw,
    title: "Pool Renovations",
    description:
      "Transform your existing pool into a modern masterpiece. Complete makeovers including tiling, coping, equipment upgrades, and feature additions.",
    features: ["Complete makeovers", "Surface refinishing", "Equipment upgrades"],
  },
  {
    icon: Droplets,
    title: "Water Features",
    description:
      "Stunning water features that elevate your pool experience. Cascades, fountains, bubbling spas, and rain curtains create ambiance and tranquility.",
    features: ["Cascading waterfalls", "Spillover spas", "Fountain systems"],
  },
  {
    icon: TreePine,
    title: "Pool Landscaping",
    description:
      "Complete outdoor living solutions that seamlessly integrate your pool with surrounding gardens, patios, and entertainment areas.",
    features: ["Garden integration", "Outdoor kitchens", "Lighting design"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description:
      "Professional maintenance services to keep your pool pristine. From routine cleaning to equipment repairs, we keep your oasis perfect.",
    features: ["Regular servicing", "Equipment repair", "Water chemistry"],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-cream">
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
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Complete Pool <span className="text-forest">Solutions</span>
          </h2>
          <p className="text-stone text-lg">
            From concept to completion, we offer comprehensive services for
            every aspect of your pool project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-forest/10 group-hover:bg-forest flex items-center justify-center mb-6 transition-colors">
                <service.icon className="w-7 h-7 text-forest group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-stone text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-charcoal"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 text-forest font-medium text-sm group-hover:text-sage transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
