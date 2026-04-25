"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "35 Mannion Way, Kardinya WA 6163",
    href: "https://maps.google.com/?q=35+Mannion+Way+Kardinya+WA+6163",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "(08) 9331 8998",
    href: "tel:0893318998",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@primopools.com.au",
    href: "mailto:hello@primopools.com.au",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 8am - 5pm",
    href: null,
  },
];

const services = [
  "New Pool Construction",
  "Pool Renovation",
  "Water Features",
  "Pool Landscaping",
  "Maintenance",
  "Other",
];

const timelines = [
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "6+ months",
  "Just exploring",
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-beige">
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
            Contact Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Start Your <span className="text-forest">Journey</span>
          </h2>
          <p className="text-stone text-lg">
            Ready to transform your backyard? Get in touch for a free
            consultation and let&apos;s discuss your dream pool.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto bg-forest/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-forest" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                  Thank You!
                </h3>
                <p className="text-stone mb-6">
                  We&apos;ve received your inquiry and will be in touch within
                  24 hours to discuss your project.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-forest font-medium hover:text-sage transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 md:p-12 shadow-lg space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all"
                      placeholder="(04) 0000 0000"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all resize-none"
                    placeholder="Describe your vision, property size, any specific features you'd like..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-forest hover:bg-sage text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="bg-card rounded-xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-forest/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-forest" />
                  </div>
                  <p className="text-sm text-stone mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-medium text-charcoal hover:text-forest transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-charcoal">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-sm aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.7!2d115.8!3d-32.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAyJzMwLjAiUyAxMTXCsDUxJzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Primo Pools Location"
              />
            </div>

            {/* CTA */}
            <div className="bg-forest rounded-2xl p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Prefer to Chat?
              </h3>
              <p className="text-white/80 mb-6">
                Give us a call and speak directly with one of our pool
                specialists.
              </p>
              <a
                href="tel:0893318998"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                (08) 9331 8998
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
