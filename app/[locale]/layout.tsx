import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Dancing_Script, Montserrat, Bree_Serif, Poppins } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { domAnimation, LazyMotion } from "motion/react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import PhoneButton from "@/components/PhoneButton";
import Script from 'next/script';

const FB_PIXEL_ID = "1253040802866418";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter'
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage'
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat'

});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script'
})

const breeSerif = Bree_Serif({
  subsets: ['latin'],
    weight: '400',
  variable: '--font-bree-serif'
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['600']
})
export const metadata: Metadata = {
  title: "Aneta Interior",
  description: "Your ideas are our foundation to build unique spaces. Discover how we make dreams come true.",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bricolage.variable} ${montserrat.variable} ${dancingScript.variable} ${breeSerif.variable} ${poppins.variable} antialiased`}
      >
        {/* Facebook Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');`}
        </Script>
        <noscript dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"/>`,
        }} />
        <LazyMotion features={domAnimation}>
          <NextIntlClientProvider>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </LazyMotion>
        <PhoneButton />
      </body>
      <GoogleAnalytics gaId="G-0TQCPVCQCK" />
    </html>
  );
}
