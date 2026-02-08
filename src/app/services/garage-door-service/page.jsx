import React from 'react'
import Image from 'next/image'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import img from '@/images/g.jpg'
import { BASE_DATA } from '@/constants/base'

export const metadata = {
    title: `Garage Door Services`,
    description: `Expert garage door repair and installation for homes and businesses. Fast, reliable, and professional service to ensure safety and convenience.`,
    keywords: `Garage Door Repair, Garage Door Installation, Emergency Garage Door Service, Residential Garage Doors, Commercial Garage Doors, Garage Door Maintenance, Garage Door Opener`,
    author: BASE_DATA.siteName,
        url: `${BASE_DATA.URL}/services/garage-door-service`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Garage Door Services | ${BASE_DATA.siteName}`,
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
        title: `Garage Door Services`,
        description: `Expert garage door repair and installation for homes and businesses. Fast, reliable, and professional service to ensure safety and convenience.`,
     url: `${BASE_DATA.URL}/services/garage-door-service`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "https://i.ibb.co/QpTSSNS/5y.jpg",
        alt: `Garage Door Services | ${BASE_DATA.siteName}`,
      },
    ],
    },
    twitter: {
        card: `summary_large_image`,
        title: `Garage Door Services`,
        description: `Expert garage door repair and installation for homes and businesses. Fast, reliable, and professional service to ensure safety and convenience.`,
    },
    alternates: {
        canonical: `/services/garage-door-service`,
    },
    category: `Services`,
    publisher: BASE_DATA.siteName,
    formatDetection: { telephone: false },
    themeColor: `#000000`,
    manifest: `/site.webmanifest`,
    bookmarks: [`/services/garage-door-service`],
    verification: { google: `06d00a2347ddddea` },
    twitterCreator: `@YourTwitterHandle`,
    twitterSite: `@YourTwitterHandle`,
    appleWebApp: {
        title: `Garage Door Services`,
        statusBarStyle: `black-translucent`,
    },
    applicationName: `Garage Door Services`,
    msapplication: {
        TileColor: `#000000`,
        TileImage: `/mstile-150x150.png`,
    },
    format: `service`,
    category: `garage-door-service`,
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
                alt="Garage Door Service"
                className={styles.pageImage}
                quality={100}
                priority
                fill={false}
                style={{ maxWidth: `100%`, height: `auto` }}
            />
            <h1 className={styles.pageTitle}>Garage Door Services</h1>
            <div className={styles.pageContent}>
                <p>
                    Is your garage door stuck, noisy, or damaged? Our skilled technicians offer prompt and dependable garage door repair and installation services for residential and commercial properties. We ensure your garage door operates smoothly and securely.
                </p>
                <ul>
                    <li>Repair of broken springs, cables, and rollers</li>
                    <li>Garage door opener installation and troubleshooting</li>
                    <li>Emergency garage door repairs and replacements</li>
                    <li>Routine maintenance and safety inspections</li>
                </ul>
                <p>
                    Contact us today to schedule your garage door service and keep your property safe and accessible.
                </p>
                   <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
            </div>
        </div>
    )
}

export default Page