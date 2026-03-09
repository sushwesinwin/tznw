"use client";

import { navLinks } from "../lib/constants";

export default function Navbar() {
  return (
    <>
      {/* ─── Desktop full-width bar ─── */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 py-4 px-10 justify-between items-center glass border-b border-white/5">
        <div className="text-white text-lg font-bold tracking-[0.2em]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
          TZNW
        </div>
        <div className="flex gap-10 text-[11px] font-semibold tracking-[0.25em] uppercase items-center" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-gold transition-all duration-300 last:text-gold last:hover:text-gold-light"
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
