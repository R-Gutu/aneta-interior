'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutAna() {
  const t = useTranslations();

  return (
    <div className="py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/about-ana.png"
                alt={t('about.ana_image_alt')}
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black font-bricolage leading-tight">
              {t('about.title')}
            </h2>
            
            <div className="space-y-4 text-[#383838] font-inter leading-relaxed">
              <p className="text-sm sm:text-base lg:text-lg">
                {t('about.paragraph1')}
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg">
                {t('about.paragraph2')}
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg max-[1024px]:hidden">
                {t('about.paragraph3')}
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg max-[1024px]:hidden">
                {t('about.paragraph4')}
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg max-[1024px]:hidden">
                {t('about.paragraph5')}
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-sm sm:text-base font-medium text-[#383838] mb-2 font-bricolage">
                  {t('about.experience_label')}
                </p>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black font-bricolage">
                  10+
                </p>
              </div>
              
              <div>
                <p className="text-sm sm:text-base font-medium text-[#383838] mb-2 font-bricolage">
                  {t('about.projects_label')}
                </p>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black font-bricolage">
                  450+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}