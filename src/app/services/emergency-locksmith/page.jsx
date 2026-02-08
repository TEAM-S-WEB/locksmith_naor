import React from 'react'
import Image from 'next/image'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import img from '@/images/g.jpg'
import { BASE_DATA } from '@/constants/base'

export const metadata = {
  title: `Emergency Locksmith Services`,
  description: `Rapid emergency locksmith solutions for lockouts, lost keys, and urgent security needs. Trusted, fast, and professional service for homes and businesses.`,
  keywords: `Emergency Locksmith, Lockout Service, Lost Keys, Locksmith Services, Home Security, Business Security, 24/7 Locksmith, Fast Response`,
  author: BASE_DATA.siteName,
    url: `${BASE_DATA.URL}/services/emergency-locksmith`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Emergency Locksmith Services | ${BASE_DATA.siteName}`,
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
    title: `Emergency Locksmith Services`,
    description: `Rapid emergency locksmith solutions for lockouts, lost keys, and urgent security needs. Trusted, fast, and professional service for homes and businesses.`,
    url: `${BASE_DATA.URL}/services/emergency-locksmith`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Emergency Locksmith Services | ${BASE_DATA.siteName}`,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    title: `Emergency Locksmith Services`,
    description: `Rapid emergency locksmith solutions for lockouts, lost keys, and urgent security needs. Trusted, fast, and professional service for homes and businesses.`,
  },
  alternates: {
    canonical: `/services/emergency-locksmith`,
  },
  category: `Services`,
  publisher: BASE_DATA.siteName,
  formatDetection: { telephone: false },
  themeColor: `#000000`,
  manifest: `/site.webmanifest`,
  bookmarks: [`/services/emergency-locksmith`],
  verification: { google: BASE_DATA.verification_google },
  twitterCreator: `@YourTwitterHandle`,
  twitterSite: `@YourTwitterHandle`,
  appleWebApp: {
    title: `Emergency Locksmith Services`,
    statusBarStyle: `black-translucent`,
  },
  applicationName: `Emergency Locksmith Services`,
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
        alt="Emergency Locksmith"
        className={styles.pageImage}
        quality={100}
        priority
        fill={false}
        style={{ maxWidth: `100%`, height: `auto` }}
      />
      <h1 className={styles.pageTitle}>Emergency Locksmith Services</h1>
      <div className={styles.pageContent}>
        <p>
          Locked out or facing a security emergency? Our expert locksmiths are available 24/7 to help you regain access and restore safety. We respond quickly to urgent situations at homes, businesses, and vehicles.
        </p>
        <ul>
          <li>24/7 emergency lockout assistance</li>
          <li>Fast response for lost or broken keys</li>
          <li>Professional and licensed locksmiths</li>
          <li>Immediate security solutions and repairs</li>
        </ul>
        <p>
          Call us now for rapid emergency locksmith service and peace of mind when you need it most.
        </p>
           <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
      </div>
    </div>
  )
}

export default Page