import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
        <div className="w-full h-screen relative overflow-x-hidden">
          {/* Background Image - Full Screen */}
          <div className="absolute inset-0">
            <Image 
              src="/images/herobg.png" 
              alt="Hero Image" 
              fill 
              className="object-cover px-20 rounded-2xl" 
              priority
            />
          </div>
          
          
          {/* Content Overlay */}
          <div className="w-full h-full flex items-end justify-start ml-30">
            <div className="z-10 flex items-start justify-center gap-10 px-[40px] pt-[40px] bg-white rounded-t-[32px]">
              <div className="flex flex-col items-center justify-center text-left">
                <h1 className="text-4xl font-bold text-black mb-4 font-bricolage">
                  Creăm interioare inspirate
                </h1>
                <p className="text-lg text-black max-w-md font-inter">
                  Ideile tale sunt baza noastră pentru a crea spații unice. Aflați cum facem visele să devină realitate
                </p>
              </div>
              <div className="flex items-center font-inter text-xl font-medium shadow-md text-black z-20 justify-center bg-white rounded-[16px] px-10 py-5 border-2 border-[#D9D9D9] cursor-pointer hover:bg-gray-100 transition-colors duration-300">
                <p>Aflati despre noi</p>
                <Image src='/svgs/right-arrow.svg' alt='arrow' width={20} height={20} className='ml-2 inline-block' />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Hero