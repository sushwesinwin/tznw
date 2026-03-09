"use client";

import { televisionPrograms } from "@/lib/constants";
import AnimatedContent from "../AnimatedContent";
import BlurText from "../BlurText";
import Image from "next/image";

export default function TelevisionPrograms() {
    return (
        <section id="portfolio" className="relative w-full py-16 md:py-20 overflow-hidden">
            {/* Large Background Watermark — Consistency with About page */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 z-0 opacity-5 pointer-events-none select-none hidden lg:block overflow-hidden w-full text-right">
                <p className="font-serif uppercase text-white font-bold tracking-[0.25em] leading-none whitespace-nowrap"
                    style={{ fontSize: '18vw', transform: 'translateX(8%)' }}>
                    MOMENTS
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col mb-10 md:mb-14 max-w-3xl">
                    <div className="flex items-center gap-4 mb-3">
                        <BlurText
                            text="Television Hosting"
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className="text-gold tracking-[0.5em] uppercase text-[9px] md:text-[10px] font-sans font-bold whitespace-nowrap"
                        />
                        <div className="h-px flex-1 bg-gold/20 hidden md:block" />
                    </div>

                    <BlurText
                        text="ICONIC PROGRAMS"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-3xl md:text-4xl lg:text-5xl text-white font-serif uppercase tracking-tight leading-none"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                    {televisionPrograms.map((program, index) => (
                        <AnimatedContent
                            key={program.title}
                            direction="vertical"
                            distance={30}
                            delay={0.08 * index}
                            className="group h-full"
                        >
                            <a
                                href={program.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full cursor-pointer"
                            >
                                <div className="relative h-[200px] md:h-[260px] bg-zinc-900/40 backdrop-blur-sm border border-white/5 hover:border-gold/40 transition-all duration-700 overflow-hidden rounded-xl group shadow-2xl">
                                    {/* Program Image */}
                                    {program.image && (
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src={program.image}
                                                alt={program.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 scale-[1.02] group-hover:scale-110 grayscale-20 group-hover:grayscale-0"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                style={{ objectPosition: program.objectPosition || "center" }}
                                            />
                                            {/* Dynamic Gradient Overlay */}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-700 group-hover:opacity-60" />
                                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        </div>
                                    )}

                                    {/* Hover Glass Shine */}
                                    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                        style={{ background: 'linear-gradient(45deg, transparent 0%, rgba(212,175,55,0.05) 50%, transparent 100%)' }} />

                                    {/* Content Container */}
                                    <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end">
                                        <div className="relative z-10 transform transition-all duration-500 group-hover:-translate-y-2">
                                            <span className="text-[9px] text-gold tracking-[0.3em] font-bold block mb-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                                {program.period}
                                            </span>
                                            <h3 className="text-base md:text-lg text-white font-serif leading-tight group-hover:text-gold transition-colors duration-500">
                                                {program.title}
                                            </h3>

                                            {/* Project Link indicator */}
                                            <div className="mt-3 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                                <span className="text-[8px] uppercase tracking-[0.2em] text-white/60 font-medium">Explore Program</span>
                                                <div className="w-6 h-px bg-gold/50" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Abstract Frame Decors */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold/0 via-gold/0 to-gold/0 group-hover:via-gold/40 transition-all duration-700" />
                                    <div className="absolute bottom-4 left-6 right-6 h-px bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                </div>
                            </a>
                        </AnimatedContent>
                    ))}
                </div>
            </div>

            {/* Bottom section divider */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gold/15 to-transparent" />
        </section>
    );
}
