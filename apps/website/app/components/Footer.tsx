"use client";

import Link from "next/link";

const footerLinks = [
  { href: "#product", label: "Analysis" },
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brabus-black border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white hover:text-gold-accent transition-colors"
        >
          MEVONE
        </Link>

        <nav className="flex items-center gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-chrome-muted hover:text-gold-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5">
        <p className="text-sm text-chrome-muted/70 text-center md:text-left">
          &copy; {new Date().getFullYear()} MEVONE Software. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
