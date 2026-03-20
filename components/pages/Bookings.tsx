"use client";

import AnimatedContent from "../AnimatedContent";
import BlurText from "../BlurText";
import GlareHover from "../GlareHover";
import { Mail, Phone, Star, Users, Mic, Award, ExternalLink, ShieldCheck } from "lucide-react";
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
        <section id="bookings" className="relative w-full overflow-hidden bg-black py-24 md:py-40">
            {/* Background Decorative Elements */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="from-gold/5 absolute top-0 left-0 h-[500px] w-full bg-linear-to-b to-transparent opacity-50" />
                <div className="bg-gold/5 absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-zinc-800/20 blur-[80px]" />
            </div>

            {/* Background Watermark */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none">
                <p
                    className="font-serif leading-none font-bold tracking-[0.2em] whitespace-nowrap text-white uppercase"
                    style={{ fontSize: "22vw" }}
                >
                    CONTACT
                </p>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
                {/* Section Header */}
                <div className="mb-16 flex flex-col items-center text-center">
                    <div className="mb-4 flex items-center justify-center gap-4">
                        <div className="bg-gold/40 h-px w-8 md:w-16" />
                        <BlurText
                            text="Professional Services"
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className="text-gold font-sans text-[10px] font-bold tracking-[0.6em] whitespace-nowrap uppercase md:text-[11px]"
                        />
                        <div className="bg-gold/40 h-px w-8 md:w-16" />
                    </div>
                    <BlurText
                        text="BOOK AN APPEARANCE"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="font-serif text-4xl leading-tight tracking-tight text-white uppercase md:text-5xl lg:text-7xl"
                    />
                    <div className="bg-gold mt-6 h-1 w-20 rounded-full" />
                </div>

                {/* Service Cards with GlareHover */}
                <div className="mb-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <AnimatedContent
                            key={service.title}
                            direction="vertical"
                            distance={40}
                            delay={0.2 + index * 0.1}
                        >
                            <GlareHover
                                width="100%"
                                height="100%"
                                background="rgba(24, 24, 27, 0.4)"
                                borderRadius="20px"
                                borderColor="rgba(212, 175, 55, 0.1)"
                                glareColor="#D4AF37"
                                glareOpacity={0.15}
                                className="h-full"
                            >
                                <div className="group relative h-full p-8 transition-all duration-500">
                                    <div className="text-gold bg-gold/10 group-hover:bg-gold/20 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110">
                                        {service.icon}
                                    </div>
                                    <h3 className="group-hover:text-gold mb-3 font-serif text-xl tracking-tight text-white transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-zinc-400">{service.description}</p>
                                    <div className="from-gold/0 via-gold/50 to-gold/0 absolute bottom-0 left-0 h-[2px] w-0 bg-linear-to-r transition-all duration-700 group-hover:w-full" />
                                </div>
                            </GlareHover>
                        </AnimatedContent>
                    ))}
                </div>

                {/* Main Content: Contact & Portfolio */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Left: Contact Details (Column 1-5) */}
                    <div className="lg:col-span-5">
                        <AnimatedContent direction="horizontal" distance={-40} delay={0.5}>
                            <div className="rounded-3xl border border-white/5 bg-zinc-900/20 p-8 backdrop-blur-xl md:p-10">
                                <h3 className="mb-4 font-serif text-3xl text-white">Let&apos;s Work Together</h3>
                                <p className="mb-10 text-base leading-relaxed text-zinc-400">
                                    Ready to make your event unforgettable? Get in touch to discuss availability and
                                    bespoke requirements for your next project.
                                </p>

                                <div className="space-y-6">
                                    <a
                                        href="mailto:contact@thazinnwewin.com"
                                        className="group hover:border-gold/30 flex items-center gap-5 rounded-2xl border border-white/5 bg-black/40 p-5 transition-all duration-300 hover:translate-x-1"
                                    >
                                        <div className="bg-gold/10 group-hover:bg-gold text-gold flex h-12 w-12 items-center justify-center rounded-full transition-colors group-hover:text-black">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
                                                Email Address
                                            </p>
                                            <p className="group-hover:text-gold text-sm font-medium text-white transition-colors md:text-base">
                                                contact@thazinnwewin.com
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="tel:+959771044732"
                                        className="group hover:border-gold/30 flex items-center gap-5 rounded-2xl border border-white/5 bg-black/40 p-5 transition-all duration-300 hover:translate-x-1"
                                    >
                                        <div className="bg-gold/10 group-hover:bg-gold text-gold flex h-12 w-12 items-center justify-center rounded-full transition-colors group-hover:text-black">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
                                                Phone Number
                                            </p>
                                            <p className="group-hover:text-gold text-sm font-medium text-white transition-colors md:text-base">
                                                +95 9 771 044 732
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="bg-gold/5 border-gold/10 mt-10 rounded-2xl border p-6">
                                    <div className="mb-4 flex items-center gap-3">
                                        <ShieldCheck className="text-gold h-5 w-5" />
                                        <h4 className="text-sm font-bold tracking-wide text-white uppercase">
                                            Booking Guidelines
                                        </h4>
                                    </div>
                                    <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                                        Please review our guidelines regarding travel, accommodation, and professional
                                        protocols.
                                    </p>
                                    <a
                                        href="/terms-and-conditions"
                                        className="text-gold inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3"
                                    >
                                        View Guidelines
                                        <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>

                    {/* Right: Portfolio Highlights (Column 6-12) */}
                    <div className="lg:col-span-7">
                        <AnimatedContent direction="horizontal" distance={40} delay={0.6}>
                            <div className="flex h-full flex-col">
                                <div className="mb-6 flex items-end justify-between">
                                    <div>
                                        <h3 className="mb-1 font-serif text-2xl tracking-tight text-white uppercase">
                                            Past Appearances
                                        </h3>
                                        <div className="bg-gold h-0.5 w-12" />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-medium tracking-widest text-zinc-500 uppercase">
                                            {String(currentIndex + 1).padStart(2, "0")} /{" "}
                                            {String(totalSlides).padStart(2, "0")}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className="group relative flex-1 overflow-hidden"
                                    onMouseEnter={() => setIsPaused(true)}
                                    onMouseLeave={() => setIsPaused(false)}
                                >
                                    <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                                        <div
                                            className="cubic-bezier(0.16, 1, 0.3, 1) flex h-full transition-transform duration-1000"
                                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                        >
                                            {eventImages.map((image) => (
                                                <div
                                                    key={image.id}
                                                    className="relative h-full w-full shrink-0 bg-zinc-950/60"
                                                >
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt}
                                                        fill
                                                        priority={image.id === 1}
                                                        className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                                        sizes="(max-width: 768px) 100vw, 60vw"
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                                    <div className="absolute bottom-6 left-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                                        <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
                                                            Event Highlights
                                                        </p>
                                                        <p className="font-serif text-lg text-white">
                                                            Professional Appearance
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Navigation Dots */}
                                    <div className="mt-8 flex items-center justify-center gap-2">
                                        {eventImages.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentIndex(index)}
                                                className={`h-1 cursor-pointer transition-all duration-500 ${
                                                    index === currentIndex
                                                        ? "bg-gold w-12"
                                                        : "w-4 bg-zinc-800 hover:bg-zinc-600"
                                                }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>

                {/* Bottom Footer Note */}
                <AnimatedContent direction="vertical" distance={20} delay={0.8}>
                    <div className="mt-20 border-t border-white/5 pt-12 text-center">
                        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
                            <p className="text-xs leading-relaxed tracking-wide text-zinc-500 md:text-sm">
                                Based in Yangon, Myanmar. Available for national and international engagements.
                                Corporate rates and bespoke packages available upon request.
                            </p>
                            <div className="via-gold/20 flex h-px w-32 bg-linear-to-r from-transparent to-transparent" />
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}
