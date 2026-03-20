"use client";

import { navLinks } from "../lib/constants";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            {/* ─── Desktop full-width bar ─── */}
            <nav className="glass fixed top-0 left-0 z-50 hidden w-full items-center justify-between border-b border-white/5 px-10 py-4 md:flex">
                <Link
                    href="/"
                    className="hover:text-gold text-lg font-bold tracking-[0.2em] text-white transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                    TZNW
                </Link>
                <div
                    className="flex items-center gap-10 text-[11px] font-semibold tracking-[0.25em] uppercase"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="hover:text-gold last:text-gold last:hover:text-gold-light text-white/60 transition-all duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* ─── Mobile floating pill — bottom center, icons only ─── */}
            <nav className="fixed inset-x-0 bottom-6 z-50 flex justify-center md:hidden">
                <div className="glass flex items-center gap-1 rounded-full border border-white/10 px-3 py-2 shadow-2xl shadow-black/60 backdrop-blur-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            aria-label={link.label}
                            title={link.label}
                            className="hover:text-gold flex h-11 w-11 items-center justify-center rounded-full text-white/60 transition-all duration-200 hover:bg-white/5"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
}
