'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useRouter } from "@/i18n/navigation";

export default function Projects() {
  const t = useTranslations("main-projects");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const router = useRouter()
        const handlePush = (link: string) => {
            try {
                router.push(link);
            } catch (error) {
                console.error('Navigation error:', error);
            }
        }

  const projects = [
    {
      id: 1,
      title: t("slide1.title"),
      image: "/images/projects1.png",
      alt: t('slide1.alt')
    },
    {
      id: 2,
      title: t("slide2.title"),
      image: "/images/projects2.png",
      alt: t('slide2.alt')
    },
    {
      id: 3,
      title: t("slide3.title"),
      image: "/images/projects3.png",
      alt: t('slide3.alt')
    },
    {
      id: 4,
      title:  t("slide4.title"),
      image: "/images/projects4.png",
      alt: t('slide4.alt')
    },
    {
      id: 5,
      title: t("slide5.title"),
      image: "/images/projects5.png",
      alt: t('slide5.alt')
    },
    {
      id: 6,
      title:  t("slide6.title"),
      image: "/images/projects6.png",
      alt: t('slide6.alt')
    },
    {
      id: 7,
      title: t("slide7.title"),
      image: "/images/projects7.png",
      alt: t('slide7.alt')
    },
    {
      id: 8,
      title:  t("slide8.title"),
      image: "/images/projects8.png",
      alt: t('slide8.alt')
    },
    {
      id: 9,
      title: t("slide9.title"),
      image: "/images/projects9.png",
      alt: t('slide9.alt')
    },
    {
      id: 10,
      title:  t("slide10.title"),
      image: "/images/projects10.png",
      alt: t('slide10.alt')
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrollPaused) {
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 2000); // 2 seconds
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isAutoScrollPaused, projects.length]);

  // Pause autoscroll when user interacts
  const pauseAutoScroll = () => {
    setIsAutoScrollPaused(true);
    setTimeout(() => setIsAutoScrollPaused(false), 5000); // Resume after 5 seconds
  };

  const nextSlide = () => {
    pauseAutoScroll();
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    pauseAutoScroll();
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    pauseAutoScroll();
    setCurrentSlide(index);
  };

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 px-4 md:px-8 lg:px-16 bg-[#F0F0F0]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="mb-4 sm:mb-6 md:mb-0">
            <p className="text-sm sm:text-base text-black mb-2 font-semibold font-bricolage px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-white text-center w-fit rounded-xl">
              {t('title')}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-xs sm:max-w-lg lg:max-w-xl">
              {t('subtitle')}
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">

            {/* Navigation Arrows */}
            <div className="flex gap-2 sm:gap-4 font-bricolage items-center justify-center">
              <button
                onClick={prevSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 cursor-pointer flex items-center justify-center hover:border-gray-400 hover:bg-white transition-all duration-200"
                aria-label={t('previous_project')}
              >
                <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none">
                  <path 
                    d="M10 12L6 8L10 4" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            {/* Slide Counter */}
            <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-600">
              <span className="font-medium">
                {String(currentSlide + 1).padStart(2)}
              </span>
              <span>/</span>
              <span>{String(projects.length).padStart(2)}</span>
            </div>
              <button
                onClick={nextSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 cursor-pointer border-gray-300 flex items-center justify-center hover:border-gray-400 hover:bg-white transition-all duration-200"
                aria-label={t('next_project')}
              >
                <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none">
                  <path 
                    d="M6 4L10 8L6 12" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoScrollPaused(true)}
          onMouseLeave={() => setIsAutoScrollPaused(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={project.id} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 sm:gap-6">
                  {/* First Card - Always visible */}
                  <div className="group relative">
                    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-2xl sm:rounded-3xl">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Overlay Content */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Project Info */}
                      <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 right-3 sm:right-4 lg:right-6 flex flex-col items-end">
                        <div className="text-white mb-2 sm:mb-3 lg:mb-4 text-end">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 max-w-[200px] sm:max-w-xs">
                            {projects[index].title}
                          </h3>
                        </div>
                        
                        {/* View Project Button */}
                        <button onClick={() => handlePush(`/projects`)} className="flex items-center justify-center cursor-pointer gap-2 bg-white backdrop-blur-sm text-black px-4 sm:px-6 lg:px-10 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-semibold hover:bg-white hover:scale-105 transition-all duration-200">
                          <span>{t('view_project')}</span>
                        </button>
                      </div>

                      {/* Arrow Icon - Top Right */}
                      <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 cursor-pointer shadow-2xl bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-white hover:scale-105 transition-all duration-200">
                        <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 16 16" fill="none">
                          <path 
                            d="M4 12L12 4M12 4H4M12 4V12" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Second Card - Next project preview - Hidden on mobile */}
                  <div className="group relative hidden lg:block">
                    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-2xl sm:rounded-3xl">
                      <Image
                        src={projects[(index + 1) % projects.length].image}
                        alt={projects[(index + 1) % projects.length].alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Overlay Content */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Project Info */}
                      <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
                        <div className="text-white mb-2 sm:mb-3 lg:mb-4">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 max-w-[200px] sm:max-w-xs">
                            {projects[(index + 1) % projects.length].title}
                          </h3>
                        </div>
                        
                        {/* View Project Button */}
                        <button onClick={() => handlePush(`/projects`)} className="flex items-center cursor-pointer justify-center gap-2 bg-white backdrop-blur-sm text-black px-4 sm:px-6 lg:px-10 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-semibold hover:bg-white hover:scale-105 transition-all duration-200">
                          <span>{t('view_project')}</span>
                        </button>
                      </div>

                      {/* Arrow Icon - Top Right */}
                      <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 cursor-pointer shadow-2xl bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-white hover:scale-105 transition-all duration-200">
                        <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 16 16" fill="none">
                          <path 
                            d="M4 12L12 4M12 4H4M12 4V12" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-black w-4 sm:w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={t('go_to_slide', {slide: index + 1})}
            />
          ))}
        </div>
      </div>
    </section>
  );
}