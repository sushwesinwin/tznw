import Image from 'next/image';
import GlareHover from './GlareHover';
import { socialLinks } from '../lib/constants';

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
                <section className="relative flex flex-col justify-end min-h-screen w-full overflow-hidden md:pt-16">

                    {/* ── Mobile name watermark — BEHIND the subject image ── */}
                    {/* z-[1] < image z-[2], so it shows through the transparent PNG bg */}
                    <div className="md:hidden absolute top-0 inset-x-0 z-[1] text-center pointer-events-none select-none pt-24">
                        <p
                            className="font-serif uppercase text-white/30 font-bold tracking-widest leading-none"
                            style={{ fontSize: 'clamp(4rem, 22vw, 10rem)' }}
                        >
                            THAZIN
                        </p>
                        <p
                            className="text-white/25 leading-none -mt-3"
                            style={{ fontFamily: 'var(--font-great-vibes)', fontSize: 'clamp(3rem, 17vw, 8rem)' }}
                        >
                            Nwe Win
                        </p>
                    </div>

                    {/* ── Subject image — z-[2] paints over the name on opaque pixels ── */}
                    <div className="absolute top-0 md:top-16 inset-x-0 bottom-0 z-[2]">
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
                        className="md:hidden absolute inset-x-0 bottom-0 h-[60%] z-10"
                        style={{
                            background: 'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.65) 55%, transparent 100%)',
                        }}
                    />

                    {/* ── Hero text content ── */}
                    <div className="relative z-20 w-full flex items-end md:items-center min-h-[calc(100vh-4rem)] text-center md:text-left">
                        <div className="w-full max-w-4xl px-6 pb-12 md:px-14 md:py-10 mx-auto md:mx-0">

                            <span className="block text-gold tracking-[0.3em] uppercase text-[10px] md:text-sm mb-3 md:mb-4">
                                Professional Presenter &amp; Actress
                            </span>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-5 md:mb-8 leading-tight text-white font-serif">
                                Elegance in <br />
                                <span className="italic text-gold-light">Every Frame</span>
                            </h1>

                            <p className="text-sm md:text-lg text-white/80 leading-relaxed mb-7 md:mb-10 max-w-xs md:max-w-xl mx-auto md:mx-0">
                                Bringing authenticity and professional hosting to every project.
                            </p>

                            <div className="flex flex-row gap-3 md:gap-6 justify-center md:justify-start">
                                <button className="bg-gold hover:bg-gold-light text-black px-6 md:px-10 py-3 md:py-4 text-xs md:text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap">
                                    Inquire Now
                                </button>
                                <button className="border border-gold text-gold hover:bg-gold hover:text-black px-6 md:px-10 py-3 md:py-4 text-xs md:text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap">
                                    See Work
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── Desktop name label — bottom-right, full opacity ── */}
                    <div className="hidden md:block absolute bottom-28 right-30 z-20 text-right pointer-events-none">
                        <p
                            className="font-serif uppercase text-white font-bold tracking-widest leading-none"
                            style={{ fontSize: 'clamp(2.2rem, 6vw, 9rem)' }}
                        >
                            THAZIN
                        </p>
                        <p
                            className="text-white/90 leading-none -mt-3"
                            style={{ fontFamily: 'var(--font-great-vibes)', fontSize: 'clamp(1.8rem, 5vw, 7.5rem)' }}
                        >
                            Nwe Win
                        </p>
                    </div>

                </section>
            </GlareHover>

            {/* Sticky Social Icons — md+ only (mobile: inside Navbar drawer) */}
            <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex-col gap-4">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900/80 border border-white/10 text-white/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl ${social.hoverClass}`}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </>
    );
}
