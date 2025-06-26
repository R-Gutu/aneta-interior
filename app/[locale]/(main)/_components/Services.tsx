'use client'

import { useRouter } from '@/i18n/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Services = () => {
    const router = useRouter()
    const t = useTranslations()

    const handlePush = (link: string) => {
        try {
            router.push(link)
        } catch (error) {
            console.error('Navigation error:', error)
        }
    }

    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 lg:py-10 font-inter">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl my-6 sm:my-8 lg:my-10 font-bricolage">
                {t('services.title')}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-stretch">
                {/* Card 1 */}
                <div className="flex flex-col items-center text-center gap-3 h-full">
                    <Image
                        src="/images/service1.jpg"
                        alt={t('services.design3d_alt')}
                        width={500}
                        height={300}
                        className="w-full lg:h-[385px] md:h-auto object-cover rounded-br-lg rounded-tl-lg rounded-tr-[140px] rounded-bl-[140px]"
                    />
                    <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl font-bricolage">
                        {t('services.design3d_title')}
                    </h2>
                    <p className="text-base sm:text-lg">
                        {t('services.design3d_description')}
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center text-center gap-3 h-full">
                    <Image
                        src="/images/service2.jpg"
                        alt={t('services.design_avansat_alt')}
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover rounded-br-lg rounded-tl-lg rounded-tr-[140px] rounded-bl-[140px]"
                    />
                    <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl font-bricolage">
                        {t('services.design_avansat_title')}
                    </h2>
                    <p className="text-base sm:text-lg">
                        {t('services.design_avansat_description')}
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center text-center gap-3 h-full">
                    <Image
                        src="/images/service3.jpg"
                        alt={t('services.design_all_inclusive_alt')}
                        width={500}
                        height={300}
                        className="w-full lg:h-[385px] md:h-auto object-cover rounded-br-lg rounded-tl-lg rounded-tr-[140px] rounded-bl-[140px]"
                    />
                    <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl font-bricolage">
                        {t('services.design_all_inclusive_title')}
                    </h2>
                    <p className="text-base sm:text-lg">
                        {t('services.design_all_inclusive_description')}
                    </p>
                </div>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center mt-10 sm:mt-12">
                <div
                    onClick={() => handlePush('/services')}
                    className="flex items-center justify-center text-lg sm:text-xl font-medium shadow-md text-black bg-white rounded-[16px] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 border-[#D9D9D9] cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                    <p>{t('services.see_services_button')}</p>
                    <Image
                        src="/svgs/right-arrow.svg"
                        alt={t('services.arrow_alt')}
                        width={20}
                        height={20}
                        className="ml-2 inline-block"
                    />
                </div>
            </div>
        </div>
    )
}

export default Services
