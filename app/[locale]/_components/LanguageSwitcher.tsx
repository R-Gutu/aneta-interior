'use client'
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import useComponentVisible from "@/lib/hooks/useComponentVisible";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitcher = ({ className }: { className?: string }) => {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const handleChangeLanguage = (value: string) => {
        const newPathname = pathname.replace(`/${currentLocale}`, `/${value}`);
        router.push(newPathname);
    };

    const locales = ['ro', 'en'];

    const {
        ref,
        toggleElement,
        isComponentVisible
    } = useComponentVisible(false);

    return (
        <div className={`${className}`}>
            <div className={`text-[18px] text-black cursor-pointer relative select-none`}>
                <motion.span
                    ref={toggleElement}
                    className={cn('visible p-[1px] text-black small:text-black', { 'invisible pointer-events-none': isComponentVisible })}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {currentLocale.toUpperCase()}
                </motion.span>

                <AnimatePresence>
                    {isComponentVisible && (
                        <motion.ul
                            ref={ref as React.RefObject<HTMLUListElement>}
                            className={cn('absolute px-0.5')}
                            initial={{ opacity: 0, y: -26, height: 0 }}
                            animate={{ opacity: 1, y: -26, height: 'auto' }}
                            exit={{ opacity: 0, y: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {locales.map((locale, index) => (
                                <motion.li
                                    key={locale}
                                    onClick={() => locale === currentLocale ? '' : handleChangeLanguage(locale)}
                                    className={cn('px-[1px]', { 'text-amber-600': locale === currentLocale })}
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {locale.toUpperCase()}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>

    );
};

export default LanguageSwitcher;