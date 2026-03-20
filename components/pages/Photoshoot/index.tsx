"use client";

import React from "react";
import dynamic from "next/dynamic";
import { PHOTOSHOOT_PHOTOS } from "@/lib/constants/photos";
import { usePhotoshootLightbox } from "./usePhotoshootLightbox";
import PhotoshootHeader from "./PhotoshootHeader";
import LightboxModal from "./LightboxModal";

// Dynamic import to avoid SSR issues with WebGL
const CircularGallery = dynamic(() => import("@/components/CircularGallery"), {
    ssr: false,
    loading: () => (
        <div className="flex h-[400px] w-full items-center justify-center md:h-[500px]">
            <div className="text-white/50">Loading gallery...</div>
        </div>
    ),
});

export default function Photoshoot() {
    const { selectedImage, closeLightbox, nextImage, prevImage } = usePhotoshootLightbox(PHOTOSHOOT_PHOTOS.length);

    // Prepare data for CircularGallery with custom image positions
    const circularGalleryItems = PHOTOSHOOT_PHOTOS.map((photo) => {
        // Define image position offsets (moves the image within its frame)
        const imagePositions: Record<number, { x: number; y: number }> = {
            2: { x: 0, y: 0.15 }, // Move 2.png down
            3: { x: 0, y: 0.15 }, // Move 3.png down
            4: { x: 0, y: 0.15 }, // Move 4.png down
            5: { x: 0, y: 0.15 }, // Move 5.png down
            7: { x: 0, y: 0.15 }, // Move 7.png down
            9: { x: 0, y: 0.15 }, // Move 9.png down
            12: { x: -0.2, y: 0 }, // Move 12.png left
        };

        const position = imagePositions[photo.id] || { x: 0, y: 0 };

        return {
            image: photo.src,
            text: "",
            imageOffset: position,
        };
    });

    return (
        <section
            id="photoshoot"
            className="relative w-full overflow-hidden bg-black py-24 font-sans md:py-36"
            role="region"
            aria-labelledby="photoshoot-heading"
        >
            {/* Subtle top divider line */}
            <div className="via-gold/30 absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent" />

            {/* Large Background Watermark */}
            <div className="pointer-events-none absolute top-1/2 left-0 z-0 hidden w-full -translate-y-1/2 overflow-hidden opacity-[0.03] select-none lg:block">
                <p
                    className="font-serif leading-none font-bold tracking-[0.2em] whitespace-nowrap text-white uppercase"
                    style={{ fontSize: "12vw", transform: "translateX(-2%)" }}
                    aria-hidden="true"
                >
                    PORTFOLIO
                </p>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
                {/* Section Header */}
                <PhotoshootHeader />

                {/* Circular Gallery - Featured Carousel */}
                <div className="h-[400px] w-full md:h-[500px]">
                    <CircularGallery
                        items={circularGalleryItems}
                        bend={3}
                        textColor="#D4AF37"
                        borderRadius={0.02}
                        font="bold 24px sans-serif"
                        scrollSpeed={2}
                        scrollEase={0.08}
                    />
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <LightboxModal
                    selectedImage={selectedImage}
                    totalImages={PHOTOSHOOT_PHOTOS.length}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}

            {/* Subtle bottom divider */}
            <div className="via-gold/20 absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent to-transparent" />
        </section>
    );
}
