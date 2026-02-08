import React from 'react'
import Image from 'next/image'
import img from '@/images/g.jpg'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import { BASE_DATA } from "@/constants/base"

export const metadata = {
  title: `Emergency Car Lockout Services`,
  description: `Fast and reliable emergency car lockout solutions. Get back into your vehicle quickly with our trusted locksmith services available 24/7.`,
  keywords: `Car Lockout, Emergency Locksmith, Auto Locksmith, Vehicle Unlock, 24/7 Locksmith, Roadside Assistance, Locked Out Car, Fast Response`,
  author: BASE_DATA.siteName,
   url: `${BASE_DATA.URL}/services/emergency-car-lockout`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Emergency Car Lockout Services | ${BASE_DATA.siteName}`,
      },
    ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: `width=device-width, initial-scale=1.0`,
  icons: {
    icon: `/favicon.ico`,
  },
  openGraph: {
    title: `Emergency Car Lockout Services`,
    description: `Fast and reliable emergency car lockout solutions. Get back into your vehicle quickly with our trusted locksmith services available 24/7.`,
   url: `${BASE_DATA.URL}/services/emergency-car-lockout`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Emergency Car Lockout Services | ${BASE_DATA.siteName}`,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    title: `Emergency Car Lockout Services`,
    description: `Fast and reliable emergency car lockout solutions. Get back into your vehicle quickly with our trusted locksmith services available 24/7.`,
  },
  alternates: {
    canonical: `/services/emergency-car-lockout`,
  },
  category: `Services`,
  publisher: BASE_DATA.siteName,
  formatDetection: { telephone: false },
  themeColor: `#000000`,
  manifest: `/site.webmanifest`,
  bookmarks: [`/services/emergency-car-lockout`],
  verification: { google: BASE_DATA.verification_google },
  twitterCreator: `@YourTwitterHandle`,
  twitterSite: `@YourTwitterHandle`,
  appleWebApp: {
    title: `Emergency Car Lockout Services`,
    statusBarStyle: `black-translucent`,
  },
  applicationName: `Emergency Car Lockout Services`,
  msapplication: {
    TileColor: `#000000`,
    TileImage: `/mstile-150x150.png`,
  },
  format: `service`,
  category: `locksmith`,
  coverage: `Worldwide`,
  audience: `Everyone`,
  rating: `General`,
  distribution: `Global`,
  revisitAfter: `7 days`,
  expires: `never`,
}

const Page = () => {
  return (
    <div className={styles.pageContainer}>
      <Image
        src={img}
        alt="Emergency Car Lockout"
        className={styles.pageImage}
        quality={100}
        priority
        fill={false}
        style={{ maxWidth: `100%`, height: `auto` }}
      />
      <h1 className={styles.pageTitle}>Emergency Car Lockout Services</h1>
      <div className={styles.pageContent}>
        <p>
          Locked out of your car? Our expert locksmiths provide rapid emergency car lockout services to get you back on the road quickly and safely. Available 24/7, we respond fast to any location.
        </p>
        <ul>
          <li>24/7 emergency car lockout assistance</li>
          <li>Fast response times</li>
          <li>Experienced automotive locksmiths</li>
          <li>Damage-free vehicle entry</li>
        </ul>
        <p>
          Call us now for immediate help and regain access to your vehicle without hassle.
        </p>
           <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
      </div>
    </div>
  )
}

export default Page