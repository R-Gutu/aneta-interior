import { Pair } from "@/lib/Types/Pair";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"
import { useState } from "react";

interface Slide{
    image: string,
    title: string,
    description: string
}

const Project = ({slide1, slide2}: Pair) => {
    const [currentSlide1, setCurrentSlide1] = useState(0);
    const [currentSlide2, setCurrentSlide2] = useState(0);

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
  return (
    <div>
        {/* First Slider - Golden Soft */}
      <div className="">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-start border-b-2 border-[#EAE9E5]">
          {/* Image Section */}
          <div className="flex flex-col items-center overflow-hidden border-r-2 border-[#EAE9E5]">
            <Image
              src={slide1[currentSlide1]?.image}
              alt={slide1[currentSlide1]?.title}
              width={1500}
              height={1500}
              className="w-full h-auto object-cover"
            />
            {/* Navigation at bottom of image */}
            <div className="flex items-center gap-3 bg-white bg-opacity-90 px-4 py-8 rounded-full">
              <button
                onClick={() => prevSlide(1, slide1.length)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
              <span className="text-base text-gray-600 font-medium">{currentSlide1 + 1}/{slide1.length}</span>
              <button
                onClick={() => nextSlide(1, slide1.length)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="">
            <div className="border-b-2 border-[#EAE9E5]">
                <h2 className="text-5xl font-bold mb-4 text-gray-900 font-bricolage ml-6">
                {slide1[currentSlide1]?.title}
                </h2>
            </div>
            <p className="text-[#383838] leading-relaxed text-base font-inter px-6">
              {slide1[currentSlide1]?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Second Slider - Linii Tăcute */}
      <div>
        <div className="grid lg:grid-cols-[2fr_3fr] gap-0 items-start border-b-2 border-[#EAE9E5]">
          {/* Content Section - Left on desktop */}
          <div className="">
            <div className="border-b-2 border-[#EAE9E5]">
                <h2 className="text-5xl font-bold my-4 text-gray-900 font-bricolage">
                {slide2[currentSlide2]?.title}
                </h2>
            </div>
            <p className="text-[#383838] py-4 leading-relaxed text-base font-inter">
              {slide2[currentSlide2]?.description}
            </p>
          </div>
          
          {/* Image Section - Right on desktop */}
          <div className="flex flex-col items-center overflow-hidden order-1 lg:order-2 border-l-2 border-[#EAE9E5]">
            <Image
              src={slide2[currentSlide2]?.image}
              alt={slide2[currentSlide2]?.title}
              width={1500}
              height={1500}
              className="w-full h-auto object-cover"
            />
            {/* Navigation at bottom of image */}
            <div className="flex items-center gap-3 bg-white bg-opacity-90 px-4 py-8 rounded-full">
              <button
                onClick={() => prevSlide(2, slide2.length)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
              <span className="text-base text-gray-600 font-medium">{currentSlide2 + 1}/{slide2.length}</span>
              <button
                onClick={() => nextSlide(2, slide2.length)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project