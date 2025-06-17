import { FilterType, ProjectType, Photo } from "@/lib/Types/Pair";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectProps {
  slide1: ProjectType;
  slide2: ProjectType;
  filter: FilterType;
}

const Project = ({ slide1, slide2, filter }: ProjectProps) => {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Set<string>>(new Set());

  // Helper function to get photos based on filter
  const getPhotosForFilter = (project: ProjectType, filter: FilterType): Photo[] => {
    switch (filter) {
      case 'Living':
        return project.living || [];
      case 'Bucătărie':
        return project.kitchen || [];
      case 'Dormitor':
        return project.bedroom || [];
      case 'Baie':
        return project.bathroom || [];
      case 'Cameră pentru copii':
        return project.bedroom_children || [];
      default:
        return [];
    }
  };

  const photos1 = getPhotosForFilter(slide1, filter);
  const photos2 = getPhotosForFilter(slide2, filter);

  // Reset slide indices when filter changes
  useEffect(() => {
    setCurrentSlide1(0);
    setCurrentSlide2(0);
  }, [filter]);

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = async () => {
      const allPhotos = [...photos1, ...photos2];
      const imagePromises = allPhotos.map((photo) => {
        return new Promise((resolve) => {
          if (photo?.image) {
            const img = new window.Image();
            img.onload = () => {
              setImagesLoaded(prev => new Set(prev).add(photo.image));
              resolve(photo.image);
            };
            img.onerror = () => resolve(photo.image); // Still resolve to avoid hanging
            img.src = photo.image;
          } else {
            resolve(null);
          }
        });
      });
      
      await Promise.all(imagePromises);
    };

    if (photos1.length > 0 || photos2.length > 0) {
      preloadImages();
    }
  }, [photos1, photos2]);

  const nextSlide = (slider: number, maxSlides: number) => {
    if (slider === 1) {
      setCurrentSlide1((prev) => (prev + 1) % maxSlides);
    } else {
      setCurrentSlide2((prev) => (prev + 1) % maxSlides);
    }
  };

  const prevSlide = (slider: number, maxSlides: number) => {
    if (slider === 1) {
      setCurrentSlide1((prev) => (prev - 1 + maxSlides) % maxSlides);
    } else {
      setCurrentSlide2((prev) => (prev - 1 + maxSlides) % maxSlides);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const slideTransition = {
    x: { stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
  };

  // Don't render if no photos for the current filter
  if (photos1.length === 0 && photos2.length === 0) {
    return null;
  }

  // Loading placeholder component
  const ImageLoadingPlaceholder = ({ className }: { className: string }) => (
    <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
      <div className="text-gray-400">Loading...</div>
    </div>
  );

  // Optimized image component with loading states
  const OptimizedImage = ({ 
    src, 
    alt, 
    className, 
    priority = false 
  }: { 
    src: string; 
    alt: string; 
    className: string; 
    priority?: boolean;
  }) => {
    const [imageError, setImageError] = useState(false);
    const isLoaded = imagesLoaded.has(src);

    if (imageError) {
      return (
        <div className={`${className} bg-gray-100 flex items-center justify-center`}>
          <div className="text-gray-500">Image unavailable</div>
        </div>
      );
    }

    return (
      <div className="relative w-full h-full">
        {!isLoaded && <ImageLoadingPlaceholder className={className} />}
        <Image
          src={src}
          alt={alt}
          width={800} // Reduced from 1500 for faster loading
          height={800} // Reduced from 1500 for faster loading
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          priority={priority}
          quality={85} // Slightly reduced quality for faster loading

          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={filter} // Re-animate when filter changes
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* First Slider */}
      {photos1.length > 0 && (
        <motion.div 
          className="mb-8 lg:mb-12"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] gap-0 items-start border-b-2 border-[#EAE9E5] overflow-hidden">
            {/* Image Section */}
            <motion.div 
              className="w-full flex flex-col items-center overflow-hidden lg:border-r-2 border-[#EAE9E5] relative order-2 lg:order-1"
              variants={itemVariants}
            >
              <div className="relative w-full h-auto overflow-hidden">
                <AnimatePresence mode="wait" custom={1}>
                  <motion.div
                    key={currentSlide1}
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTransition}
                    className="w-full"
                  >
                    <OptimizedImage
                      src={photos1[currentSlide1]?.image || ''}
                      alt={slide1?.title || ''}
                      className="w-full h-64 sm:h-80 md:h-96 lg:h-124 object-cover rounded-tl-[20px] sm:rounded-tl-[40px] lg:rounded-tl-[60px] rounded-br-[20px] sm:rounded-br-[40px] lg:rounded-br-[60px]"
                      priority={currentSlide1 === 0} // Prioritize first image
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Navigation at bottom of image */}
              {photos1.length > 1 && (
                <motion.div 
                  className="flex items-center gap-2 sm:gap-3 bg-white bg-opacity-90 px-3 sm:px-4 py-4 sm:py-6 lg:py-8 rounded-full mt-3 sm:mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <motion.button
                    onClick={() => prevSlide(1, photos1.length)}
                    className="p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-gray-600" />
                  </motion.button>
                  <span className="text-sm sm:text-base text-gray-600 font-medium px-1 sm:px-2">
                    {currentSlide1 + 1}/{photos1.length}
                  </span>
                  <motion.button
                    onClick={() => nextSlide(1, photos1.length)}
                    className="p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight size={20} className="sm:w-6 sm:h-6 text-gray-600" />
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
            
            {/* Content Section */}
            <motion.div 
              className="w-full order-1 lg:order-2"
              variants={itemVariants}
            >
              <motion.div 
                className="border-b-2 border-[#EAE9E5] pb-4 lg:pb-0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gray-900 font-bricolage px-4 sm:px-6 lg:ml-6 lg:px-0">
                  {slide1?.title}
                </h2>
              </motion.div>
              <motion.p 
                className="text-[#383838] leading-relaxed text-sm sm:text-base font-inter px-4 sm:px-6 py-4 lg:py-0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {slide1?.description}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Second Slider */}
      {photos2.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="mb-8 lg:mb-12"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-[2fr_3fr] gap-0 items-start border-b-2 border-[#EAE9E5] overflow-hidden">
            {/* Content Section - Left on desktop, top on mobile */}
            <motion.div 
              className="w-full order-1 lg:order-1"
              variants={itemVariants}
            >
              <motion.div 
                className="border-b-2 border-[#EAE9E5] pb-4 lg:pb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-2 sm:my-4 text-gray-900 font-bricolage px-4 sm:px-6 lg:px-0">
                  {slide2?.title}
                </h2>
              </motion.div>
              <motion.p 
                className="text-[#383838] py-4 leading-relaxed text-sm sm:text-base font-inter px-4 sm:px-6 lg:px-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {slide2?.description}
              </motion.p>
            </motion.div>
            
            {/* Image Section - Right on desktop, bottom on mobile */}
            <motion.div 
              className="w-full flex flex-col items-center overflow-hidden order-2 lg:order-2 lg:border-l-2 border-[#EAE9E5] relative"
              variants={itemVariants}
            >
              <div className="relative w-full h-auto overflow-hidden">
                <AnimatePresence mode="wait" custom={1}>
                  <motion.div
                    key={currentSlide2}
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTransition}
                    className="w-full"
                  >
                    <OptimizedImage
                      src={photos2[currentSlide2]?.image || ''}
                      alt={slide2?.title || ''}
                      className="w-full h-64 sm:h-80 md:h-96 lg:h-124 object-cover rounded-tr-[20px] sm:rounded-tr-[40px] lg:rounded-tr-[60px] rounded-bl-[20px] sm:rounded-bl-[40px] lg:rounded-bl-0"
                      priority={currentSlide2 === 0} // Prioritize first image
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation at bottom of image */}
              {photos2.length > 1 && (
                <motion.div 
                  className="flex items-center gap-2 sm:gap-3 bg-white bg-opacity-90 px-3 sm:px-4 py-4 sm:py-6 lg:py-8 rounded-full mt-3 sm:mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <motion.button
                    onClick={() => prevSlide(2, photos2.length)}
                    className="p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-gray-600" />
                  </motion.button>
                  <span className="text-sm sm:text-base text-gray-600 font-medium px-1 sm:px-2">
                    {currentSlide2 + 1}/{photos2.length}
                  </span>
                  <motion.button
                    onClick={() => nextSlide(2, photos2.length)}
                    className="p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight size={20} className="sm:w-6 sm:h-6 text-gray-600" />
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Project;