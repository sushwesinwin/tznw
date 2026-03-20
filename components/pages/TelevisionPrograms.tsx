"use client";

import { televisionPrograms } from "@/lib/constants";
import AnimatedContent from "../AnimatedContent";
import BlurText from "../BlurText";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TelevisionPrograms() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Calculate how many items to show per slide
    const getItemsPerSlide = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 640) return 1;
            if (window.innerWidth < 1024) return 2;
            return 3;
        }
        return 3;
    };

    const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(getItemsPerSlide());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalSlides = Math.ceil(televisionPrograms.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-play carousel
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % totalSlides);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isPaused, totalSlides]);

    return (
        <section id="portfolio" className="relative w-full overflow-hidden py-16 md:py-20">
            {/* Large Background Watermark — Consistency with About page */}
            <div className="pointer-events-none absolute top-1/2 right-0 z-0 hidden w-full -translate-y-1/2 overflow-hidden text-right opacity-5 select-none lg:block">
                <p
                    className="font-serif leading-none font-bold tracking-[0.25em] whitespace-nowrap text-white uppercase"
                    style={{ fontSize: "18vw", transform: "translateX(8%)" }}
                >
                    MOMENTS
                </p>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
                <div className="mb-10 flex max-w-3xl flex-col md:mb-14">
                    <div className="mb-3 flex items-center gap-4">
                        <BlurText
                            text="Television Hosting"
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className="text-gold font-sans text-[9px] font-bold tracking-[0.5em] whitespace-nowrap uppercase md:text-[10px]"
                        />
                        <div className="bg-gold/20 hidden h-px flex-1 md:block" />
                    </div>

                    <BlurText
                        text="ICONIC PROGRAMS"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="font-serif text-3xl leading-none tracking-tight text-white uppercase md:text-4xl lg:text-5xl"
                    />
                </div>

                {/* Carousel Container */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Left Navigation Button */}
                    <button
                        onClick={prevSlide}
                        className="hover:bg-gold/20 border-gold/30 hover:border-gold hover:text-gold absolute top-1/2 left-0 z-30 -translate-y-1/2 rounded-full border bg-black/80 p-3 text-white/70 backdrop-blur-sm transition-all duration-300"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    {/* Right Navigation Button */}
                    <button
                        onClick={nextSlide}
                        className="hover:bg-gold/20 border-gold/30 hover:border-gold hover:text-gold absolute top-1/2 right-0 z-30 -translate-y-1/2 rounded-full border bg-black/80 p-3 text-white/70 backdrop-blur-sm transition-all duration-300"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Carousel Track */}
                    <div className="overflow-hidden px-12">
                        <div
                            className="flex gap-5 transition-transform duration-700 ease-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="flex min-w-full justify-start gap-5">
                                    {televisionPrograms
                                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                        .map((program, index) => (
                                            <AnimatedContent
                                                key={program.title}
                                                direction="vertical"
                                                distance={30}
                                                delay={0.08 * index}
                                                className="group flex-shrink-0"
                                                style={{
                                                    width: `calc((100% - ${(itemsPerSlide - 1) * 1.25}rem) / ${itemsPerSlide})`,
                                                }}
                                            >
                                                <a
                                                    href={program.url || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block cursor-pointer"
                                                >
                                                    <div className="hover:border-gold/40 group relative h-[240px] w-full overflow-hidden rounded-xl border border-white/5 bg-zinc-900/40 shadow-2xl backdrop-blur-sm transition-all duration-700 md:h-[300px]">
                                                        {/* Program Image */}
                                                        {program.image && (
                                                            <div className="absolute inset-0 z-0">
                                                                <Image
                                                                    src={program.image}
                                                                    alt={program.title}
                                                                    fill
                                                                    className="scale-[1.02] object-cover grayscale-20 transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                                    style={{
                                                                        objectPosition:
                                                                            program.objectPosition || "center",
                                                                    }}
                                                                />
                                                                {/* Dynamic Gradient Overlay */}
                                                                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-700 group-hover:opacity-60" />
                                                                <div className="bg-gold/5 absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                                                            </div>
                                                        )}

                                                        {/* Hover Glass Shine */}
                                                        <div
                                                            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                                                            style={{
                                                                background:
                                                                    "linear-gradient(45deg, transparent 0%, rgba(212,175,55,0.05) 50%, transparent 100%)",
                                                            }}
                                                        />

                                                        {/* Content Container */}
                                                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
                                                            <div className="relative z-10 transform transition-all duration-500 group-hover:-translate-y-2">
                                                                <span className="text-gold mb-2 block -translate-x-4 text-[9px] font-bold tracking-[0.3em] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                                                                    {program.period}
                                                                </span>
                                                                <h3 className="group-hover:text-gold font-serif text-base leading-tight text-white transition-colors duration-500 md:text-lg">
                                                                    {program.title}
                                                                </h3>

                                                                {/* Project Link indicator */}
                                                                <div className="mt-3 flex translate-y-4 items-center gap-3 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                                                                    <span className="text-[8px] font-medium tracking-[0.2em] text-white/60 uppercase">
                                                                        Explore Program
                                                                    </span>
                                                                    <div className="bg-gold/50 h-px w-6" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Abstract Frame Decors */}
                                                        <div className="from-gold/0 via-gold/0 to-gold/0 group-hover:via-gold/40 absolute top-0 left-0 h-1 w-full bg-linear-to-r transition-all duration-700" />
                                                        <div className="absolute right-6 bottom-4 left-6 h-px origin-left scale-x-0 bg-white/10 transition-transform duration-700 group-hover:scale-x-100" />
                                                    </div>
                                                </a>
                                            </AnimatedContent>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="mt-8 flex justify-center gap-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    index === currentIndex ? "bg-gold w-8" : "w-1.5 bg-white/30 hover:bg-white/50"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTAs Section */}
                <AnimatedContent direction="vertical" distance={30} delay={0.5} className="mt-12 md:mt-16">
                    <div className="flex flex-col items-center gap-8">
                        <div className="max-w-2xl text-center">
                            <h3 className="mb-3 font-serif text-2xl text-white md:text-3xl">Stay Connected</h3>
                            <p className="text-sm text-white/70 md:text-base">
                                Follow my journey on social media and never miss an update
                            </p>
                        </div>

                        {/* CTA Buttons Grid */}
                        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                            {/* YouTube Subscribe */}
                            <a
                                href="https://www.youtube.com/@thazinnwewin5263"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex flex-col items-center gap-3 rounded-xl bg-[#FF0000] px-6 py-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#CC0000] hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                <div className="text-center">
                                    <p className="mb-1 text-base font-semibold md:text-lg">Subscribe on YouTube</p>
                                    <p className="text-xs text-white/80">Latest videos & updates</p>
                                </div>
                                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </a>

                            {/* Instagram Follow */}
                            <a
                                href="https://www.instagram.com/thazin_nwe_win?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex flex-col items-center gap-3 rounded-xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] px-6 py-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-[0_0_30px_rgba(253,29,29,0.3)]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                                <div className="text-center">
                                    <p className="mb-1 text-base font-semibold md:text-lg">Follow on Instagram</p>
                                    <p className="text-xs text-white/80">Daily moments & stories</p>
                                </div>
                                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </a>

                            {/* Book Now */}
                            <a
                                href="#bookings"
                                className="group bg-gold hover:bg-gold-dark relative flex flex-col items-center gap-3 rounded-xl px-6 py-6 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="4" width="18" height="18" rx="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <div className="text-center">
                                    <p className="mb-1 text-base font-semibold md:text-lg">Book an Appearance</p>
                                    <p className="text-xs text-black/70">Host your event</p>
                                </div>
                                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </a>
                        </div>
                    </div>
                </AnimatedContent>
            </div>

            {/* Bottom section divider */}
            <div className="via-gold/15 absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent to-transparent" />
        </section>
    );
}
