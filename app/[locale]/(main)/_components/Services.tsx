'use client'
import { useRouter } from '@/i18n/navigation'
import Image from 'next/image'

const Services = () => {
    const router = useRouter()
    const handlePush = (link: string) => {
        try {
            router.push(link);
        } catch (error) {
            console.error('Navigation error:', error);
        }
    }
  return (
    <div className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 lg:py-10 font-inter'>
        <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl my-6 sm:my-8 lg:my-10 font-bricolage'>Servicii</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            <div className="flex flex-col gap-3">
                <Image src="/images/service1.png" alt="Services Image" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
                <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl font-bricolage'>Design 3D</h2>
                <p className='font-inter text-base sm:text-lg'>Vizualizare & Concept</p>
            </div>
            <div className="flex flex-col gap-3">
                <Image src="/images/service2.png" alt="Services Image" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
                <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl font-bricolage'>DESIGN AVANSAT</h2>
                <p className='font-inter text-base sm:text-lg'>Proiect Complet de Amenajare</p>
            </div>
            <div className="flex flex-col gap-3">
                <Image src="/images/service3.png" alt="Services Image" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
                <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl font-bricolage'>DESIGN ALL-INCLUSIVE</h2>
                <p className='font-inter text-base sm:text-lg'>Proiect + Implementare</p>
            </div>
        </div>
        <div className="flex items-center justify-center mt-8 sm:mt-10">
            <div onClick={() => handlePush('/services')} className="flex items-center font-inter text-lg sm:text-xl font-medium shadow-md text-black z-20 justify-center bg-white rounded-[16px] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 border-[#D9D9D9] cursor-pointer hover:bg-gray-100 transition-all hover:scale-105 duration-300">
                <p>Vezi serviciile</p>
                <Image src='/svgs/right-arrow.svg' alt='arrow' width={20} height={20} className='ml-2 inline-block' />
            </div>
        </div>
    </div>
  )
}

export default Services