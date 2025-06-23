"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageModal from "./ImageModal";

export default function Slider({
                                 images,
                                 key: keyProp,
                                 className,
                               }: {
  images: string[];
  key?: number;
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [animationKey, setAnimationKey] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);


  const slideVariants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  const transition = {
    type: "tween" as const,
    duration: 0.4,
    ease: [0.4, 0.0, 0.2, 1] as const,
  };

  useEffect(() => {
    const preloadNext = (startIndex: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const index = (startIndex + i) % images.length;
        if (!loadedImages.has(index)) {
          const img = new window.Image();
          img.onload = () =>
              setLoadedImages((prev) => new Set([...prev, index]));
          img.onerror = () =>
              setLoadedImages((prev) => new Set([...prev, index]));
          img.src = images[index];
        }
      }
    };

    preloadNext(currentIndex, 4);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    if (!loadedImages.has(prevIndex)) {
      const img = new window.Image();
      img.onload = () =>
          setLoadedImages((prev) => new Set([...prev, prevIndex]));
      img.onerror = () =>
          setLoadedImages((prev) => new Set([...prev, prevIndex]));
      img.src = images[prevIndex];
    }
  }, [currentIndex, images, loadedImages]);

  const loadingQueue = new Set<number>();

  const goToSlide = (targetIndex: number) => {
    if (targetIndex === currentIndex || loadingQueue.has(targetIndex)) return;

    if (loadedImages.has(targetIndex)) {
      setCurrentIndex(targetIndex);
      setAnimationKey((prev) => prev + 1);
    } else {
      loadingQueue.add(targetIndex);
      const img = new window.Image();
      img.onload = () => {
        setLoadedImages((prev) => {
          const newSet = new Set(prev);
          newSet.add(targetIndex);
          return newSet;
        });
        loadingQueue.delete(targetIndex);
        setCurrentIndex(targetIndex);
        setAnimationKey((prev) => prev + 1);
      };
      img.onerror = () => {
        loadingQueue.delete(targetIndex);
        console.warn(`Failed to load image at index ${targetIndex}`);
      };
      img.src = images[targetIndex];
    }
  };

  const goToNext = () => goToSlide((currentIndex + 1) % images.length);
  const goToPrevious = () =>
      goToSlide(currentIndex === 0 ? images.length - 1 : currentIndex - 1);

  return (
      <div
          key={keyProp || 0}
          className={`relative flex flex-col items-center w-full mx-auto overflow-hidden ${
              className || ""
          }`}
      >
        {/* Image Container */}
        <div className="relative aspect-video w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
                key={animationKey}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="absolute inset-0"
            >
              <Image
                  src={images[currentIndex]}
                  width={1200}
                  height={675}
                  alt={`Slider image ${currentIndex + 1}`}
                  className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] max-[800px]:rounded-tl-[20px] max-[800px]:rounded-br-[20px] cursor-pointer"
                  priority={currentIndex === 0}
                  onClick={() => {
                    setModalOpen(true);
                  }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="flex items-center gap-4 px-4 py-2">
          <button
              onClick={goToPrevious}
              className="cursor-pointer border-2 border-[#040404] group bg-transparent hover:bg-slate-100 transition-all duration-200 rounded-full p-2 hover:scale-110 active:scale-95"
              aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-[#040404] group-hover:text-slate-900 transition-colors duration-200" />
          </button>
          <div className="text-slate-700 text-lg font-medium px-2 font-bricolage">
            {currentIndex + 1}/{images.length}
          </div>
          <button
              onClick={goToNext}
              className="cursor-pointer border-2 border-[#040404] group bg-transparent transition-all duration-200 rounded-full p-2 hover:scale-110 active:scale-95"
              aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-[#040404] group-hover:text-slate-900 transition-colors duration-200" />
          </button>
        </div>

        {/* Fullscreen Modal - render only if selectedImage exists */}
        {modalOpen && (
            <ImageModal
                isOpen={modalOpen}
                images={images}
                currentIndex={currentIndex}
                onClose={() => setModalOpen(false)}
                onNavigate={(newIndex) => setCurrentIndex(newIndex)}
            />
        )}

      </div>
  );
}
