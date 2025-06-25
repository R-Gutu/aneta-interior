"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // === 📱 Mobile & Tablet Version ===
  if (isMobile) {
    return (
        <div
            key={keyProp || 0}
            className={`relative w-full mx-auto overflow-hidden ${className || ""}`}
        >
          <div
              className="relative w-full overflow-hidden rounded-tl-[20px] rounded-br-[20px] min-h-[500px]"
              style={{ aspectRatio: "4 / 5" }}
          >
            <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                className="w-full h-full"
            >
              {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Image
                        src={src}
                        width={1200}
                        height={675}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover cursor-pointer rounded-tl-[20px] rounded-br-[20px]"
                        onClick={() => setModalOpen(true)}
                        priority={index === 0}
                    />
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="text-slate-700 text-lg font-medium px-2 font-bricolage text-center mt-2">
            {currentIndex + 1}/{images.length}
          </div>

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

  // === 💻 Desktop Version ===
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

  const goToSlide = (targetIndex: number) => {
    if (targetIndex === currentIndex) return;
    setCurrentIndex(targetIndex);
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
        <div className="relative aspect-video w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
                key={currentIndex}
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
                  className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] cursor-pointer"
                  onClick={() => setModalOpen(true)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4 px-4 py-2">
          <button
              onClick={goToPrevious}
              className="cursor-pointer border-2 border-[#040404] group bg-transparent hover:bg-slate-100 transition-all duration-200 rounded-full p-2 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-[#040404]" />
          </button>
          <div className="text-slate-700 text-lg font-medium px-2 font-bricolage">
            {currentIndex + 1}/{images.length}
          </div>
          <button
              onClick={goToNext}
              className="cursor-pointer border-2 border-[#040404] group bg-transparent transition-all duration-200 rounded-full p-2 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 text-[#040404]" />
          </button>
        </div>

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
