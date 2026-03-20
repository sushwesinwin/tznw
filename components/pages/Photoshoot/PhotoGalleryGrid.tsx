import React from "react";
import { PHOTOSHOOT_PHOTOS } from "@/lib/constants/photos";
import PhotoGalleryItem from "./PhotoGalleryItem";

interface PhotoGalleryGridProps {
    onImageClick: (id: number) => void;
}

const PhotoGalleryGrid = ({ onImageClick }: PhotoGalleryGridProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {PHOTOSHOOT_PHOTOS.map((photo, index) => (
                <PhotoGalleryItem
                    key={photo.id}
                    id={photo.id}
                    src={photo.src}
                    alt={photo.alt}
                    index={index}
                    onClick={onImageClick}
                />
            ))}
        </div>
    );
};

export default PhotoGalleryGrid;
