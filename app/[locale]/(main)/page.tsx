import React from 'react'
import Hero from './_components/Hero'
import Services from './_components/Services'
import Projects from './_components/Projects'
import Partners from './_components/Partners'
import CEO from './_components/CEO'

const page = () => {
  return (
    <div>
        <Hero />
        <Services />
        <Projects />
        <Partners />
        <CEO />
    </div>
  )
}

export default page