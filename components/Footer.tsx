"use client";

import { navLinks } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="border-gold/20 relative w-full border-t bg-black">
            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:px-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-4 font-serif text-2xl text-white md:text-3xl">Thazin Nwe Win</h3>
                        <p className="mb-6 max-w-md text-sm leading-relaxed text-white/60">
                            Television Presenter, Host, MC & Actress from Yangon, Myanmar. Bringing elegance and
                            professionalism to every stage since 2011.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold mb-4 text-sm font-semibold tracking-wider uppercase">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="hover:text-gold flex items-center gap-2 text-sm text-white/60 transition-colors duration-300"
                                    >
                                        <span className="bg-gold/50 h-1 w-1 rounded-full" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#photoshoot"
                                    className="hover:text-gold flex items-center gap-2 text-sm text-white/60 transition-colors duration-300"
                                >
                                    <span className="bg-gold/50 h-1 w-1 rounded-full" />
                                    Photoshoot
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-gold mb-4 text-sm font-semibold tracking-wider uppercase">Get in Touch</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#bookings"
                                    className="hover:text-gold block text-sm text-white/60 transition-colors duration-300"
                                >
                                    Book an Appearance
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/thazinnwewinofficial"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gold block text-sm text-white/60 transition-colors duration-300"
                                >
                                    Message on Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/thazin_nwe_win"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gold block text-sm text-white/60 transition-colors duration-300"
                                >
                                    DM on Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-6 md:px-12 lg:px-20">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-center text-xs text-white/40 md:text-left md:text-sm">
                            © {new Date().getFullYear()} Thazin Nwe Win. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a
                                href="https://en.wikipedia.org/wiki/Thazin_Nwe_Win"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gold text-xs text-white/40 transition-colors duration-300 md:text-sm"
                            >
                                Wikipedia
                            </a>
                            <span className="text-white/20">•</span>
                            <p className="text-xs text-white/40 md:text-sm">Made with ❤️ in Myanmar</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative gradient at bottom */}
            <div className="via-gold/30 absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent" />
        </footer>
    );
}
