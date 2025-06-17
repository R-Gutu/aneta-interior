import React from 'react';
import Image from 'next/image';

export default function InteriorShowcase() {
  return (
    <div className="py-8 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-16 lg:space-y-20 xl:space-y-24">
        
        {/* Main Title */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black font-bricolage leading-tight">
            Interior urban, gândit cu grijă
          </h1>
        </div>

        {/* Cluj Chic Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch border-b-2 border-[#EAE9E5]">
          {/* Image */}
          <div className="order-2 lg:order-1 lg:border-r-2 lg:pr-6 pb-6 border-[#EAE9E5] h-full">
            <Image
              src="/images/interior1.png"
              alt="Cluj Chic Interior Design"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
            <div className="p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 relative">
              <div className="flex-shrink-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black font-bricolage leading-none">
                    Cluj
                </h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black font-bricolage leading-none">
                    Chic
                </h2>
              </div>
              <div className="absolute left-[200px] md:top-[-80px] top-[-50px] w-full sm:w-auto max-w-[100px] md:max-w-[150px]">
                <Image
                    src="/images/interior3.png"
                    width={200}
                    height={200}
                    alt='interior'
                    className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="border-t-2 border-[#EAE9E5] py-4 md:py-6 px-4 md:px-6 lg:px-12 flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1">
                <p className="text-sm sm:text-base lg:text-lg text-[#383838] font-inter leading-relaxed mb-3 md:mb-4">
                    <span className="font-semibold">Design Interior Modern și Confortabil cu Elemente de Chic Urban.</span>
                </p>
                
                <p className="text-sm sm:text-base text-[#383838] font-inter leading-relaxed">
                    Acest spațiu îmbină eleganța contemporană cu elemente urbane printr-o finisare caldă de detalii elegante. Spațiul combină forma naturală, tonurile neutre și accentele aurii pentru a crea un ambient sofisticat și primitor.
                </p>
                </div>
            {/* Arrow indicator */}
            <div className="flex items-end justify-end md:justify-center flex-shrink-0">
              <Image
                src="/svgs/right-arrow.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6 opacity-70"
              />
            </div>
            </div>
          </div>
        </div>

        {/* Urban Harmony Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch border-b-2 border-[#EAE9E5]">
          {/* Content */}
          <div className="order-1 space-y-4 md:space-y-6">
            <div className="p-4 md:p-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black font-bricolage leading-none">
                Urban
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black font-bricolage leading-none">
                Harmony
              </h2>
            </div>
            
            <div className="border-t-2 border-[#EAE9E5] flex flex-col md:flex-row w-full p-4 md:p-6 gap-4 md:gap-6">
              <p className="text-sm sm:text-base text-[#383838] font-inter leading-relaxed flex-1">
                Designul pune accent pe liniile clare, funcționalitatea optimizată și o paletă cromatică relaxantă. Mobilierul minimalist și detaliile discrete creează un echilibru perfect între utilitate și stil.
              </p>
                {/* Arrow indicator */}
                <div className="flex items-end justify-end md:justify-center flex-shrink-0">
                <Image
                    src="/svgs/right-arrow.svg"
                    alt="Arrow"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6 opacity-70"
                />
                </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-2 lg:border-l-2 border-[#EAE9E5] lg:pl-6 pb-6">
            <Image
              src="/images/interior2.png"
              alt="Urban Harmony Interior Design"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}