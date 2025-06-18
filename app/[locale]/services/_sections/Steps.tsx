import StepRight from "../_components/StepRight";
import StepLeft from "../_components/StepLeft";
import { useTranslations } from 'next-intl';

export default function Steps() {
    const t = useTranslations();

    return (
        <div>
            <p className="w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bricolage font-bold px-4 sm:px-0">
                {t('steps.title')}
            </p>
            <p className="px-4 sm:px-[10%] md:px-[15%] lg:px-[20%] text-center text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                {t('steps.description')}
            </p>
            <StepRight
                titleKey="steps.concept_title"
                contentKey="steps.concept_description"
                imagePath="/images/steps1.jpg"
                number="01"
            />
            <StepLeft
                titleKey="steps.space_design_title"
                contentKey="steps.space_design_description"
                imagePath="/images/steps2.jpg"
                number="02"
            />
            <StepRight
                titleKey="steps.modeling_3d_title"
                contentKey="steps.modeling_3d_description"
                imagePath="/images/steps3.jpg"
                number="03"
            />
            <StepLeft
                titleKey="steps.execution_details_title"
                contentKey="steps.execution_details_description"
                imagePath="/images/steps4.jpg"
                number="04"
            />
            <StepRight
                titleKey="steps.materials_selection_title"
                contentKey="steps.materials_selection_description"
                imagePath="/images/steps5.jpg"
                number="05"
            />
        </div>
    )
}