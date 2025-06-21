"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Transition } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ images, key: keyProp }: { images: string[], key?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Number of images to preload ahead (adjust as needed)
  const PRELOAD_COUNT = 2;

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1.05,
    }
  };

  const transition: Transition = {
    type: "tween" as const,
    duration: 0.4,
    ease: "easeInOut"
  };


  // Preload images
  useEffect(() => {
    const getPreloadIndices = (currentIdx: number): number[] => {
      const indices: number[] = [];

      // Always include current image
      indices.push(currentIdx);

      // Add next images (wrapping around)
      for (let i = 1; i <= PRELOAD_COUNT; i++) {
        indices.push((currentIdx + i) % images.length);
      }

      // Optionally add previous image for smoother backward navigation
      indices.push(currentIdx === 0 ? images.length - 1 : currentIdx - 1);

      return [...new Set(indices)]; // Remove duplicates
    };
    const indicesToLoad = getPreloadIndices(currentIndex);

    indicesToLoad.forEach(index => {
      if (!loadedImages.has(index)) {
        const img = new window.Image();
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, index]));
        };
        img.src = images[index];
      }
    });
  }, [currentIndex, images, loadedImages]);

  // Initial preload on component mount
  useEffect(() => {
    const getPreloadIndices = (currentIdx: number): number[] => {
      const indices: number[] = [];

      // Always include current image
      indices.push(currentIdx);

      // Add next images (wrapping around)
      for (let i = 1; i <= PRELOAD_COUNT; i++) {
        indices.push((currentIdx + i) % images.length);
      }

      // Optionally add previous image for smoother backward navigation
      indices.push(currentIdx === 0 ? images.length - 1 : currentIdx - 1);

      return [...new Set(indices)]; // Remove duplicates
    };
    // Preload first few images immediately
    const initialIndices = getPreloadIndices(0);

    initialIndices.forEach(index => {
      const img = new window.Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, index]));
      };
      img.src = images[index];
    });
  }, [images]);

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    goToSlide(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  };

  const goToSlide = (targetIndex: number) => {
    if (isTransitioning || targetIndex === currentIndex) return;

    if (loadedImages.has(targetIndex)) {
      // Image is already loaded, transition immediately
      setCurrentIndex(targetIndex);
      setAnimationKey(prev => prev + 1);
    } else {
      // Image not loaded, show loading state and wait
      setIsTransitioning(true);

      const img = new window.Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, targetIndex]));
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          setCurrentIndex(targetIndex);
          setAnimationKey(prev => prev + 1);
          setIsTransitioning(false);
        }, 10);
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${images[targetIndex]}`);
        setTimeout(() => {
          setCurrentIndex(targetIndex);
          setAnimationKey(prev => prev + 1);
          setIsTransitioning(false);
        }, 10);
      };
      img.src = images[targetIndex];
    }
  };

  return (
    <div key={keyProp || 0} className="relative w-full max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        disabled={isTransitioning}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 group bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-full p-3 shadow-lg border border-slate-200 hover:shadow-xl hover:scale-110 active:scale-95 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:text-slate-900 transition-colors duration-200" />
      </button>

      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
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
              width={500}
              height={500}
              alt={`Slider image ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              priority={currentIndex === 0}
              onLoad={() => {
                // Ensure this image is marked as loaded
                setLoadedImages(prev => new Set([...prev, currentIndex]));
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Loading overlay when transitioning */}
        {isTransitioning && (
          <div className="absolute inset-0 bg-slate-200/50 backdrop-blur-sm flex items-center justify-center z-20">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <div className="w-8 h-8 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        )}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        disabled={isTransitioning}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 group bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-full p-3 shadow-lg border border-slate-200 hover:shadow-xl hover:scale-110 active:scale-95 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-slate-900 transition-colors duration-200" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-2 h-2 rounded-full transition-all duration-300 relative ${index === currentIndex
              ? 'bg-white shadow-lg scale-125'
              : 'bg-white/60 hover:bg-white/80 hover:scale-110'
              } ${isTransitioning ? 'cursor-not-allowed opacity-50' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Small indicator for preloaded images */}
            {loadedImages.has(index) && index !== currentIndex && (
              <div className="absolute inset-0 bg-green-400/30 rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Image Counter with Loading Status */}
      <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentIndex + 1} / {images.length}
        {isTransitioning && (
          <span className="ml-1 text-yellow-300">⏳</span>
        )}
      </div>

      {/* Debug: Show preloaded images count (remove in production) */}
      <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
        Loaded: {loadedImages.size}/{images.length}
      </div>
    </div>
  );
}