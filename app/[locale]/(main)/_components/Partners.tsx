'use client'
import Image from "next/image";
import React from 'react';
import { useTranslations } from 'next-intl';

export default function Partners() {
    const t = useTranslations();

    const partners = [
        {
            id: 1,
            name: "EGLO",
            logo: "/images/partners1.png",
            alt: t('partners.eglo_alt')
        },
        {
            id: 2,
            name: "TANDEM",
            logo: "/images/partners2.png",
            alt: t('partners.tandem_alt')
        },
        {
            id: 3,
            name: "Lustre.ro",
            logo: "/images/partners3.png",
            alt: t('partners.lustre_alt')
        },
        {
            id: 4,
            name: "MOBEXPERT",
            logo: "/images/partners4.png",
            alt: t('partners.mobexpert_alt')
        },
        {
            id: 5,
            name: "Vioni",
            logo: "/images/partners5.png",
            alt:  t('partners.vioni_alt')
        },
        {
            id: 6,
            name: "WallDeco",
            logo: "/images/partners6.png",
            alt: "2112"
        },
        {
            id: 7,
            name: "Elves",
            logo: "/images/partners7.png",
            alt: t('partners.elves_alt')
        }
    ];

    // Duplicate partners array for seamless scrolling
    const duplicatedPartners = [...partners, ...partners];

    const stats = [
        {
            id: 1,
            number: "10",
            suffix: "+",
            label: t('partners.years_on_market'),
            color: "text-black"
        },
        {
            id: 2,
            number: "110",
            suffix: "+",
            label: t('partners.projects_done'),
            color: "text-black"
        },
        {
            id: 3,
            number: "25",
            suffix: "+",
            label: t('partners.eu_projects'),
            color: "text-black"
        },
        {
            id: 4,
            number: "300",
            suffix: "+",
            label: t('partners.happy_clients'),
            color: "text-black"
        }
    ];

    return (
        <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black">
                        {t('partners.title')}
                    </h2>
                </div>

                {/* Partners Logos - Auto Scrolling */}
                <div className="relative overflow-hidden mb-16">
                    <div
                        className={`flex gap-8 md:gap-12 lg:gap-16 animate-scroll`}
                        style={{ width: `${duplicatedPartners.length * 160}px` }}
                    >
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={`${partner.id}-${index}`}
                                className="flex items-center justify-center h-12 md:h-16 flex-shrink-0"
                                style={{ width: '120px' }}
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.alt}
                                    width={120}
                                    height={60}
                                    className="max-h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Statistics Card */}
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 font-inter">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center justify-center text-center">
                                <div className="mb-3">
                                    <span className={`text-4xl md:text-5xl lg:text-6xl font-bold ${stat.color}`}>
                                        {stat.number}
                                    </span>
                                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400">
                                        {stat.suffix}
                                    </span>
                                </div>
                                <p className="text-sm w-fit flex items-center justify-center md:text-base text-neutral-700 text-center font-medium leading-tight">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Custom CSS for scrolling animation */}
                <style jsx>{`
                  @keyframes scroll {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-${partners.length * 160}px);
                    }
                  }
                  
                  .animate-scroll {
                    animation: scroll 20s linear infinite;
                  }
                `}</style>
            </div>
        </section>
    );
}