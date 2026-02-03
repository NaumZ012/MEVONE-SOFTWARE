"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brabus-dark relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brabus-black via-brabus-dark to-brabus-black opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-accent/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        className="relative max-w-4xl mx-auto text-center space-y-8"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Ready to Experience MEVONE?
        </h2>
        <p className="text-xl text-chrome-muted max-w-2xl mx-auto">
          Join those who demand the extraordinary. Discover what&apos;s possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-medium bg-gold-accent text-brabus-black rounded-full hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_40px_rgba(201,169,98,0.5)] transition-all duration-300"
          >
            Get Started
          </Link>
          <Link
            href="#product"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-medium border border-chrome-muted/50 text-white rounded-full hover:border-gold-accent hover:text-gold-accent transition-all duration-300"
          >
            View Analysis
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
