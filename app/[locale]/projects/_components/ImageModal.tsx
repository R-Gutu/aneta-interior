"use client";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageModalProps {
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNavigate: (newIndex: number) => void;
}

export default function ImageModal({
                                       isOpen,
                                       images,
                                       currentIndex,
                                       onClose,
                                       onNavigate,
                                   }: ImageModalProps) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length);
            if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length);
        };
        if (isOpen) window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-5 right-5 z-50 bg-black/60 text-white hover:bg-black/80 cursor-pointer rounded-full p-3 shadow-lg transition-all duration-200"
                aria-label="Close image"
            >
                <X className="w-6 h-6" />
            </button>


            {/* Prev Button */}
            <button
                onClick={() =>
                    onNavigate((currentIndex - 1 + images.length) % images.length)
                }
                className="absolute left-5 top-1/2 -translate-y-1/2 z-50 bg-black/60 text-white hover:bg-black/80 cursor-pointer rounded-full p-3 shadow-lg transition-all duration-200"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative max-w-[90vw] max-h-[80vh] w-full h-full flex items-center justify-center">
                    <Image
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        width={1200}
                        height={800}
                        className="object-contain max-w-full max-h-full rounded-lg"
                        priority
                    />
                </div>
            </div>


            {/* Next Button */}
            <button
                onClick={() => onNavigate((currentIndex + 1) % images.length)}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-50 bg-black/60 text-white hover:bg-black/80 cursor-pointer rounded-full p-3 shadow-lg transition-all duration-200"
                aria-label="Next image"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
}
