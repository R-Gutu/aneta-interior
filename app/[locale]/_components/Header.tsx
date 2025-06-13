'use client'
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslations } from "next-intl"
import { useRouter } from "@/i18n/navigation"

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

  // Fixed scroll state - uncommented and properly initialized
  const [scroll, setScroll] = useState({ y: 0, prevY: 0, dir: 'up' as 'up' | 'down' });
  const [scrollAmount, setScrollAmount] = useState({ oldScroll: 'up' as 'up' | 'down', amount: 0 });
  const [menuOpen, setMenuOpen] = useState(false)

  // Fixed scroll effect
  useEffect(() => {
    if (scroll.dir !== scrollAmount.oldScroll) {
      setScrollAmount({ oldScroll: scroll.dir, amount: 0 })
    } else {
      setScrollAmount(prev => ({ oldScroll: scroll.dir, amount: prev.amount + Math.abs(scroll.prevY - scroll.y) }))
    }
  }, [scroll, scrollAmount.oldScroll])

  // Fixed scroll listener
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

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
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
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
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
        duration: 0.5
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
          `font-inter bg-transparent fixed left-0 right-0 flex justify-between items-center z-50 h-[100px] transition-transform duration-300`,
          { 'translate-y-[-150%]': scroll.dir === 'down' && scroll.y > 100 }
        )}
        // style={{
        //   backgroundColor: `rgba(255, 255, 255, ${Math.max(scroll.y / 200, 0.1)})`
        // }}
      >
        <div
          className="flex items-center gap-32 rounded-br-3xl cursor-pointer bg-white h-full px-[4%] max-[690px]:px-[8%]"
        >
          <div onClick={() => handlePush(`/`)} className="">
          <Image 
            src='/images/logo.png' 
            width={74} 
            height={74} 
            alt="logo"
            priority
          />
          </div>
          <div className="flex items-center">
            <LanguageSwitcher className="" />
          </div>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={menuOpen ? '/svgs/close.svg' : '/svgs/burger.svg'}
            onClick={() => setMenuOpen(prev => !prev)}
            width={55}
            height={55}
            alt={menuOpen ? "Close menu" : "Open menu"}
            className="cursor-pointer min-[1000px]:hidden" 
          />
        </motion.div>
        
        <div className="flex gap-10 max-[1000px]:hidden bg-white rounded-bl-2xl h-full px-[4%] max-[690px]:px-[8%]">
          <ul className="flex gap-5 items-center text-nowrap text-xl">
            {NAV_ITEMS.map(({ key, link }) => (
              <motion.li
                key={key}
                className="cursor-pointer font-inter text-black transition-colors duration-200"
                onClick={() => handlePush(link)}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
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

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              className="min-[1000px]:hidden fixed inset-0 bg-black/50 z-40"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Mobile menu */}
            <motion.div
              className="min-[1000px]:hidden fixed top-0 left-0 right-0 z-50 overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="bg-gradient-to-b from-black via-gray-900 to-black pt-[100px] pb-[40px] shadow-2xl">
                <motion.ul 
                  className="flex flex-col gap-6 items-center text-nowrap px-8"
                  variants={menuVariants}
                >
                  {NAV_ITEMS.map(({ key, link }, index) => (
                    <motion.li
                      key={key}
                      className="cursor-pointer font-inter text-white text-lg hover:text-[#FF001D] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10 w-full text-center max-w-[500px]"
                      onClick={() => handleMenuItemClick(link)}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      custom={index}
                    >
                      {t(`nav.${key}`)}
                    </motion.li>
                  ))}
                  
                  {/* Language switcher in mobile menu */}
                  <motion.div
                    className="mt-4 pt-4 border-t border-white/20"
                    variants={itemVariants}
                  >
                    <LanguageSwitcher className="text-white" />
                  </motion.div>
                </motion.ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header