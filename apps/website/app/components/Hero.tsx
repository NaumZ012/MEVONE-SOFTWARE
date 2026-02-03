"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop"
          alt="Premium automotive - moody lighting"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brabus-black/70 via-brabus-black/50 to-brabus-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
          >
            MEVONE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="text-xl sm:text-2xl md:text-3xl text-chrome-muted max-w-2xl mx-auto font-light"
          >
            Performance Redefined
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="text-base sm:text-lg text-chrome-muted/80 max-w-xl mx-auto"
          >
            Dark luxury meets minimalist design. Experience the future of
            automotive excellence.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.65, 0, 0.35, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#product"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-gold-accent text-brabus-black rounded-full hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_30px_rgba(201,169,98,0.4)] transition-all duration-300"
          >
            Explore Product
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-chrome-muted/50 text-white rounded-full hover:border-gold-accent hover:text-gold-accent transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-chrome-muted/50 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-gold-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
