import React from 'react'
import Image from 'next/image'
import img from '@/images/g.jpg'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import { BASE_DATA } from "@/constants/base"

export const metadata = {
  title: `Business Lockout Services`,
  description: `Professional business lockout solutions to keep your company secure and operational. Fast, reliable, and trusted locksmith services for businesses.`,
  url:`${BASE_DATA.URL}/services/business-lockout`,
  siteName: BASE_DATA.siteName,
  
  keywords: `business lockout, commercial locksmith, business security, lockout services, emergency locksmith, business lock change, office lockout, business key replacement`,
  authors: [{ name: BASE_DATA.siteName }],
  creator: BASE_DATA.siteName,
  publisher: BASE_DATA.siteName,
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
  openGraph: {
    title: `Business Lockout Services`,
    description: `Professional business lockout solutions to keep your company secure and operational. Fast, reliable, and trusted locksmith services for businesses.`,
    url: `${BASE_DATA.URL}/services/business-lockout`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Business Lockout Services | ${BASE_DATA.siteName}`,
      },
    ],
  },
  twitter: {
    title: `Business Lockout Services`,
  },
  alternates: {
    canonical: `${BASE_DATA.URL}/services/business-lockout`,
  },
  category: `Services`,
  publisher: BASE_DATA.siteName,
  formatDetection: { telephone: false },
  themeColor: `#000000`,
  manifest: `/site.webmanifest`,
  bookmarks: [`/services/business-lockout`],
  verification: { google: BASE_DATA.verification_google },
  twitterCreator: `@YourTwitterHandle`,
  twitterSite: `@YourTwitterHandle`,
  appleWebApp: {
    title: `Business Lockout Services`,
    statusBarStyle: `black-translucent`,
  },
  applicationName: `Business Lockout Services | ${BASE_DATA.siteName}`,
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
        alt="Business Lockout"
        className={styles.pageImage}
        quality={100}
        priority
        fill={false}
        style={{ maxWidth: `100%`, height: `auto` }}
      />
      <h1 className={styles.pageTitle}>Business Lockout Services</h1>
      <div className={styles.pageContent}>
        <p>
          Locked out of your business? Our expert locksmiths provide fast and reliable business lockout services to get you back inside and minimize downtime. We understand the importance of security and efficiency for your company.
        </p>
        <ul>
          <li>24/7 emergency lockout assistance</li>
          <li>Experienced, licensed professionals</li>
          <li>Non-destructive entry methods</li>
          <li>Security upgrades and consultations</li>
        </ul>
        <p>
          Contact us today for immediate help and ensure your business stays secure and operational.
        </p>
           <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
      </div>
    </div>
  )
}

export default Page