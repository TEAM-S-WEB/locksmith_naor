import React from 'react'
import Image from 'next/image'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import img from '@/images/g.jpg'
import { BASE_DATA } from '@/constants/base'

export const metadata = {
    title: `Lock Services`,
    description: `Professional lock services for homes and businesses. Fast, secure, and reliable solutions for lock installation, repair, and emergency lockouts.`,
    keywords: `Lock Services, Lock Repair, Emergency Lockout, Residential Locks, Commercial Locks, Lock Installation, Security Locks`,
    author: BASE_DATA.siteName,
    url: `${BASE_DATA.URL}/services/lock-service`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Lock Services | ${BASE_DATA.siteName}`,
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
        title: `Lock Services`,
        description: `Professional lock services for homes and businesses. Fast, secure, and reliable solutions for lock installation, repair, and emergency lockouts.`,
     url: `${BASE_DATA.URL}/services/lock-service`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Lock Services | ${BASE_DATA.siteName}`,
      },
    ],
    },
    twitter: {
        card: `summary_large_image`,
        title: `Lock Services`,
        description: `Professional lock services for homes and businesses. Fast, secure, and reliable solutions for lock installation, repair, and emergency lockouts.`,
    },
    alternates: {
        canonical: `/services/lock-service`,
    },
    category: `Services`,
    publisher: BASE_DATA.siteName,
    formatDetection: { telephone: false },
    themeColor: `#000000`,
    manifest: `/site.webmanifest`,
    bookmarks: [`/services/lock-service`],
    verification: { google: `06d00a2347ddddea` },
    twitterCreator: `@YourTwitterHandle`,
    twitterSite: `@YourTwitterHandle`,
    appleWebApp: {
        title: `Lock Services`,
        statusBarStyle: `black-translucent`,
    },
    applicationName: `Lock Services`,
    msapplication: {
        TileColor: `#000000`,
        TileImage: `/mstile-150x150.png`,
    },
    format: `service`,
    category: `lock-service`,
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
                alt="Lock Service"
                className={styles.pageImage}
                quality={100}
                priority
                fill={false}
                style={{ maxWidth: `100%`, height: `auto` }}
            />
            <h1 className={styles.pageTitle}>Lock Services</h1>
            <div className={styles.pageContent}>
                <p>
                    Need help with your locks? Our skilled technicians offer prompt and reliable lock services to keep your property secure. We specialize in residential and commercial lock installation, repair, and emergency lockout assistance.
                </p>
                <ul>
                    <li>Repair and replacement of all lock types</li>
                    <li>Emergency lockout services</li>
                    <li>Professional lock installation and upgrades</li>
                    <li>Security consultations and solutions</li>
                </ul>
                <p>
                    Contact us today for expert lock services and ensure your home or business stays safe and protected.
                </p>
                   <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
            </div>
        </div>
    )
}

export default Page