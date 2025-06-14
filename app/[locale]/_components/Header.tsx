'use client'
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslations } from "next-intl"
import { useRouter } from "@/i18n/navigation"
import { Menu, X } from "lucide-react"

const NAV_ITEMS = [
  { key: "about", link: "/about" },
  { key: "services", link: "/services" },
  { key: "proiecte", link: "/projects" },
  { key: "contacte", link: "/contacts" }
];

const Header = () => {
  const t = useTranslations('header');
  const router = useRouter()

  const handlePush = (link: string) => {
    try {
      router.push(link);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }

  const [scroll, setScroll] = useState({ y: 0, prevY: 0, dir: 'up' as 'up' | 'down' });
  const [scrollAmount, setScrollAmount] = useState({ oldScroll: 'up' as 'up' | 'down', amount: 0 });
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (scroll.dir !== scrollAmount.oldScroll) {
      setScrollAmount({ oldScroll: scroll.dir, amount: 0 })
    } else {
      setScrollAmount(prev => ({ oldScroll: scroll.dir, amount: prev.amount + Math.abs(scroll.prevY - scroll.y) }))
    }
  }, [scroll, scrollAmount.oldScroll])

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.pageYOffset;
      setScroll(prev => ({ 
        y: currentY, 
        prevY: prev.y, 
        dir: (prev.y - currentY) < 0 ? 'down' : 'up' 
      }));
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const handleMenuItemClick = (link: string) => {
    setMenuOpen(false);
    handlePush(link);
  };

  return (
    <div className="relative">
      <div
        className={cn(
          `font-inter bg-transparent fixed left-0 right-0 flex justify-between items-center z-50 transition-transform duration-300`,
          // Responsive height adjustments
          `h-[100px] sm:h-[90px] md:h-[100px] lg:h-[110px]`,
          { 'translate-y-[-150%]': scroll.dir === 'down' && scroll.y > 100 }
        )}
      >
        {/* Left section with logo and language switcher */}
        <div className={cn(
          "flex items-center rounded-br-3xl cursor-pointer bg-white h-full transition-all duration-200",
          // Responsive spacing and padding
          "gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-32",
          "px-3 sm:px-4 md:px-6 lg:px-8 xl:px-[4%]",
          // Responsive width control
          "min-w-fit max-w-[60%] sm:max-w-[55%] md:max-w-[50%] lg:max-w-none"
        )}>
          <div onClick={() => handlePush(`/`)} className="flex-shrink-0">
            <Image 
              src='/images/logo.png' 
              width={74} 
              height={74} 
              alt="logo"
              priority
              className={cn(
                // Responsive logo sizing
                "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[74px] lg:h-[74px]",
                "object-contain"
              )}
            />
          </div>
          
          {/* Language switcher - hidden on very small screens, shown on larger */}
          <div className="hidden xs:flex sm:flex items-center flex-shrink-0">
            <LanguageSwitcher className="text-sm sm:text-base" />
          </div>
        </div>
        
        {/* Mobile menu button */}
        <motion.button
          className={cn(
            "lg:hidden bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 relative",
            // Responsive button sizing and positioning
            "p-2 sm:p-2.5 md:p-3",
            "mr-2 sm:mr-3 md:mr-4",
            "w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12",
            "flex items-center justify-center",
            menuOpen ? "z-[60]" : "z-50"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <X size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-700" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-700" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        
        {/* Desktop navigation */}
        <div className={cn(
          "hidden lg:flex bg-white rounded-bl-2xl h-full transition-all duration-200",
          // Responsive desktop navigation spacing
          "gap-6 xl:gap-8 2xl:gap-10",
          "px-4 lg:px-6 xl:px-8 2xl:px-[4%]"
        )}>
          <ul className={cn(
            "flex items-center text-nowrap",
            // Responsive text sizing and spacing
            "gap-3 lg:gap-4 xl:gap-5 2xl:gap-6",
            "text-base lg:text-lg xl:text-xl"
          )}>
            {NAV_ITEMS.map(({ key, link }) => (
              <motion.li
                key={key}
                className="cursor-pointer font-inter text-black transition-colors duration-200 hover:text-[#FF001D] px-2 py-1 rounded-md hover:bg-gray-50"
                onClick={() => handlePush(link)}
                whileHover={{ 
                  scale: 1.05,
                  y: -1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t(`nav.${key}`)}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Mobile menu panel */}
            <motion.div
              className={cn(
                "lg:hidden fixed top-0 right-0 bottom-0 z-50 shadow-2xl",
                // Responsive menu width
                "w-[90%] xs:w-[85%] sm:w-[75%] md:w-[65%]",
                "max-w-sm sm:max-w-md"
              )}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 backdrop-blur-lg border-l border-gray-200/50">
                {/* Header section */}
                <div className={cn(
                  "border-b border-gray-200/30",
                  "pt-6 sm:pt-8 pb-4 sm:pb-6",
                  "px-4 sm:px-5 md:px-6"
                )}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Image 
                        src='/images/logo.png' 
                        width={32} 
                        height={32} 
                        alt="logo"
                        priority
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Menu</h3>
                      <p className="text-gray-500 text-xs sm:text-sm">Navigate</p>
                    </div>
                  </div>
                  
                  {/* Language switcher for mobile (shown only on very small screens) */}
                  <div className="xs:hidden mt-4 pt-4 border-t border-gray-200/30">
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50">
                      <p className="text-gray-600 text-xs font-medium mb-2">Language</p>
                      <LanguageSwitcher className="text-gray-700 text-sm" />
                    </div>
                  </div>
                </div>

                {/* Navigation items */}
                <div className={cn(
                  "py-4 sm:py-6",
                  "px-3 sm:px-4 md:px-5"
                )}>
                  <motion.ul 
                    className="space-y-1 sm:space-y-2"
                    variants={menuVariants}
                  >
                    {NAV_ITEMS.map(({ key, link }, index) => (
                      <motion.li
                        key={key}
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.01,
                          x: 2,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        custom={index}
                      >
                        <button
                          className={cn(
                            "w-full text-left cursor-pointer font-inter text-gray-700 font-medium hover:text-[#FF001D] transition-all duration-300 rounded-xl hover:bg-white/70 hover:shadow-md border border-transparent hover:border-gray-200/50 group",
                            // Responsive button sizing
                            "text-base sm:text-lg",
                            "py-3 sm:py-4",
                            "px-3 sm:px-4"
                          )}
                          onClick={() => handleMenuItemClick(link)}
                        >
                          <div className="flex items-center justify-between">
                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                              {t(`nav.${key}`)}
                            </span>
                            <div className={cn(
                              "rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#FF001D] transition-colors duration-200",
                              "w-5 h-5 sm:w-6 sm:h-6"
                            )}>
                              <div className={cn(
                                "bg-gray-400 rounded-full group-hover:bg-white transition-colors duration-200",
                                "w-1 h-1 sm:w-1.5 sm:h-1.5"
                              )}></div>
                            </div>
                          </div>
                        </button>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                
                {/* Language switcher for larger mobile screens */}
                <motion.div
                  className="xs:flex hidden mt-auto pt-4 sm:pt-6 px-4 sm:px-5 md:px-6 border-t border-gray-200/30"
                  variants={itemVariants}
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-200/50 w-full">
                    <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">Language</p>
                    <LanguageSwitcher className="text-gray-700" />
                  </div>
                </motion.div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF001D] via-pink-400 to-purple-400"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header