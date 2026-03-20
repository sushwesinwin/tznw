"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

interface LightboxModalProps {
    selectedImage: number;
    totalImages: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const LightboxModal = ({ selectedImage, totalImages, onClose, onNext, onPrev }: LightboxModalProps) => {
    // Preload adjacent images for smooth navigation
    useEffect(() => {
        const nextId = selectedImage < totalImages ? selectedImage + 1 : 1;
        const prevId = selectedImage > 1 ? selectedImage - 1 : totalImages;

        const preloadImage = (id: number) => {
            const img = new window.Image();
            img.src = `/photoshoot/${id}.png`;
        };

        preloadImage(nextId);
        preloadImage(prevId);
    }, [selectedImage, totalImages]);

    const modalContent = (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-8"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
        >
            <h2 id="lightbox-title" className="sr-only">
                Photo {selectedImage} of {totalImages}
            </h2>

            {/* Close button */}
            <button
                className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center text-4xl leading-none font-light text-white/70 transition-colors duration-300 hover:text-white"
                onClick={onClose}
                aria-label="Close lightbox"
                type="button"
            >
                ×
            </button>

            {/* Image container */}
            <div className="relative h-full max-h-[90vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                <Image
                    src={`/photoshoot/${selectedImage}.png`}
                    alt={`Professional photoshoot portrait ${selectedImage}`}
                    fill
                    quality={90}
                    className="object-contain"
                    sizes="90vw"
                    priority
                />
            </div>

            {/* Navigation controls */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full bg-black/60 px-6 py-3 backdrop-blur-sm">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                    }}
                    className="min-w-[100px] text-left text-base text-white/70 transition-colors duration-300 hover:text-white md:min-w-[120px] md:text-xl"
                    aria-label="Previous image"
                    type="button"
                >
                    ← Previous
                </button>

                <span className="min-w-[60px] text-center text-sm font-medium text-white/50">
                    {selectedImage} / {totalImages}
                </span>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                    className="min-w-[100px] text-right text-base text-white/70 transition-colors duration-300 hover:text-white md:min-w-[120px] md:text-xl"
                    aria-label="Next image"
                    type="button"
                >
                    Next →
                </button>
            </div>

            {/* Keyboard hint (hidden for screen readers, visual only) */}
            <div
                className="absolute top-8 left-1/2 hidden -translate-x-1/2 text-xs text-white/30 md:block"
                aria-hidden="true"
            >
                Use ← → arrow keys to navigate, ESC to close
            </div>
        </div>
    );

    // Use portal to render at document body level
    return typeof window !== "undefined" ? createPortal(modalContent, document.body) : null;
};

export default LightboxModal;
