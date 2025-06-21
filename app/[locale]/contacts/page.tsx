import React from 'react'
import Image from 'next/image'
import FormElement from '../_components/FormElement'
import { useTranslations } from 'next-intl'

const ContactPage = () => {
  const t = useTranslations('contact');



  const socials = [
    { link: "https://www.instagram.com/aneta.interior", image: "/svgs/instagram.svg", name: "instagram" },
    { link: "https://www.tiktok.com/@aneta.interior", image: "/svgs/tiktok.svg", name: "tiktok" },
    { link: "https://www.facebook.com/aneta.interior", image: "/svgs/facebook.svg", name: "facebook" },
    { link: "https://wa.me/40732678611", image: "/svgs/whatsapp.svg", name: "whatsapp" },
    { link: "https://t.me/Anetainterior25", image: "/svgs/telegram.svg", name: "telegram" },
    { link: "https://www.behance.net/anetainterior", image: "/svgs/behance.svg", name: "behance" },
    { link: "https://www.pinterest.com/anetainterior", image: "/svgs/pinterest.svg", name: "pinterest" },
  ];


  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto pt-[100px]">
        {/* Title */}
        <h1 className="text-4xl xs:text-6xl sm:text-7xl md:text-8xl font-bold text-gray-900 mb-8 text-center md:text-left font-bricolage">
          {t('title')}
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 bg-white rounded-lg shadow-lg overflow-hidden">

          {/* Left Panel - Contact Info */}
          <div className="relative bg-gray-800 text-white p-8 flex flex-col justify-between min-h-[500px] lg:min-h-[600px]">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-70">
              <Image
                src="/images/contactus.png"
                alt="Contact us background"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col justify-between h-full">

              {/* Top Section - Title */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold font-poppins mb-4 leading-tight">
                  {t('subtitle')}
                </h2>
              </div>

              {/* Middle Section - Contact Details */}
              <div className="space-y-6 my-8">
                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Image src="/svgs/phone.svg" alt="Phone Icon" width={32} height={32} />
                  <span className="text-sm md:text-base">+40 732 678 611</span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Image src="/svgs/letter.svg" alt="Email Icon" width={32} height={32} />
                  <span className="text-sm md:text-base">anetainterior@gmail.com</span>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-3">
                  <Image src="/svgs/location.svg" alt="Location Icon" width={32} height={32} />
                  <span className="text-sm md:text-base">România</span>
                </div>
              </div>

              {/* Bottom Section - Social Media Icons */}
              <div className="flex lg:flex-col max-[390px]:flex-wrap justify-center gap-3">
                {socials.map(({ link, image, name }, i) => (
                  <a
                    key={i}
                    href={link || "#"}
                    className=""
                    aria-label={`Follow us on ${name}`}
                  >
                    <Image
                      src={image}
                      width={40}
                      height={40}
                      alt={`${name} icon`}
                      className="transition-all duration-300 hover:brightness-110 hover:scale-110 hover:-translate-y-1"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="p-8">
            <FormElement />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage