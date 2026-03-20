import Image from "next/image";
import { socialLinks } from "@/lib/constants";
import AnimatedContent from "../AnimatedContent";
import BlurText from "../BlurText";
import GlareHover from "../GlareHover";

/**
 * Z-index layers (inside section stacking context):
 *   z-[1]  — mobile name watermark (BEHIND the subject image)
 *   z-[2]  — subject image (transparent PNG — name shows through bg areas)
 *   z-10   — gradient scrim (mobile only)
 *   z-20   — hero text content + desktop name label
 */
export default function Hero() {
    return (
        <>
            <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderColor="transparent"
                borderRadius="0"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
            >
                <section className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden md:pt-16">
                    {/* ── Mobile name watermark — BEHIND the subject image ── */}
                    {/* z-[1] < image z-[2], so it shows through the transparent PNG bg */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-1 pt-24 text-center select-none md:hidden">
                        <p
                            className="font-serif leading-none font-bold tracking-widest text-white/30 uppercase"
                            style={{ fontSize: "clamp(4rem, 22vw, 10rem)" }}
                        >
                            THAZIN
                        </p>
                        <p
                            className="-mt-3 leading-none text-white/25"
                            style={{ fontFamily: "var(--font-great-vibes)", fontSize: "clamp(3rem, 17vw, 8rem)" }}
                        >
                            Nwe Win
                        </p>
                    </div>

                    {/* ── Subject image — z-[2] paints over the name on opaque pixels ── */}
                    <div className="absolute inset-x-0 top-0 bottom-0 z-2 md:top-16">
                        <Image
                            src="/hero-transparent.png"
                            alt="Professional Presenter Hero Background"
                            fill
                            priority
                            quality={95}
                            sizes="100vw"
                            className="object-cover object-top md:object-contain md:object-right lg:object-center"
                        />
                    </div>

                    {/* ── Gradient scrim — mobile only, text legibility ── */}
                    <div
                        className="absolute inset-x-0 bottom-0 z-10 h-[60%] md:hidden"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.65) 55%, transparent 100%)",
                        }}
                    />

                    {/* ── Hero text content ── */}
                    <div className="relative z-20 flex min-h-[calc(100vh-4rem)] w-full items-end text-center md:items-center md:text-left">
                        <div className="mx-auto w-full max-w-4xl px-6 pb-12 md:mx-0 md:px-14 md:py-10">
                            <BlurText
                                text="Professional Presenter & Actress"
                                delay={100}
                                animateBy="words"
                                direction="top"
                                className="text-gold mb-3 block font-sans text-[10px] tracking-[0.3em] uppercase md:mb-4 md:text-sm"
                            />

                            <AnimatedContent direction="vertical" distance={40} delay={0.4}>
                                <h1 className="mb-5 font-serif text-4xl leading-tight text-white md:mb-8 md:text-6xl lg:text-7xl">
                                    Elegance in <br />
                                    <span className="text-gold-light italic">Every Frame</span>
                                </h1>
                            </AnimatedContent>

                            <AnimatedContent direction="vertical" distance={20} delay={0.8}>
                                <p className="mx-auto mb-7 max-w-xs text-sm leading-relaxed text-white/80 md:mx-0 md:mb-10 md:max-w-xl md:text-lg">
                                    Bringing authenticity and professional hosting to every project.
                                </p>
                            </AnimatedContent>

                            <AnimatedContent direction="vertical" distance={20} delay={1.0}>
                                <div className="flex flex-row justify-center gap-3 md:justify-start md:gap-6">
                                    <a
                                        href="#bookings"
                                        className="bg-gold hover:bg-gold-light px-6 py-3 text-xs font-bold tracking-widest whitespace-nowrap text-black uppercase transition-all md:px-10 md:py-4 md:text-sm"
                                    >
                                        Inquire Now
                                    </a>
                                </div>
                            </AnimatedContent>
                        </div>
                    </div>

                    {/* ── Desktop name label — bottom-right, full opacity ── */}
                    <AnimatedContent
                        direction="vertical"
                        distance={30}
                        delay={1.4}
                        className="pointer-events-none absolute right-30 bottom-28 z-20 hidden text-right md:block"
                    >
                        <p
                            className="font-serif leading-none font-bold tracking-widest text-white uppercase"
                            style={{ fontSize: "clamp(2.2rem, 6vw, 9rem)" }}
                        >
                            THAZIN
                        </p>
                        <p
                            className="-mt-3 leading-none text-white/90"
                            style={{ fontFamily: "var(--font-great-vibes)", fontSize: "clamp(1.8rem, 5vw, 7.5rem)" }}
                        >
                            Nwe Win
                        </p>
                    </AnimatedContent>

                    {/* ── Scroll Down Indicator ── */}
                    <div className="pointer-events-none absolute right-6 bottom-6 z-30 flex flex-col items-center gap-3 md:right-8 md:bottom-8">
                        <span className="text-[10px] font-medium tracking-[0.4em] text-white/30 uppercase">Scroll</span>
                        <div className="relative h-12 w-px overflow-hidden bg-white/10">
                            <div className="bg-gold animate-scroll-down absolute top-0 left-0 h-full w-full" />
                        </div>
                    </div>
                </section>
                <style>{`
                    @keyframes scroll-down {
                        0% { transform: translateY(-100%); }
                        100% { transform: translateY(100%); }
                    }
                    .animate-scroll-down {
                        animation: scroll-down 2s cubic-bezier(0.76, 0, 0.24, 1) infinite;
                    }
                `}</style>
            </GlareHover>

            {/* Sticky Social Icons — all screen sizes, smaller on mobile */}
            <div className="fixed top-1/2 right-2 z-100 flex -translate-y-1/2 flex-col gap-2 md:right-6 md:gap-4">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-zinc-900/80 text-white/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl md:h-12 md:w-12 md:rounded-xl [&>svg]:h-[18px] [&>svg]:w-[18px] md:[&>svg]:h-[22px] md:[&>svg]:w-[22px] ${social.hoverClass}`}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </>
    );
}
