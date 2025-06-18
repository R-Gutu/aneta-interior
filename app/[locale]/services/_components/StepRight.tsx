import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function StepRight({ titleKey, contentKey, imagePath, number } : {
    titleKey: string;
    contentKey: string;
    imagePath: string;
    number: string;
}) {
    const t = useTranslations();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 sm:mt-10 gap-6 lg:gap-0 px-5 lg:px-10">
            {/* Image Section */}
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full flex justify-center lg:justify-end lg:pr-5 lg:pb-5 lg:border-r-3 lg:border-b-3 border-[#EAE9E5] order-2 lg:order-1">
                <div className="relative w-full max-w-md lg:max-w-none lg:w-full lg:h-full">
                    <Image
                        src={imagePath}
                        alt={t(titleKey)}
                        fill
                        className="object-cover rounded-br-[50px] rounded-tl-[50px] sm:rounded-br-[75px] sm:rounded-tl-[75px] lg:rounded-br-[100px] lg:rounded-tl-[100px]"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="grid grid-rows-1 lg:grid-rows-2 gap-4 lg:gap-5 order-1 lg:order-2">
                {/* Title Section */}
                <div className="font-bricolage flex flex-col sm:flex-row items-start sm:items-center pb-4 lg:pb-5 border-b-2 lg:border-b-3 border-[#EAE9E5]">
                    <p className="font-bricolage font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[160px] 2xl:text-[220px] leading-none text-[#A0928533] mb-2 sm:mb-0">
                        {number}
                    </p>
                    <p className="text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:ml-[-3%] lg:ml-[-5%] flex-1">
                        {t(titleKey)}
                    </p>
                </div>

                {/* Content Text */}
                <div className="lg:pl-5">
                    <p className="font-inter font-semibold text-base sm:text-lg lg:text-xl text-[#383838] leading-relaxed">
                        {t(contentKey)}
                    </p>
                </div>
            </div>
        </div>
    )
}