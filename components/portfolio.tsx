"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Infinity Edge Paradise",
    location: "Dalkeith, WA",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop",
    category: "Infinity Pool",
  },
  {
    id: 2,
    title: "Resort-Style Retreat",
    location: "Peppermint Grove, WA",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop",
    category: "Freeform Pool",
  },
  {
    id: 3,
    title: "Modern Minimalist",
    location: "Cottesloe, WA",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    category: "Lap Pool",
  },
  {
    id: 4,
    title: "Natural Lagoon Escape",
    location: "Mosman Park, WA",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2940&auto=format&fit=crop",
    category: "Lagoon Style",
  },
  {
    id: 5,
    title: "Waterfront Elegance",
    location: "South Perth, WA",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2940&auto=format&fit=crop",
    category: "Infinity Pool",
  },
  {
    id: 6,
    title: "Family Oasis",
    location: "Nedlands, WA",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2940&auto=format&fit=crop",
    category: "Family Pool",
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="portfolio" className="section-padding bg-cream">
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
            Our Portfolio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Featured <span className="text-forest">Projects</span>
          </h2>
          <p className="text-stone text-lg">
            Explore our collection of stunning pools crafted for Perth&apos;s
            most discerning homeowners.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-gold text-charcoal text-xs font-medium rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="flex items-center gap-1 text-white/80 text-sm">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-forest hover:bg-sage text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-5xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-charcoal/50 hover:bg-charcoal rounded-full flex items-center justify-center text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-gold text-charcoal text-xs font-medium rounded-full mb-2">
                {selectedProject.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-1">
                {selectedProject.title}
              </h3>
              <p className="flex items-center gap-1 text-stone">
                <MapPin className="w-4 h-4" />
                {selectedProject.location}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
