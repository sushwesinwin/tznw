"use client";

import Image from "next/image";
import { useState } from "react";
import AnimatedContent from "../AnimatedContent";
import BlurText from "../BlurText";
import { stats } from "@/lib/constants";


export default function About() {
    const [imgError, setImgError] = useState(false);
    return (
        <section
            id="about"
            className="relative w-full py-24 md:py-36 overflow-hidden font-sans">
            {/* Subtle top divider line */}
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

            {/* Large Background Watermark — Compact scale */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 z-0 opacity-[0.03] pointer-events-none select-none hidden lg:block overflow-hidden w-full">
                <p className="font-serif uppercase text-white font-bold tracking-[0.2em] leading-none whitespace-nowrap"
                    style={{ fontSize: '12vw', transform: 'translateX(-2%)' }}>
                    EXPERIENCE
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-[1fr_0.8fr] gap-10 md:gap-16 lg:gap-24 items-center relative z-10">

                {/* ── Left: Text Content ── */}
                <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">
                    {/* Heading Group */}
                    <div className="relative">


                        <BlurText
                            text="HELLO, I'M"
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className="text-gold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-2 md:mb-4 font-sans font-semibold"
                        />
                        <BlurText
                            text="THAZIN NWE WIN"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-serif mb-2"
                        />
                        <div className="h-px w-16 bg-gold/40 mt-4 hidden md:block" />
                    </div>

                    {/* Bio with refined typography */}
                    <AnimatedContent direction="vertical" distance={20} delay={0.3}>
                        <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed max-w-xl font-light">
                            <p>
                                I'm a television presenter, host, MC, and actress from Yangon, Myanmar.
                                Since 2011, I've been doing what I love — showing up on screen and on stage,
                                connecting with people, and making every moment count.
                            </p>
                            <p>
                                You might know me from <span className="text-white font-medium">Khit Thit Pyo May</span>,
                                <span className="text-white font-medium"> MasterChef Myanmar</span>, or the
                                <span className="text-white font-medium"> Myanmar Academy Awards</span>.
                                Whether on camera or stage, modeling or acting — I wear many hats,
                                but at heart, I'm a presenter who loves every second of it.
                            </p>
                        </div>
                    </AnimatedContent>

                    {/* Stats row — Compact Alignment */}
                    <AnimatedContent direction="vertical" distance={20} delay={0.5}>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-2">
                            {stats.map((s) => (
                                <div key={s.label} className="flex flex-col gap-1 group">
                                    <span className="text-gold font-serif text-2xl md:text-3xl font-bold transition-transform duration-300 origin-left" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                                        {s.value}
                                    </span>
                                    <span className="text-white/40 text-[9px] uppercase tracking-[0.2em] leading-tight">
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </AnimatedContent>

                    {/* CTA Section */}
                    <AnimatedContent direction="vertical" distance={10} delay={0.7}>
                        <div className="pt-4">
                            <a
                                href="#bookings"
                                className="inline-flex items-center gap-4 text-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase group w-fit hover:text-white transition-colors duration-300"
                            >
                                Book an Appearance
                                <span className="block w-10 h-px bg-gold group-hover:w-16 group-hover:bg-white transition-all duration-500" />
                            </a>
                        </div>
                    </AnimatedContent>
                </div>

                {/* ── Right: Photo ── */}
                <AnimatedContent direction="vertical" distance={40} scale={0.97} duration={1} delay={0.2} className="relative flex justify-center md:justify-end order-1 md:order-2">
                    {/* Decorative Background Elements */}
                    <div className="absolute -inset-4 md:-inset-10 border border-gold/10 rounded-full scale-105 pointer-events-none z-0" />


                    {/* Glowing Aura behind photo */}
                    <div
                        className="absolute inset-0 md:-inset-8 rounded-full opacity-15 pointer-events-none blur-2xl"
                        style={{
                            background:
                                "radial-gradient(circle at center, #D4AF37 0%, transparent 70%)",
                        }}
                    />

                    <div className="relative w-[260px] h-[340px] md:w-[320px] md:h-[420px] lg:w-[380px] lg:h-[500px]">
                        {/* Photo Border Accents */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/30 z-20 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-gold/30 z-20 pointer-events-none" />

                        <Image
                            src="/about-photo-nobg.png"
                            alt="Thazin Nwe Win — Television Presenter & Actress"
                            fill
                            quality={98}
                            sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 380px"
                            className="object-cover object-top relative z-10"
                            priority
                            onError={() => setImgError(true)}
                        />

                        {/* Floating badge optimized for compact photo */}
                        <div className="absolute -left-6 md:-left-8 bottom-8 z-20 bg-[#121212]/95 backdrop-blur-xl px-4 py-3 rounded shadow-2xl border border-gold/30 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <p className="text-gold font-serif text-xl font-bold leading-none mb-0.5" style={{ fontFamily: "var(--font-cormorant), serif" }}>2011</p>
                            <p className="text-white/60 text-[8px] uppercase tracking-[0.2em] font-medium">Career Began</p>

                        </div>
                    </div>
                </AnimatedContent>
            </div>

            {/* Subtle bottom divider */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />
        </section >
    );
}
