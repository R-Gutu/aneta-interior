'use client'

import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl'; // or from "react-i18next"
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function CEO() {
  const t = useTranslations();
  const router = useRouter();
  const handlePush = (link: string) => {
      try {
          router.push(link);
      } catch (error) {
          console.error('Navigation error:', error);
      }
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className={cn("absolute left-[5%] sm:left-[8%] lg:left-[10%] top-[280px] flex flex-col items-start justify-start gap-4", "max-sm:hidden")}>
        <h2 className='text-2xl sm:text-3xl lg:text-5xl font-bold text-black font-bricolage z-20'>
          {t('ceo.title')}<br/>
          <span>{t('ceo.subtitle')}</span>
        </h2>
        <p className='text-xl sm:text-2xl lg:text-3xl font-medium text-black font-dancing-script'>{t('ceo.name')}</p>
        <div onClick={() => handlePush('/about')} className="flex items-center font-inter text-lg sm:text-xl font-medium shadow-md text-black z-20 justify-center bg-white rounded-[16px] px-8 sm:px-10 py-4 sm:py-5 border-2 border-[#D9D9D9] hover:scale-105 cursor-pointer hover:bg-gray-100 transition-all duration-300">
            <p>{t('ceo.see_services')}</p>
            <Image src='/svgs/right-arrow.svg' alt={t('ceo.arrow_alt')} width={20} height={20} className='ml-2 inline-block' />
        </div>
      </div>
      {/* Hero Section */}
        <div className="flex items-center justify-center text-black font-bold font-bricolage text-center z-10 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl mb-4 leading-tight">
            {t('ceo.hero_title')}<br />
            <span className="text-center">{t('ceo.hero_subtitle')}</span>
          </h1>
        </div>
        <div className={cn("flex items-center justify-center px-4", "max-xl:justify-end max-sm:justify-center")}>
          <Image
            src="/images/ceo.png"
            alt={t('ceo.image_alt')}
            width={700}
            height={700}
            className='ml-0 sm:ml-10 lg:ml-20 w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] h-auto'
          />
        </div>
      <div className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-4">
      {/* Background Image */}
      <Image 
        src="/images/contact.png" 
        alt={t('ceo.contact_bg_alt')}
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className={"relative z-20 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto"}>
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 drop-shadow-lg font-bricolage">
          {t('ceo.cta_title')}
        </h1>
        <div onClick={() => handlePush('/contacts')} className="bg-white px-6 py-4 rounded-full shadow-lg text-center font-inter text-black font-bold text-lg sm:text-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-block">
          {t('ceo.contact_us')}
        </div>
      </div>
    </div>
  </div>
  );
}