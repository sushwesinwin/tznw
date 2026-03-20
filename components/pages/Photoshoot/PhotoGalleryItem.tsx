import React, { memo } from "react";
import Image from "next/image";
import AnimatedContent from "@/components/AnimatedContent";

interface PhotoGalleryItemProps {
    id: number;
    src: string;
    alt: string;
    index: number;
    onClick: (id: number) => void;
}

const PhotoGalleryItem = memo(({ id, src, alt, index, onClick }: PhotoGalleryItemProps) => {
    return (
        <AnimatedContent direction="vertical" distance={40} scale={0.95} delay={0.1 + index * 0.05} className="group">
            <button
                className="relative block aspect-[3/4] w-full cursor-pointer overflow-hidden rounded"
                onClick={() => onClick(id)}
                aria-label={`View ${alt} in fullscreen`}
                type="button"
            >
                {/* Hover overlay */}
                <div className="bg-gold/0 group-hover:bg-gold/10 absolute inset-0 z-10 transition-all duration-500" />

                {/* Border accent */}
                <div className="border-gold/0 group-hover:border-gold/30 absolute inset-0 z-10 rounded border transition-all duration-500" />

                <Image
                    src={src}
                    alt={alt}
                    fill
                    quality={75}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </button>
        </AnimatedContent>
    );
});

PhotoGalleryItem.displayName = "PhotoGalleryItem";

export default PhotoGalleryItem;
