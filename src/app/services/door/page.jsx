import React from 'react'
import Image from 'next/image'
import img from '@/images/g.jpg'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import { BASE_DATA } from "@/constants/base"

export const metadata = {
    title: `Door Services`,
    description: `Comprehensive door solutions for homes and businesses. Installation, maintenance, and upgrades for all types of doors.`,
    keywords: `Door Services, Door Installation, Door Maintenance, Door Upgrades, Residential Doors, Commercial Doors, Security Doors`,
    author: BASE_DATA.siteName,
     url: `${BASE_DATA.URL}/services/door`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Door Services | ${BASE_DATA.siteName}`,
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
        title: `Door Services`,
        description: `Comprehensive door solutions for homes and businesses. Installation, maintenance, and upgrades for all types of doors.`,
     url: `${BASE_DATA.URL}/services/door`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Door Services | ${BASE_DATA.siteName}`,
      },
    ],
    },
    twitter: {
        card: `summary_large_image`,
        title: `Door Services | ${BASE_DATA.siteName}`,
        description: `Comprehensive door solutions for homes and businesses. Installation, maintenance, and upgrades for all types of doors.`,
    },
    alternates: {
        canonical: `/services/door-service`,
    },
    category: `Services`,
    publisher: BASE_DATA.siteName,
    formatDetection: { telephone: false },
    themeColor: `#000000`,
    manifest: `/site.webmanifest`,
    bookmarks: [`/services/door-service`],
    verification: { google: `06d00a2347ddddea` },
    twitterCreator: `@YourTwitterHandle`,
    twitterSite: `@YourTwitterHandle`,
    appleWebApp: {
        title: `Door Services`,
        statusBarStyle: `black-translucent`,
    },
    applicationName: `Door Services`,
    msapplication: {
        TileColor: `#000000`,
        TileImage: `/mstile-150x150.png`,
    },
    format: `service`,
    category: `door-service`,
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
                alt="Door Services"
                className={styles.pageImage}
                quality={100}
                priority
                fill={false}
                style={{ maxWidth: `100%`, height: `auto` }}
            />
            <h1 className={styles.pageTitle}>Door Services</h1>
            <div className={styles.pageContent}>
                <p>
                    Need expert assistance with your doors? Our skilled team offers installation, maintenance, and upgrades for all types of doors, ensuring your property remains secure and stylish. We serve both residential and commercial clients.
                </p>
                <ul>
                    <li>Installation of wooden, metal, and glass doors</li>
                    <li>Routine maintenance and adjustments</li>
                    <li>Door hardware upgrades and replacements</li>
                    <li>Security consultations and enhancements</li>
                </ul>
                <p>
                    Reach out today to learn more about our door services and keep your property safe and functional.
                </p>
                <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
            </div>
        </div>
    )
}

export default Page