"use client";

import { navLinks, socialLinks } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full overflow-hidden bg-black pt-8 pb-4">
            {/* Top Border with Gradient */}
            <div className="via-gold/30 absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent to-transparent" />

            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                    {/* Brand & Social Section */}
                    <div className="lg:col-span-5">
                        <h3 className="mb-2 font-serif text-3xl tracking-tight text-white md:text-4xl">
                            Thazin Nwe Win
                        </h3>
                        <p className="mb-3 max-w-md text-base leading-relaxed text-zinc-400">
                            Professional Television Presenter, Host, and MC based in Yangon, Myanmar. Bringing elegance,
                            clarity, and professionalism to the screen since 2011.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {socialLinks
                                .filter((social) => social.name !== "Wikipedia")
                                .map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 ${social.hoverClass} hover:border-transparent`}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
                        {/* Explore */}
                        <div>
                            <h4 className="text-gold mb-2 text-[10px] font-bold tracking-[0.3em] uppercase">Explore</h4>
                            <ul className="space-y-1">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
                                        >
                                            {link.label}
                                            <ArrowUpRight className="h-3 w-3 translate-y-0.5 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href="#photoshoot"
                                        className="group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
                                    >
                                        Photoshoot
                                        <ArrowUpRight className="h-3 w-3 translate-y-0.5 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Engagement */}
                        <div>
                            <h4 className="text-gold mb-2 text-[10px] font-bold tracking-[0.3em] uppercase">
                                Engagement
                            </h4>
                            <ul className="space-y-1">
                                <li>
                                    <a
                                        href="#bookings"
                                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                                    >
                                        Book an Appearance
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/terms-and-conditions"
                                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                                    >
                                        Booking Guidelines
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Direct DM */}
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-gold mb-2 text-[10px] font-bold tracking-[0.3em] uppercase">
                                Quick Reach
                            </h4>
                            <div className="space-y-3">
                                <p className="text-xs leading-relaxed text-zinc-500">
                                    Direct inquiries via social media for faster response.
                                </p>
                                <a
                                    href="https://www.facebook.com/thazinnwewinofficial"
                                    className="bg-gold/10 hover:bg-gold text-gold inline-flex h-9 items-center rounded-full px-5 text-xs font-bold transition-all hover:text-black"
                                >
                                    Message Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Huge Signature Typography */}
                <div className="pointer-events-none mt-2 overflow-hidden opacity-[0.03] select-none">
                    <h2 className="font-serif text-[12vw] leading-none font-bold tracking-tighter whitespace-nowrap text-white uppercase">
                        THAZIN NWE WIN • THAZIN NWE WIN • THAZIN NWE WIN
                    </h2>
                </div>

                {/* Bottom Bar */}
                <div className="mt-2 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-2 md:flex-row">
                    <p className="text-xs text-zinc-500">© {currentYear} Thazin Nwe Win. All rights reserved.</p>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                                Available for Bookings
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
