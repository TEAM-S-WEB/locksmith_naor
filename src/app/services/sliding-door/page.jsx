import React from 'react'
import Image from 'next/image'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import { BASE_DATA } from '@/constants/base'
// import img from `@/images/g.jpg`

const img= "https://i.ibb.co/QpTSSNS/5y.jpg"

export const metadata = {
  title: `Sliding Door Services`,
  description: `Expert sliding door repair, installation, and maintenance. Fast, reliable, and trusted services for homes and businesses.`,
  keywords: `Sliding Door, Door Repair, Door Installation, Door Maintenance, Home Security, Business Security, Emergency Door Service, Sliding Glass Door`,
  author: BASE_DATA.siteName,
    url: `${BASE_DATA.URL}/services/sliding-door`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Sliding Door Services | ${BASE_DATA.siteName}`,
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
    title: `Sliding Door Services`,
    description: `Expert sliding door repair, installation, and maintenance. Fast, reliable, and trusted services for homes and businesses.`,
   url: `${BASE_DATA.URL}/services/sliding-door`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: img,
        alt: `Sliding Door Services | ${BASE_DATA.siteName}`,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    title: `Sliding Door Services`,
    description: `Expert sliding door repair, installation, and maintenance. Fast, reliable, and trusted services for homes and businesses.`,
  },
  alternates: {
    canonical: `/services/sliding-door`,
  },
  category: `Services`,
  publisher: BASE_DATA.siteName,
  formatDetection: { telephone: false },
  themeColor: `#000000`,
  manifest: `/site.webmanifest`,
  bookmarks: [`/services/sliding-door`],
 verification: { google: BASE_DATA.verification_google },

  twitterCreator: `@YourTwitterHandle`,
  twitterSite: `@YourTwitterHandle`,
  appleWebApp: {
    title: `Sliding Door Services`,
    statusBarStyle: `black-translucent`,
  },
  applicationName: `Sliding Door Services`,
  msapplication: {
    TileColor: `#000000`,
    TileImage: `/mstile-150x150.png`,
  },
  format: `service`,
  category: `door`,
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
        alt="Sliding Door"
        className={styles.pageImage}
        quality={100}
        priority
        fill={false}
        width={500}
        height={500}
        style={{ maxWidth: `100%`, height: `auto` }}
      />
      <h1 className={styles.pageTitle}>Sliding Door Services</h1>
      <div className={styles.pageContent}>
        <p>
          Having trouble with your sliding door? Our experienced technicians provide quick and reliable sliding door repair, installation, and maintenance to ensure smooth operation and enhanced security for your property.
        </p>
        <ul>
          <li>Residential and commercial sliding door services</li>
          <li>Sliding glass door repair and replacement</li>
          <li>Track and roller maintenance</li>
          <li>Upgrades for security and convenience</li>
        </ul>
        <p>
          Contact us today to restore your sliding door’s functionality and keep your home or business secure and stylish.
        </p>
           <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
      </div>
    </div>
  )
}

export default Page