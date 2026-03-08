"use client";

import Image from "next/image";
import { useState } from "react";
import AnimatedContent from "./AnimatedContent";

const stats = [
    { value: "15+", label: "Years on Screen" },
    { value: "10+", label: "Shows Hosted" },
    { value: "2014–18", label: "Miss World Myanmar MC" },
    { value: "2020", label: "Film Debut" },
];

export default function About() {
    const [imgError, setImgError] = useState(false);
    return (
        <section
            id="about"
            className="relative w-full py-24 md:py-36 overflow-hidden"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
            {/* Subtle top divider line */}
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* ── Left: Text Content ── */}
                <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">

                    {/* Heading */}
                    <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                            HELLO, I'm<br />
                            <span className="italic text-gold-light">THAZIN NWE WIN</span>
                        </h2>
                    </AnimatedContent>

                    {/* Bio */}
                    <AnimatedContent direction="vertical" distance={30} delay={0.3}>
                        <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed max-w-lg">
                            <p>
                                I'm a television presenter, host, MC, and actress from Yangon, Myanmar.
                                Since 2011, I've been doing what I love — showing up on screen and on stage, connecting with people, and making every moment count. You might know me from Khit Thit Pyo May, MasterChef Myanmar, Miss World Myanmar, or the Myanmar Academy Awards. Or maybe from my film debut in Escape in 2020.
                                On camera or on stage, modeling or acting — I wear many hats. But at heart, I'm a presenter. And I love every second of it.
                            </p>
                        </div>
                    </AnimatedContent>

                    {/* Stats row */}
                    <AnimatedContent direction="vertical" distance={20} delay={0.5}>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2 md:mt-4">
                            {stats.map((s) => (
                                <div key={s.label} className="flex flex-col gap-1">
                                    <span className="text-gold font-serif text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                                        {s.value}
                                    </span>
                                    <span className="text-white/40 text-[10px] uppercase tracking-widest leading-tight">
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </AnimatedContent>

                    {/* CTA */}
                    <AnimatedContent direction="vertical" distance={10} delay={0.7}>
                        <a
                            href="#bookings"
                            className="inline-flex items-center gap-3 text-gold text-sm font-medium tracking-widest uppercase mt-2 group w-fit"
                        >
                            Book an Appearance
                            <span className="block w-8 h-px bg-gold group-hover:w-14 transition-all duration-300" />
                        </a>
                    </AnimatedContent>
                </div>

                {/* ── Right: Photo ── */}
                <AnimatedContent direction="vertical" distance={50} scale={0.95} duration={1.2} delay={0.2} className="relative flex justify-center md:justify-end order-1 md:order-2">
                    {/* Decorative gold ring behind the photo */}
                    <div
                        className="absolute inset-0 md:-inset-10 rounded-full opacity-10 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle at center, #D4AF37 0%, transparent 70%)",
                        }}
                    />

                    <div className="relative w-[280px] h-[380px] md:w-[360px] md:h-[480px] lg:w-[420px] lg:h-[560px]">
                        {imgError ? (
                            <div className="w-full h-full rounded-sm relative z-10 bg-linear-to-b from-gold/10 to-zinc-900/60 flex items-end justify-center pb-8 border border-white/10">
                                <p className="text-white/30 text-xs tracking-widest uppercase">Photo coming soon</p>
                            </div>
                        ) : (
                            <Image
                                src="/about-photo-nobg.png"
                                alt="Thazin Nwe Win — Television Presenter & Actress"
                                fill
                                quality={95}
                                sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 420px"
                                className="object-cover object-top relative z-10"
                                priority
                                onError={() => setImgError(true)}
                            />
                        )}

                        {/* Floating badge */}
                        <div className="absolute -left-5 bottom-10 z-20 bg-[#121212]/80 backdrop-blur-md px-4 py-3 rounded-lg shadow-xl border border-gold/20">
                            <p className="text-gold font-serif text-lg font-bold leading-none" style={{ fontFamily: "var(--font-cormorant), serif" }}>2011</p>
                            <p className="text-white/50 text-[10px] uppercase tracking-widest mt-0.5">Career Began</p>
                        </div>
                    </div>
                </AnimatedContent>

            </div>

            {/* Subtle bottom divider */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />
        </section >
    );
}
