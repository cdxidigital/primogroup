"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James & Sarah Mitchell",
    location: "Dalkeith, WA",
    rating: 5,
    quote:
      "Primo Pools transformed our backyard into an absolute paradise. The attention to detail and quality of workmanship exceeded our expectations. Our infinity pool is the centerpiece of our home.",
    avatar: "JM",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Cottesloe, WA",
    rating: 5,
    quote:
      "From the initial consultation to the final handover, the team was professional, communicative, and passionate about their craft. Our modern lap pool is stunning and perfect for daily exercise.",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Rebecca & David Thompson",
    location: "Mosman Park, WA",
    rating: 5,
    quote:
      "We wanted a natural lagoon-style pool that blended with our established gardens. Primo Pools delivered beyond our wildest dreams. It truly feels like a private resort.",
    avatar: "RT",
  },
  {
    id: 4,
    name: "Andrew Williams",
    location: "Peppermint Grove, WA",
    rating: 5,
    quote:
      "The team guided us through every decision, offering expert advice while respecting our vision. The quality of materials and construction is evident in every detail. Highly recommend!",
    avatar: "AW",
  },
  {
    id: 5,
    name: "Emma & Tom Parker",
    location: "South Perth, WA",
    rating: 5,
    quote:
      "Best investment we have ever made for our family. The kids love it, and we spend every weekend entertaining by the pool. The outdoor kitchen integration is fantastic.",
    avatar: "EP",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-beige">
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
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            What Our <span className="text-forest">Clients Say</span>
          </h2>
          <p className="text-stone text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our valued
            clients have to say about their Primo Pools experience.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-charcoal" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-gold text-gold"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-8">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-forest flex items-center justify-center text-white font-bold text-lg">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <p className="font-semibold text-charcoal">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-stone text-sm">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-forest hover:bg-sage text-white flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-gold"
                      : "bg-stone/30 hover:bg-stone/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-forest hover:bg-sage text-white flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
