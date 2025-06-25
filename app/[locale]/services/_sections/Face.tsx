'use client'
import Image from "next/image"
import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';

export default function Face() {
    const t = useTranslations(); // Added Translations Hook

    // Animation variants for container
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    // Animation variants for left image (slide in from left)
    const leftImageVariants: Variants = {
        hidden: { 
            opacity: 0, 
            x: -60,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            x: 0,
            scale: 1,
            transition: { 
                duration: 0.8
            }
        }
    };

    // Animation variants for text content (slide in from right)
    const textVariants: Variants = {
        hidden: { 
            opacity: 0, 
            x: 40,
            y: 20
        },
        visible: { 
            opacity: 1, 
            x: 0,
            y: 0,
            transition: { 
                duration: 0.7
            }
        }
    };

    // Animation variants for individual text elements
    const titleVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: 30
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6
            }
        }
    };

    const subtitleVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: 20
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6,
                delay: 0.1
            }
        }
    };

    // Animation variants for bottom image (slide in from bottom)
    const bottomImageVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: 60,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { 
                duration: 0.8,
                delay: 0.2
            }
        }
    };

    return (
        <motion.div 
            className='pt-[80px] sm:pt-[100px] lg:pt-[120px] grid grid-cols-1 lg:grid-cols-[1fr_2fr] px-4 sm:px-8 lg:px-20 py-6 sm:py-8 lg:py-10 min-h-screen lg:h-screen gap-6 sm:gap-8 lg:gap-10'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Left Image */}
            <motion.div 
                className='rounded-bl-[40px] sm:rounded-bl-[60px] lg:rounded-bl-[100px] rounded-tr-[40px] sm:rounded-tr-[60px] lg:rounded-tr-[100px] overflow-hidden relative h-[250px] sm:h-[350px] lg:h-auto'
                variants={leftImageVariants}
                whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                }}
            >
                <Image
                    priority
                    src={"/images/services-left.svg"}
                    fill
                    className='object-cover'
                    alt={t('face.services_left_alt')} // LOCALIZED Image alt
                />
            </motion.div>

            {/* Right Content */}
            <motion.div 
                className='grid grid-rows-[auto_1fr] lg:grid-rows-[1fr_1fr] gap-6 sm:gap-8'
                variants={textVariants}
            >
                {/* Text Section */}
                <motion.div 
                    className='flex flex-col gap-3 sm:gap-4 lg:gap-5'
                    variants={textVariants}
                >
                    <motion.p 
                        className='font-bricolage text-6xl max-[350px]:text-2xl max-[450px]:text-3xl max-[800px]:text-4xl max-[1205px]:text-5xl font-bold leading-tight'
                        variants={titleVariants}
                    >
                        {t('face.discover_h1')}
                    </motion.p>
                    <motion.p 
                        className='font-dancing-script text-xl sm:text-2xl lg:text-4xl'
                        variants={subtitleVariants}
                    >
                        {t('face.discover_h2')}
                    </motion.p>
                </motion.div>

                {/* Bottom Image */}
                <motion.div 
                    className='rounded-br-[40px] sm:rounded-br-[60px] lg:rounded-br-[100px] rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[100px] overflow-hidden relative h-[200px] sm:h-[280px] lg:h-auto'
                    variants={bottomImageVariants}
                    whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                    }}
                >
                    <Image
                        priority
                        src={"/images/services-bottom.png"}
                        fill
                        className='object-cover object-[center_90%]'
                        alt={t('face.services_bottom_alt')} // LOCALIZED Image alt
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}