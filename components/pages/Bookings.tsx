"use client";

import AnimatedContent from "../AnimatedContent";
import BlurText from "../BlurText";
import { Mail, Phone, Star, Users, Mic, Award } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const services = [
    {
        icon: <Mic className="h-8 w-8" />,
        title: "Event Hosting",
        description: "Professional hosting for corporate events, galas, and award ceremonies",
    },
    {
        icon: <Users className="h-8 w-8" />,
        title: "Television Presenting",
        description: "TV show hosting, panel moderation, and on-camera presentation",
    },
    {
        icon: <Award className="h-8 w-8" />,
        title: "MC Services",
        description: "Master of Ceremonies for weddings, pageants, and special occasions",
    },
    {
        icon: <Star className="h-8 w-8" />,
        title: "Brand Ambassador",
        description: "Product launches, promotional events, and brand representation",
    },
];

const eventImages = [
    { id: 1, src: "/events/v1.jpg", alt: "Event hosting 1" },
    { id: 2, src: "/events/v2.jpg", alt: "Event hosting 2" },
    { id: 3, src: "/events/v3.jpg", alt: "Event hosting 3" },
    { id: 4, src: "/events/v4.jpg", alt: "Event hosting 4" },
    { id: 5, src: "/events/v5.jpg", alt: "Event hosting 5" },
    { id: 6, src: "/events/v6.jpg", alt: "Event hosting 6" },
    { id: 7, src: "/events/v7.jpg", alt: "Event hosting 7" },
    { id: 8, src: "/events/v8.jpg", alt: "Event hosting 8" },
    { id: 9, src: "/events/v9.jpg", alt: "Event hosting 9" },
    { id: 10, src: "/events/v10.jpg", alt: "Event hosting 10" },
];

export default function Bookings() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // For this compact version, we'll show one image at a time but centered
    const itemsPerSlide = 1;

    // itemsPerSlide is now constant 1

    const totalSlides = eventImages.length;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
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
        <section
            id="bookings"
            className="via-onyx relative w-full overflow-hidden bg-linear-to-b from-black to-black py-24 md:py-36"
        >
            {/* Background Watermark */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none">
                <p
                    className="font-serif leading-none font-bold tracking-[0.3em] whitespace-nowrap text-white uppercase"
                    style={{ fontSize: "20vw" }}
                >
                    BOOKINGS
                </p>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
                {/* Section Header */}
                <div className="mb-10 flex max-w-3xl flex-col md:mb-14">
                    <div className="mb-3 flex items-center gap-4">
                        <BlurText
                            text="Professional Services"
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className="text-gold font-sans text-[9px] font-bold tracking-[0.5em] whitespace-nowrap uppercase md:text-[10px]"
                        />
                        <div className="bg-gold/20 hidden h-px flex-1 md:block" />
                    </div>
                    <BlurText
                        text="BOOK AN APPEARANCE"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="font-serif text-3xl leading-none tracking-tight text-white uppercase md:text-4xl lg:text-5xl"
                    />
                </div>

                {/* Row 1: 4 Services — full width */}
                <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-16 md:gap-6 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <AnimatedContent
                            key={service.title}
                            direction="vertical"
                            distance={40}
                            delay={0.2 + index * 0.1}
                        >
                            <div className="group hover:border-gold/40 relative rounded-xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-sm transition-all duration-500 hover:scale-105 md:p-6">
                                <div className="text-gold mb-3 transform transition-transform duration-500 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="group-hover:text-gold mb-2 font-serif text-base text-white transition-colors duration-300 md:text-lg">
                                    {service.title}
                                </h3>
                                <p className="text-xs leading-relaxed text-white/60 md:text-sm">
                                    {service.description}
                                </p>
                                <div className="via-gold/0 group-hover:via-gold/60 absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent to-transparent transition-all duration-500" />
                            </div>
                        </AnimatedContent>
                    ))}
                </div>

                {/* Row 2: Let's Work Together (left) + Image Slider (right) */}
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left: Contact */}
                    <AnimatedContent direction="vertical" distance={40} delay={0.5}>
                        <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-6 backdrop-blur-sm md:p-8">
                            <h3 className="mb-3 font-serif text-2xl text-white md:text-3xl">
                                Let&apos;s Work Together
                            </h3>
                            <p className="mb-8 text-sm leading-relaxed text-white/60">
                                Ready to make your event unforgettable? Get in touch to discuss availability and
                                requirements.
                            </p>

                            <div className="mb-8 space-y-4">
                                <div className="hover:border-gold/30 flex items-center gap-4 rounded-xl border border-white/5 bg-black/20 p-4 transition-colors">
                                    <Mail className="text-gold h-5 w-5 shrink-0" />
                                    <div>
                                        <p className="mb-0.5 text-[10px] tracking-wider text-white/50 uppercase">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:contact@thazinnwewin.com"
                                            className="hover:text-gold text-sm font-medium text-white transition-colors"
                                        >
                                            contact@thazinnwewin.com
                                        </a>
                                    </div>
                                </div>
                                <div className="hover:border-gold/30 flex items-center gap-4 rounded-xl border border-white/5 bg-black/20 p-4 transition-colors">
                                    <Phone className="text-gold h-5 w-5 shrink-0" />
                                    <div>
                                        <p className="mb-0.5 text-[10px] tracking-wider text-white/50 uppercase">
                                            Phone
                                        </p>
                                        <a
                                            href="tel:+959771044732"
                                            className="hover:text-gold text-sm font-medium text-white transition-colors"
                                        >
                                            +95 9 771 044 732
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gold/5 border-gold/20 flex items-start gap-3 rounded-xl border p-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-gold mt-0.5 shrink-0"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4" />
                                    <path d="M12 8h.01" />
                                </svg>
                                <div>
                                    <h4 className="text-gold mb-1 text-xs font-semibold">Booking Guidelines</h4>
                                    <p className="mb-2 text-xs leading-relaxed text-white/50">
                                        Review policies and timelines before reaching out.
                                    </p>
                                    <a
                                        href="/terms-and-conditions"
                                        className="text-gold inline-flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-white"
                                    >
                                        View Guidelines
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="11"
                                            height="11"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>

                    {/* Right: Image Slider */}
                    <AnimatedContent direction="vertical" distance={40} delay={0.6}>
                        <div className="flex flex-col">
                            <div className="mb-4 flex flex-col">
                                <h3 className="mb-1 font-serif text-lg tracking-wider text-white uppercase md:text-xl">
                                    Past Appearances
                                </h3>
                                <p className="text-[10px] text-white/40 md:text-xs">Portfolio Highlights</p>
                            </div>

                            <div
                                className="relative"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg">
                                    <div
                                        className="flex transition-transform duration-700 ease-in-out"
                                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                    >
                                        {eventImages.map((image) => (
                                            <div key={image.id} className="w-full shrink-0">
                                                <div className="relative flex h-[240px] w-full items-center justify-center bg-black/40 md:h-[340px]">
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt}
                                                        fill
                                                        className="object-contain"
                                                        sizes="(max-width: 768px) 100vw, 50vw"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-center gap-1.5">
                                    {eventImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`h-1 rounded-full transition-all duration-300 ${
                                                index === currentIndex
                                                    ? "bg-gold w-8"
                                                    : "w-1.5 bg-white/20 hover:bg-white/40"
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>

                {/* Bottom Note */}
                <AnimatedContent direction="vertical" distance={20} delay={0.8}>
                    <div className="mt-12 text-center">
                        <p className="mx-auto max-w-2xl text-xs text-white/40 md:text-sm">
                            Based in Yangon, Myanmar. Available for national and international engagements. Corporate
                            rates and packages available upon request.
                        </p>
                    </div>
                </AnimatedContent>
            </div>

            {/* Decorative divider */}
            <div className="via-gold/20 absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent to-transparent" />
        </section>
    );
}
