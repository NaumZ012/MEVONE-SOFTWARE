"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Precision Engineering",
    subtitle: "Crafted for excellence",
    description:
      "Every detail designed with purpose. Performance that speaks for itself.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    dark: true,
  },
  {
    id: 2,
    title: "Sleek Design",
    subtitle: "Minimalist aesthetic",
    description:
      "Clean lines meet premium materials. A statement in modern automotive design.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop",
    dark: false,
  },
  {
    id: 3,
    title: "Performance First",
    subtitle: "Uncompromising power",
    description:
      "Engineered for those who demand the extraordinary. Pure driving experience.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
    dark: true,
  },
];

export default function ProductShowcase() {
  return (
    <section id="product" className="scroll-mt-20">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className={`min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 px-4 sm:px-6 lg:px-8 py-24 ${
            product.dark ? "bg-brabus-black" : "bg-brabus-dark"
          } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Image */}
          <motion.div
            className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
          >
            <Image
              src={product.image}
              alt={product.title}
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
              {product.subtitle}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              {product.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-chrome-muted leading-relaxed"
            >
              {product.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
