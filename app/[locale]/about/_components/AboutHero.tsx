'use client'
import { useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl'; // Added Import statement

export default function AboutHero() {
    const t = useTranslations(); //Initialize the translation
    const router = useRouter()
        const handlePush = (link: string) => {
            try {
                router.push(link);
            } catch (error) {
                console.error('Navigation error:', error);
            }
        }
  return (
    <div className="pt-16 md:pt-20 lg:pt-30 flex flex-col gap-3 md:gap-5">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-50 gap-6 lg:gap-0">
            <h1 className='text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-bree-serif leading-tight'>
                {t('aboutHero.title')}<br />
                <span className="">{t('aboutHero.interior_span')}</span>
            </h1>
            <p className='text-sm sm:text-base font-inter text-[#383838] max-w-full lg:max-w-xl leading-relaxed lg:leading-tight'>
                {t('aboutHero.description_part1')}<br/><br/>
                {t('aboutHero.description_part2')}
            </p>
        </div>

        {/* Image Section */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20">
            <Image 
                src="/images/about-hero.jpg"
                alt={t('aboutHero.image_alt')} 
                width={2284}
                height={696}
                priority
                className='w-full h-100 object-cover object-center mt-6 md:mt-8 lg:mt-10 rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-[130px]' 
            />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 md:gap-8 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-20">
            <p className='text-sm sm:text-base font-inter text-[#383838] max-w-full md:max-w-xl leading-relaxed md:leading-tight order-2 md:order-1'>
                {t('aboutHero.bottom_description')}
            </p>
            <div onClick={() => handlePush('/projects')} className="flex items-center font-inter text-sm sm:text-base lg:text-lg font-medium shadow-md text-[#454545] z-20 justify-center bg-white rounded-[16px] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-[#D9D9D9] cursor-pointer hover:bg-gray-100 transition-all hover:scale-105 duration-300 w-full sm:w-auto md:w-auto whitespace-nowrap order-1 md:order-2">
                <p>{t('aboutHero.our_projects')}</p>
                <Image 
                    src='/svgs/right-arrow.svg' 
                    alt={t('aboutHero.arrow_alt')}
                    width={14} 
                    height={14} 
                    className='ml-2 inline-block w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5' 
                />
            </div>
        </div>
    </div>
  );
}