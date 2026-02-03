"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-brabus-dark scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-accent font-medium tracking-wider uppercase text-sm mb-4">
            Our Story
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Born from a vision of excellence
          </h2>
          <p className="text-lg text-chrome-muted leading-relaxed">
            MEVONE delivers data-driven analysis on brands, marketing, and
            growth. We help businesses understand what makes brands succeed—from
            positioning and identity to acquisition, retention, and scaling. Our
            insights combine rigorous analytics with strategic thinking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
