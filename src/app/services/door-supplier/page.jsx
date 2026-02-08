import React from 'react'
import Image from 'next/image'
import img from '@/images/g.jpg'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import { BASE_DATA } from "@/constants/base"

export const metadata = {
  title: `Door Supplier Services`,
  description: `Quality door supply and installation for homes and businesses. Wide selection of styles and materials, professional service, and expert advice.`,
  keywords: `Door Supplier, Door Installation, Residential Doors, Commercial Doors, Door Replacement, Security Doors, Interior Doors, Exterior Doors`,
  author: BASE_DATA.siteName,
   url: `${BASE_DATA.URL}/services/door-supplier`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Door Supplier Services | ${BASE_DATA.siteName}`,
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
    title: `Door Supplier Services`,
    description: `Quality door supply and installation for homes and businesses. Wide selection of styles and materials, professional service, and expert advice.`,
   url: `${BASE_DATA.URL}/services/door-supplier`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Door Supplier Services | ${BASE_DATA.siteName}`,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    title: `Door Supplier Services`,
    description: `Quality door supply and installation for homes and businesses. Wide selection of styles and materials, professional service, and expert advice.`,
  },
  alternates: {
    canonical: `/services/door-supplier`,
  },
  category: `Services`,
  publisher: BASE_DATA.siteName,
  formatDetection: { telephone: false },
  themeColor: `#000000`,
  manifest: `/site.webmanifest`,
  bookmarks: [`/services/door-supplier`],
  verification: { google: BASE_DATA.verification_google },
  twitterCreator: `@YourTwitterHandle`,
  twitterSite: `@YourTwitterHandle`,
  appleWebApp: {
    title: `Door Supplier Services`,
    statusBarStyle: `black-translucent`,
  },
  applicationName: `Door Supplier Services`,
  msapplication: {
    TileColor: `#000000`,
    TileImage: `/mstile-150x150.png`,
  },
  format: `service`,
  category: `door-supplier`,
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
        alt="Door Supplier"
        className={styles.pageImage}
        quality={100}
        priority
        fill={false}
        style={{ maxWidth: `100%`, height: `auto` }}
      />
      <h1 className={styles.pageTitle}>Door Supplier Services</h1>
      <div className={styles.pageContent}>
        <p>
          Looking for new doors for your property? We offer a wide range of high-quality doors for residential and commercial needs. Our team provides expert installation and guidance to help you choose the perfect style and material.
        </p>
        <ul>
          <li>Interior and exterior door supply</li>
          <li>Professional door installation</li>
          <li>Custom and standard sizes available</li>
          <li>Durable materials and modern designs</li>
        </ul>
        <p>
          Contact us today to find the ideal doors for your home or business and enjoy reliable service from start to finish.
        </p>
        <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
      </div>
    </div>
  )
}

export default Page