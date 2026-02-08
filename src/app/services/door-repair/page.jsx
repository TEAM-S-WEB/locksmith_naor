import React from 'react'
import Image from 'next/image'
import img from '@/images/g.jpg'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import { BASE_DATA } from "@/constants/base"

export const metadata = {
  title: `Door Repair Services`,
  description: `Expert door repair solutions for homes and businesses. Fast, reliable, and professional service to restore security and functionality.`,
  keywords: `Door Repair, Door Fixing, Emergency Door Repair, Residential Door Repair, Commercial Door Repair, Door Installation, Security Doors`,
  author: BASE_DATA.siteName,
    url: `${BASE_DATA.URL}/services/door-repair`,
  siteName: BASE_DATA.siteName,
  images: [
    {url: "https://i.ibb.co/QpTSSNS/5y.jpg", alt: `Door Repair Services | ${BASE_DATA.siteName}`},
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
    title: `Door Repair Services`,
    description: `Expert door repair solutions for homes and businesses. Fast, reliable, and professional service to restore security and functionality.`,
   url: `${BASE_DATA.URL}/services/door-repair`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Door Repair Services | ${BASE_DATA.siteName}`,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    title: `Door Repair Services`,
    description: `Expert door repair solutions for homes and businesses. Fast, reliable, and professional service to restore security and functionality.`,
  },
  alternates: {
    canonical: `/services/door-repair`,
  },
  category: `Services`,
  publisher: BASE_DATA.siteName,
  formatDetection: { telephone: false },
  themeColor: `#000000`,
  manifest: `/site.webmanifest`,
  bookmarks: [`/services/door-repair`],
  verification: { google: BASE_DATA.verification_google },
  twitterCreator: `@YourTwitterHandle`,
  twitterSite: `@YourTwitterHandle`,
  appleWebApp: {
    title: `Door Repair Services`,
    statusBarStyle: `black-translucent`,
  },
  applicationName: `Door Repair Services`,
  msapplication: {
    TileColor: `#000000`,
    TileImage: `/mstile-150x150.png`,
  },
  format: `service`,
  category: `door-repair`,
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
        alt="Door Repair"
        className={styles.pageImage}
        quality={100}
        priority
        fill={false}
        style={{ maxWidth: `100%`, height: `auto` }}
      />
      <h1 className={styles.pageTitle}>Door Repair Services</h1>
      <div className={styles.pageContent}>
        <p>
          Is your door damaged or not working properly? Our experienced technicians provide fast and reliable door repair services to restore safety and convenience to your property. We handle all types of doors, from residential to commercial.
        </p>
        <ul>
          <li>Repair of wooden, metal, and glass doors</li>
          <li>Emergency door repair and replacement</li>
          <li>Professional installation and adjustments</li>
          <li>Security upgrades and consultations</li>
        </ul>
        <p>
          Contact us today to schedule your door repair and ensure your property remains secure and functional.
        </p>
        <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
      </div>
    </div>
  )
}

export default Page