import Accordion from "../_components/Accordion"
import { useTranslations } from 'next-intl';

export default function OurServices() {
    const t = useTranslations();
    
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-8">
                <p className="w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bricolage font-bold px-4 sm:px-0">
                    {t('ourServices.title')}
                </p>
                <p className="px-4 sm:px-[10%] md:px-[15%] lg:px-[20%] text-center text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    {t('ourServices.description')}
                </p>
                <Accordion
                    titleKey="ourServices.design3d_title"
                    contentKey="ourServices.design3d_description"
                    imagePath="/images/faq1.png"
                    link="/projects"
                />
                <Accordion
                    titleKey="ourServices.design_avansat_title"
                    contentKey="ourServices.design_avansat_description"
                    imagePath="/images/faq1.png"
                    link="/projects"
                />
                <Accordion
                    titleKey="ourServices.design_all_inclusive_title"
                    contentKey="ourServices.design_all_inclusive_description"
                    imagePath="/images/faq1.png"
                    link="/projects"
                />
            </div>
        </div>
    )
}