import React from 'react'
import Image from 'next/image'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import img from '@/images/c.jpg'
import { BASE_DATA } from '@/constants/base'

export const metadata = {
  title: `Security Cameras Services`,
  description: `Professional security camera installation and maintenance for homes and businesses. Enhance your safety with reliable surveillance solutions.`,
  keywords: `Security Cameras, CCTV, Surveillance, Camera Installation, Home Security, Business Security, Video Monitoring, Security Systems`,
  author: BASE_DATA.siteName,
    url: `${BASE_DATA.URL}/services/security-cameras`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Security Cameras Services | ${BASE_DATA.siteName}`,
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
    title: `Security Cameras Services`,
    description: `Professional security camera installation and maintenance for homes and businesses. Enhance your safety with reliable surveillance solutions.`,
  url: `${BASE_DATA.URL}/services/security-cameras`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Security Cameras Services | ${BASE_DATA.siteName}`,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    title: `Security Cameras Services`,
    description: `Professional security camera installation and maintenance for homes and businesses. Enhance your safety with reliable surveillance solutions.`,
  },
  alternates: {
    canonical: `/services/security-cameras`,
  },
  category: `Services`,
  publisher: BASE_DATA.siteName,
  formatDetection: { telephone: false },
  themeColor: `#000000`,
  manifest: `/site.webmanifest`,
  bookmarks: [`/services/security-cameras`],
  verification: { google: `06d00a2347ddddea` },
  twitterCreator: `@YourTwitterHandle`,
  twitterSite: `@YourTwitterHandle`,
  appleWebApp: {
    title: `Security Cameras Services`,
    statusBarStyle: `black-translucent`,
  },
  applicationName: `Security Cameras Services`,
  msapplication: {
    TileColor: `#000000`,
    TileImage: `/mstile-150x150.png`,
  },
  format: `service`,
  category: `security`,
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
        alt="Security Cameras"
        className={styles.pageImage}
        quality={100}
        priority
        fill={false}
        style={{ maxWidth: `100%`, height: `auto` }}
      />
      <h1 className={styles.pageTitle}>Security Cameras Services</h1>
      <div className={styles.pageContent}>
        <p>
          Protect your property with our expert security camera installation and maintenance services. We offer advanced surveillance solutions tailored for homes and businesses, ensuring peace of mind and reliable monitoring.
        </p>
        <ul>
          <li>Residential and commercial camera installation</li>
          <li>High-definition and smart surveillance systems</li>
          <li>Professional setup and ongoing support</li>
          <li>Remote viewing and monitoring options</li>
        </ul>
        <p>
          Contact us today to upgrade your security with state-of-the-art cameras and keep your premises safe 24/7.
        </p>
           <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
      </div>
    </div>
  )
}

export default Page