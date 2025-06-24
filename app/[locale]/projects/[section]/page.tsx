import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { projects } from "@/lib/data/projects.data";
import { getTranslations } from "next-intl/server";
import Project from "../_components/Project";
import { getLocale } from "next-intl/server";
type SectionKey = 'living' | 'kitchen' | 'bedroom' | 'bathroom' | 'bedroom_children';

export default async function Page({params}: {params: Promise<{ section: SectionKey }>}) {
    const { section } = await params;
    const t = await getTranslations("projects");
    const locale = await getLocale();

    const filters = [
        { key: 'living', label: t('filters.living') },
        { key: 'kitchen', label: t('filters.bucatarie') },
        { key: 'bedroom', label: t('filters.dormitor') },
        { key: 'bathroom', label: t('filters.baie') },
        { key: 'bedroom_children', label: t('filters.camera_copii') }
    ];
    return (
        <div className='pt-20 sm:pt-32 lg:pt-40'>
            <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col gap-6 sm:gap-8 lg:gap-10">
                <h1 className='font-bricolage text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10'>
                    {t('home')}
                </h1>
                <Image
                    src='/images/project-hero.svg'
                    alt='project'
                    width={800}
                    height={800}
                    priority
                    className='w-full h-auto'
                />
            </div>
            <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 my-8 sm:my-12 font-inter">
                {filters.map(({ key, label }) => (
                    <Link
                        href={`/projects/${key}`}
                        key={key}
                        className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full cursor-pointer text-xs sm:text-sm font-medium font-inter transition-all duration-200 whitespace-nowrap ${section === key
                            ? 'bg-[#CDA274] text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300'
                            }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>
            <div className="flex flex-col gap-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                {projects.filter((p) => section in p).map((p, i) => (
                    (p) ? <Project 
                    left={i%2 === 0}
                    key={i} 
                    title={locale === 'ro' ? p.titleRO : p.titleEN} 
                    description={locale === 'ro' ? p.descriptionRO : p.descriptionEN} 
                    images={p[section as SectionKey]?.map((o) => o.image) ?? []} /> : null
                ))}
            </div>
        </div>
    );
}