import { useState, useEffect, useCallback } from "react";

interface UsePhotoshootLightboxReturn {
    selectedImage: number | null;
    openLightbox: (id: number) => void;
    closeLightbox: () => void;
    nextImage: () => void;
    prevImage: () => void;
}

export const usePhotoshootLightbox = (totalPhotos: number): UsePhotoshootLightboxReturn => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = useCallback((id: number) => {
        setSelectedImage(id);
        // Lock body scroll
        document.body.style.overflow = "hidden";
    }, []);

    const closeLightbox = useCallback(() => {
        setSelectedImage(null);
        // Unlock body scroll
        document.body.style.overflow = "";
    }, []);

    const nextImage = useCallback(() => {
        setSelectedImage((prev) => (prev && prev < totalPhotos ? prev + 1 : 1));
    }, [totalPhotos]);

    const prevImage = useCallback(() => {
        setSelectedImage((prev) => (prev && prev > 1 ? prev - 1 : totalPhotos));
    }, [totalPhotos]);

    // Keyboard navigation
    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "Escape":
                    closeLightbox();
                    break;
                case "ArrowRight":
                    nextImage();
                    break;
                case "ArrowLeft":
                    prevImage();
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, closeLightbox, nextImage, prevImage]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return {
        selectedImage,
        openLightbox,
        closeLightbox,
        nextImage,
        prevImage,
    };
};
