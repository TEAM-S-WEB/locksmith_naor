import React from 'react'
import Image from 'next/image'
import img from '@/images/g.jpg'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import { BASE_DATA } from "@/constants/base"

export const metadata = {
  title: `Change Locks Services`,
  description: `Professional lock changing solutions to enhance your security. Fast, reliable, and trusted locksmith services for homes and businesses.`,
  keywords: `Change Locks, Lock Changing, Rekeying, Locksmith Services, Home Security, Business Security, Emergency Locksmith, Lock Installation`,
  author: BASE_DATA.siteName,
   url: `${BASE_DATA.URL}/services/change-locks`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Change Locks Services | ${BASE_DATA.siteName}`,
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
    title: `Change Locks Services`,
    description: `Professional lock changing solutions to enhance your security. Fast, reliable, and trusted locksmith services for homes and businesses.`,
     url: `${BASE_DATA.URL}/services/change-locks`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Change Locks Services | ${BASE_DATA.siteName}`,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    title: `Change Locks Services`,
    description: `Professional lock changing solutions to enhance your security. Fast, reliable, and trusted locksmith services for homes and businesses.`,
  },
  alternates: {
    canonical: `http://www.serviceofamerica.co/services/change-locks`,
  },
  category: `Services`,
  publisher: BASE_DATA.siteName,
  formatDetection: { telephone: false },
  themeColor: `#000000`,
  manifest: `/site.webmanifest`,
  bookmarks: [`/services/change-locks`],
  verification: { google: `06d00a2347ddddea` },
  twitterCreator: `@YourTwitterHandle`,
  twitterSite: `@YourTwitterHandle`,
  appleWebApp: {
    title: `Change Locks Services | ${BASE_DATA.siteName}`,
    statusBarStyle: `black-translucent`,
  },
  applicationName: `Change Locks Services`,
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
        alt="Change Locks"
        className={styles.pageImage}
        quality={100}
        priority
        fill={false}
        style={{ maxWidth: `100%`, height: `auto` }}
      />
      <h1 className={styles.pageTitle}>Change Locks Services</h1>
      <div className={styles.pageContent}>
        <p>
          Need to change your locks? Our skilled locksmiths offer fast and reliable lock changing services to improve your property’s security. Whether you’ve moved in, lost keys, or want an upgrade, we’re here to help.
        </p>
        <ul>
          <li>Residential and commercial lock changes</li>
          <li>High-security lock installation</li>
          <li>Licensed and experienced professionals</li>
          <li>Security consultations and upgrades</li>
        </ul>
        <p>
          Contact us today to schedule a lock change and keep your property safe and secure.
        </p>
            <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
      </div>
    </div>
  )
}

export default Page