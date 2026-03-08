"use client";

import { useEffect, useState } from "react";
import { MoveUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;

            setScrollProgress(scrolled);

            // Show only when near the bottom (more than 90% scrolled down)
            if (scrolled > 90) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`fixed bottom-6 md:bottom-8 right-6 md:right-8 z-200 transition-all duration-500 flex flex-col items-center gap-4 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
        >
            <div className="relative group">
                <button
                    onClick={scrollToTop}
                    className="w-14 h-14 bg-zinc-950/80 border border-gold/40 text-gold flex items-center justify-center rounded-full active:scale-95 transition-all duration-500 hover:border-gold hover:shadow-[0_0_30px_rgba(201,168,76,0.2)]"
                >
                    <MoveUp className="w-5 h-5 transition-transform duration-500 group-hover:-translate-y-1" />
                </button>

                {/* Background Progress Ring (SVG) */}
                <svg
                    className="absolute -inset-1 w-16 h-16 pointer-events-none -rotate-90 scale-x-[-1]"
                    viewBox="0 0 100 100"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="48"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="transparent"
                        className="text-gold opacity-30"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="48"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="transparent"
                        style={{
                            strokeDasharray: "301.59",
                            strokeDashoffset: (301.59 * (100 - scrollProgress)) / 100,
                            transition: "stroke-dashoffset 0.1s ease-out"
                        }}
                        className="text-gold"
                    />
                </svg>
            </div>

            <span className="text-[10px] tracking-[0.3em] font-serif uppercase text-gold/60 font-medium">To Top</span>
        </div>
    );
}
