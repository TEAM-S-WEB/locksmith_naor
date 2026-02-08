import React from 'react'
import Image from 'next/image'
import styles from '../globalservicepages.module.css'
import Bannerlink from '@/components/common/banner/link/Bannerlink'
import img from '@/images/g.jpg'
import { BASE_DATA } from '@/constants/base'


export const metadata = {
  title: `Locksmith Near Me`,
  description:
    `Fast and reliable locksmith services near you. Expert lock installation, repair, rekeying, and emergency lockout assistance for homes, businesses, and vehicles.`,
  keywords:
    `Locksmith Near Me, Emergency Locksmith, Lock Repair, Key Duplication, Residential Locksmith, Commercial Locksmith, Automotive Locksmith, Lock Installation, Security Locks`,
  author: BASE_DATA.siteName,
  url: `${BASE_DATA.URL}/services/locksmith-near-me`,
  siteName: BASE_DATA.siteName,
  images: [
    {
      url: `https://i.ibb.co/QpTSSNS/5y.jpg`,
      alt: `Locksmith Near Me | ${BASE_DATA.siteName}`,
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
    title: `Locksmith Near Me | ${BASE_DATA.siteName}`,
    description:
      `Professional locksmith services near you. We handle lockouts, repairs, installations, and security upgrades — fast, affordable, and trustworthy.`,
    url: `${BASE_DATA.URL}/services/locksmith-near-me`,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: `https://i.ibb.co/QpTSSNS/5y.jpg`,
        alt: `Locksmith Near Me | ${BASE_DATA.siteName}`,
      },
    ],
    type: `website`,
    locale: `en_US`,
  },

  twitter: {
    card: `summary_large_image`,
    title: `Locksmith Near Me | ${BASE_DATA.siteName}`,
    description:
      `24/7 locksmith services near you — lock repair, key duplication, and emergency lockouts. Fast response and professional service.`,
    images: [`https://i.ibb.co/QpTSSNS/5y.jpg`],
    creator: `@YourTwitterHandle`,
    site: `@YourTwitterHandle`,
  },

  alternates: {
    canonical: `/services/locksmith-near-me`,
  },

  category: `Services`,
  publisher: BASE_DATA.siteName,
  formatDetection: { telephone: false },
  themeColor: `#000000`,
  manifest: `/site.webmanifest`,
  bookmarks: [`/services/locksmith-near-me`],

  verification: { google: BASE_DATA.verification_google },


  appleWebApp: {
    title: `Locksmith Near Me`,
    statusBarStyle: `black-translucent`,
  },

  applicationName: `Locksmith Near Me`,
  msapplication: {
    TileColor: `#000000`,
    TileImage: `/mstile-150x150.png`,
  },

  format: `service`,
  coverage: `Worldwide`,
  audience: `Everyone`,
  rating: `General`,
  distribution: `Global`,
  revisitAfter: `7 days`,
  expires: `never`,
};


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
          <h1 className={styles.pageTitle}>Locksmith Near Me</h1>
<div className={styles.pageContent}>
  <p>
    Looking for a <strong>locksmith near you</strong>? Our certified locksmiths provide fast, professional, and reliable services for homes, businesses, and vehicles across New Jersey and New York. Whether you’re locked out, need a new lock installed, or want to upgrade your security — we’re here to help 24/7.
  </p>
  <ul>
    <li>Emergency lockout assistance (home, office, and car)</li>
    <li>Lock repair, rekeying, and replacement</li>
    <li>Residential and commercial locksmith services</li>
    <li>Key duplication and smart lock installation</li>
    <li>Security upgrades and consultations</li>
  </ul>
  <p>
    Our experienced locksmiths are fully equipped to handle any lock or key issue quickly and safely. 
    Contact <strong>${BASE_DATA.siteName}</strong> today for trusted <strong>locksmith services near you</strong> — available day and night to keep your property secure.
  </p>
</div>
            <div className={styles.callToAction}>
               
                   <Bannerlink text="" description="Call us now" link="tel:+17326314663"/>
            </div>
        </div>
    )
}

export default Page