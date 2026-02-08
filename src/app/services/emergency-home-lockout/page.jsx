import React from 'react'
import Image from 'next/image'
import img from '@/images/g.jpg'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import { BASE_DATA } from '@/constants/base'

export const metadata = {
  title: `Emergency Home Lockout`,
  description: `Locked out of your home? Fast, professional emergency lockout services available 24/7. Trusted locksmiths ready to help you regain access quickly and safely.`,
  keywords: `Emergency Lockout, Home Lockout, Locksmith Services, 24/7 Locksmith, Emergency Locksmith, Lockout Help, Fast Locksmith, Residential Locksmith`,
  author: BASE_DATA.siteName,
    url: `${BASE_DATA.URL}/services/emergency-home-lockout`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Emergency Home Lockout Services | ${BASE_DATA.siteName}`,
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
    title: `Emergency Home Lockout`,
    description: `Locked out of your home? Fast, professional emergency lockout services available 24/7. Trusted locksmiths ready to help you regain access quickly and safely.`,
    url: `${BASE_DATA.URL}/services/emergency-home-lockout`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Emergency Home Lockout Services | ${BASE_DATA.siteName}`,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    title: `Emergency Home Lockout`,
    description: `Locked out of your home? Fast, professional emergency lockout services available 24/7. Trusted locksmiths ready to help you regain access quickly and safely.`,
  },
  alternates: {
    canonical: `/services/emergency-home-lockout`,
  },
  category: `Services`,
  publisher: BASE_DATA.siteName,
  formatDetection: { telephone: false },
  themeColor: `#000000`,
  manifest: `/site.webmanifest`,
  bookmarks: [`/services/emergency-home-lockout`],
  verification: { google: BASE_DATA.verification_google },
  twitterCreator: `@YourTwitterHandle`,
  twitterSite: `@YourTwitterHandle`,
  appleWebApp: {
    title: `Emergency Home Lockout`,
    statusBarStyle: `black-translucent`,
  },
  applicationName: `Emergency Home Lockout`,
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
        alt="Emergency Home Lockout"
        className={styles.pageImage}
        quality={100}
        priority
        fill={false}
        style={{ maxWidth: `100%`, height: `auto` }}
      />
      <h1 className={styles.pageTitle}>Emergency Home Lockout Services</h1>
      <div className={styles.pageContent}>
        <p>
          Locked out of your home? Our expert locksmiths provide rapid emergency lockout assistance, available 24/7. We use safe, non-destructive methods to help you regain access without damaging your locks or doors.
        </p>
        <ul>
          <li>24/7 emergency response</li>
          <li>Fast arrival and professional service</li>
          <li>Non-destructive entry techniques</li>
          <li>Licensed and trusted locksmiths</li>
        </ul>
        <p>
          Call us now for immediate help and get back inside your home quickly and safely.
        </p>
           <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
      </div>
    </div>
  )
}

export default Page