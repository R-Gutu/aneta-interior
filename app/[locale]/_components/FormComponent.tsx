import FormElement from "./FormElement"
import { useTranslations } from 'next-intl';
export default function FormComponent() {
  const t = useTranslations('contactForm');
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white pt-[100px]">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-2 font-bricolage">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 font-bricolage">
          {t('subtitle')}
        </p>
        <br /><br /><br />
        <FormElement showPhone={true} />
      </div>
    </div>
  )
}