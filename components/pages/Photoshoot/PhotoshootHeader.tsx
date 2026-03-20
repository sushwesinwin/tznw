import React, { memo } from "react";
import BlurText from "@/components/BlurText";

const PhotoshootHeader = memo(() => {
    return (
        <div className="mb-10 flex max-w-3xl flex-col md:mb-14">
            <div className="mb-3 flex items-center gap-4">
                <BlurText
                    text="Professional Portfolio"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="text-gold font-sans text-[9px] font-bold tracking-[0.5em] whitespace-nowrap uppercase md:text-[10px]"
                />
                <div className="bg-gold/20 hidden h-px flex-1 md:block" />
            </div>

            <BlurText
                text="PHOTOSHOOT GALLERY"
                delay={150}
                animateBy="words"
                direction="top"
                className="font-serif text-3xl leading-none tracking-tight text-white uppercase md:text-4xl lg:text-5xl"
            />
        </div>
    );
});

PhotoshootHeader.displayName = "PhotoshootHeader";

export default PhotoshootHeader;
