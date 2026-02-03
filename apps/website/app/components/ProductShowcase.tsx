"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const analyses = [
  {
    id: 1,
    title: "Brand Strategy",
    subtitle: "Positioning & Identity",
    description:
      "How leading brands define their identity and carve out distinct market positions. Analysis of brand architecture, messaging frameworks, and competitive differentiation.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    dark: true,
  },
  {
    id: 2,
    title: "Marketing Effectiveness",
    subtitle: "Channels & ROI",
    description:
      "Data-driven breakdown of marketing performance across channels. Understanding what drives awareness, conversion, and customer lifetime value in the digital age.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    dark: false,
  },
  {
    id: 3,
    title: "Growth Analytics",
    subtitle: "Scaling & Retention",
    description:
      "How brands achieve sustainable growth through acquisition, activation, retention, and expansion. Metrics, benchmarks, and playbooks from high-growth companies.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    dark: true,
  },
];

export default function ProductShowcase() {
  return (
    <section id="product" className="scroll-mt-20">
      {analyses.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className={`min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 px-4 sm:px-6 lg:px-8 py-24 ${
            item.dark ? "bg-brabus-black" : "bg-brabus-dark"
          } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Image */}
          <motion.div
            className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-all duration-500 group-hover:brightness-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brabus-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Content */}
          <div className="w-full lg:w-1/2 max-w-xl space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gold-accent font-medium tracking-wider uppercase text-sm"
            >
              {item.subtitle}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-chrome-muted leading-relaxed"
            >
              {item.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
