import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Dancing_Script, Montserrat, Bree_Serif, Poppins } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { domAnimation, LazyMotion } from "motion/react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import PhoneButton from "@/components/PhoneButton";

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
