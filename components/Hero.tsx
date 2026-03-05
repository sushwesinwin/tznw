import Image from 'next/image';
import GlareHover from './GlareHover';
import { socialLinks } from '../lib/constants';

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
                <section className="relative min-h-screen flex items-center mt-20 px-10 overflow-hidden w-full">

                    {/* Visual Background (Placeholder) */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/hero-transparent.png"
                            alt="Professional Presenter Hero Background"
                            fill
                            priority // Keeps it from lazy-loading (essential for Hero)
                            quality={95} // Higher quality for hero banners
                            sizes="100vw" // Tells Next.js to load a high-res version for full screen
                            className="object-contain object-right lg:object-center z-0"
                        />
                    </div>

                    <div className="relative z-20 max-w-4xl text-left">
                        <span className="text-gold tracking-[0.3em] uppercase text-sm mb-4 block">
                            Professional Presenter & Actress
                        </span>
                        <h1 className="text-7xl md:text-9xl mb-8 leading-tight text-white">
                            Elegance in <br />
                            <span className="italic text-gold-light">Every Frame</span>
                        </h1>
                        <p className="max-w-xl text-lg text-white/80 leading-relaxed mb-10">
                            Captivating audiences on TV, Facebook, and TikTok.
                            Bringing authenticity and professional hosting to every project.
                        </p>

                        <div className="flex flex-col gap-10">
                            <div className="flex gap-6">
                                <button className="bg-gold hover:bg-gold-light text-black px-10 py-4 font-bold uppercase tracking-widest transition-all">
                                    Inquire Now
                                </button>
                                <button className="border border-gold text-gold hover:bg-gold hover:text-black px-10 py-4 font-bold uppercase tracking-widest transition-all">
                                    See Work
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </GlareHover>

            {/* Sticky Social Icons on the Right */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-4">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900/80 border border-white/10 text-white/60 transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-2xl ${social.hoverClass}`}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </>
    );
}
