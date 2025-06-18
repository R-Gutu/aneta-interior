import Image from 'next/image'
import React from 'react'
import Projects from './_components/Projects'
import Form from '../_components/Form'
import { useTranslations } from 'next-intl'

const page = () => {
  const t = useTranslations('projects');
  return (
    <div className='pt-20 sm:pt-32 lg:pt-40'>
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col gap-6 sm:gap-8 lg:gap-10">
        <h1 className='font-bricolage text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10'>
          {t('home')}
        </h1>
        <Image 
          src='/images/projects-hero.png' 
          alt='project' 
          width={15000} 
          height={200} 
          className='w-full h-auto' 
        />
      </div>
      <Projects />
      <Form/>
    </div>
  )
}

export default page