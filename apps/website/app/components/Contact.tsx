"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-brabus-black border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-accent font-medium tracking-wider uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Start Your Journey
          </h2>
          <p className="text-lg text-chrome-muted mb-10">
            Ready to experience MEVONE? Connect with us.
          </p>
          <motion.a
            href="mailto:contact@mevone.com"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-medium bg-gold-accent text-brabus-black rounded-full hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_30px_rgba(201,169,98,0.4)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
