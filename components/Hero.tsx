import Image from 'next/image';
import GlareHover from './GlareHover';

export default function Hero() {
    return (
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
                        Professional Presenter &amp; Actress
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

                        {/* Social Icons matching the screenshot */}
                        <div className="flex gap-4">
                            {[
                                { name: 'Facebook', hover: 'hover:bg-[#1877F2]', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                                { name: 'LinkedIn', hover: 'hover:bg-[#0A66C2]', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
                                { name: 'Instagram', hover: 'hover:bg-[#E4405F]', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
                                { name: 'Wikipedia', hover: 'hover:bg-[#636466]', icon: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></> }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-900/60 border border-white/10 text-white/60 transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-2xl ${social.hover}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {social.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </GlareHover>

    );
}
