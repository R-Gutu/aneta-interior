'use client'
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Footer() {
    const t = useTranslations('footer');
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const handleChangeLanguage = (value: string) => {
        const newPathname = pathname.replace(`/${currentLocale}`, `/${value}`);
        router.push(newPathname);
    };

    const socials = [
        { link: "https://www.instagram.com/aneta.interior", image: "/svgs/socials/instagram.svg", name: "instagram" },
        { link: "https://www.tiktok.com/@aneta.interior", image: "/svgs/socials/tiktok.svg", name: "tiktok" },
        { link: "https://www.facebook.com/aneta.interior", image: "/svgs/socials/facebook.svg", name: "facebook" },
        { link: "https://wa.me/40732678611", image: "/svgs/socials/whatsapp.svg", name: "whatsapp" },
        { link: "https://t.me/Anetainterior25", image: "/svgs/socials/telegram.svg", name: "telegram" },
        { link: "https://www.behance.net/anetainterior", image: "/svgs/socials/behance.svg", name: "behance" },
        { link: "https://www.pinterest.com/anetainterior", image: "/svgs/socials/pinterest.svg", name: "pinterest" },
    ];

    const navigationLinks = [
        { name: t('nav.about'), href: "/about" },
        { name: t('nav.services'), href: "/services" },
        { name: t('nav.projects'), href: "/projects" },
        { name: t('nav.contact'), href: "/contacts" }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 py-12 lg:py-16">
                    {/* Left Section */}
                    <div className="space-y-12 lg:space-y-16">
                        {/* Logo and Social Links */}
                        <div className="space-y-6">
                            <div className="group">
                                <Image
                                    src="/images/logo_footer.png"
                                    width={130}
                                    height={130}
                                    alt={t('logoAlt')}
                                    className="rounded-full transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-lg"
                                />
                            </div>

                            {/* Social Media Links */}
                            <div className="flex flex-wrap gap-4">
                                {socials.map(({ link, image, name }, i) => (
                                    <Link
                                        key={i}
                                        href={link || "#"}
                                        className="group relative p-2 rounded-full bg-white shadow-sm border border-gray-200/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/10 hover:scale-110 hover:-translate-y-1"
                                        aria-label={`${t('followUs')} ${name}`}
                                    >
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <Image
                                            src={image}
                                            width={32}
                                            height={32}
                                            alt={`${name} icon`}
                                            className="relative z-10 transition-all duration-300 group-hover:brightness-110"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <h3 className="font-inter font-bold text-black text-xl tracking-wide relative">
                                {t('contactHeading')}
                                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </h3>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="group space-y-2">
                                    <h4 className="font-inter font-bold text-black text-lg">{t('phoneLabel')}</h4>
                                    <Link
                                        href="tel:+40732678611"
                                        className="inline-block font-montserrat text-gray-600 text-sm hover:text-amber-600 transition-colors duration-300 hover:underline decoration-amber-600 underline-offset-4"
                                    >
                                        +40 732 678 611
                                    </Link>
                                </div>

                                {/* Address */}
                                <div className="space-y-2">
                                    <h4 className="font-inter font-bold text-black text-lg">{t('addressLabel')}</h4>
                                    <address className="font-montserrat text-gray-600 text-sm not-italic leading-relaxed">
                                        {t('addressLine1')},<br />
                                        {t('addressLine2')}
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Navigation & Language */}
                    <div className="flex flex-col justify-between space-y-8 lg:space-y-0 lg:min-h-[300px]">
                        {/* Navigation Links */}
                        <nav className="space-y-4 lg:space-y-6">
                            <h3 className="font-inter font-bold text-black text-lg lg:hidden">{t('navLabel')}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-wrap lg:justify-end gap-4 lg:gap-8">
                                {navigationLinks.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="font-inter text-gray-800 hover:text-amber-600 transition-all duration-300 lg:hover:translate-x-2 hover:font-semibold relative group"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300" />
                                    </Link>
                                ))}
                            </div>
                        </nav>

                        {/* Language Selector */}
                        <div className="flex flex-col items-start lg:items-end space-y-3">
                            <h4 className="font-inter text-black font-semibold">{t('languageSelectLabel')}</h4>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => currentLocale === 'ro' ? '' : handleChangeLanguage('ro')}
                                    className={cn(
                                        "cursor-pointer font-montserrat px-3 py-1 rounded-md transition-all duration-300",
                                        currentLocale === 'ro'
                                            ? "text-black font-semibold bg-amber-100 hover:bg-amber-200"
                                            : "text-gray-500 hover:text-gray-800 hover:bg-orange-50"
                                    )}
                                >
                                    {t('languageRO')}
                                </button>
                                <button
                                    onClick={() => currentLocale === 'en' ? '' : handleChangeLanguage('en')}
                                    className={cn(
                                        "cursor-pointer font-montserrat px-3 py-1 rounded-md transition-all duration-300",
                                        currentLocale === 'en'
                                            ? "text-black font-semibold bg-amber-100 hover:bg-amber-200"
                                            : "text-gray-500 hover:text-gray-800 hover:bg-orange-50"
                                    )}
                                >
                                    {t('languageEN')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-200/50 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                        <p className="font-montserrat text-gray-500 text-xs leading-relaxed">
                            {t('copyright')}
                        </p>
                        <p className="font-montserrat text-gray-500 text-xs">
                            {t('createdBy')}&nbsp;
                            <Link
                                target="_blank"
                                href="https://www.quant-apps.com/"
                                className="text-amber-600 hover:text-orange-600 transition-colors duration-300 hover:underline"
                            >
                               <span> </span>  Quant-Apps
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}