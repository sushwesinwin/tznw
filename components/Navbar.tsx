"use client";

import { navLinks } from "../lib/constants";

export default function Navbar() {
  return (
    <>
      {/* ─── Desktop full-width bar ─── */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 py-3 px-10 justify-between items-center glass">
        <div className="text-gold font-serif text-2xl font-bold tracking-widest">
          TZNW
        </div>
        <div className="flex gap-8 text-sm font-medium tracking-widest uppercase items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-gold transition-colors last:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ─── Mobile floating pill — bottom center, icons only ─── */}
      <nav className="md:hidden fixed bottom-6 inset-x-0 z-50 flex justify-center">
        <div className="flex items-center gap-1 px-3 py-2 rounded-full glass border border-white/10 shadow-2xl shadow-black/60 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              className="w-11 h-11 flex items-center justify-center rounded-full text-white/60 hover:text-gold hover:bg-white/5 transition-all duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
