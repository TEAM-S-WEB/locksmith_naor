import React from "react";
import styles from "./service.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import img from "@/images/g.jpg";
import { BASE_DATA } from "@/constants/base";

const serviceLinks = [
  {
    href: "/services/door",
    title: "Door Service",
    description: "Expert solutions for all your door needs.",
  },
  {
    href: "/services/lock-service",
    title: "Lock Service",
    description: "Professional lock installation and repair.",
  },
  {
    href: "/services/garage-door-service",
    title: "Garage Door Service",
    description: "Reliable garage door maintenance and support.",
  },
  {
    href: "/services/business-lockout",
    title: "Business Lockout Service",
    description: "Comprehensive lockout solutions for businesses.",
  },
  {
    href: "/services/change-locks",
    title: "Change Lock Service",
    description: "Expert lock change and rekeying services.",
  },
  {
    href: "/services/door-repair",
    title: "Door Repair Service",
    description: "Professional door repair and maintenance services.",
  },
  {
    href: "/services/emergency-locksmith",
    title: "Emergency Locksmith Service",
    description: "24/7 emergency locksmith services for your needs.",
  },
  {
    href: "/services/emergency-home-lockout",
    title: "Emergency Home Locksmith Service",
    description: "24/7 emergency locksmith services for your home.",
  },
  {
    href: "/services/locksmith-near-me",
    title: "Locksmith Near Me",
    description: "Fast and reliable locksmith services near you.",
  },

  {
    href: "/services/emergency-car-locksmith",
    title: "Emergency Car Locksmith Service",
    description: "24/7 emergency locksmith services for your car.",
  },
  {
    href: "/services/security-cameras",
    title: "Security Camera Installation",
    description:
      "Professional installation of security cameras for your home or business.",
  },
  {
    href: "/services/sliding-door",
    title: "Sliding Door Service",
    description: "Expert solutions for all your sliding door needs.",
  },
];
function absUrl(path = "/") {
  const base = BASE_DATA.URL?.replace(/\/$/, "") || "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

// הפונקציה הדינמית
export async function generateMetadata() {
  const title = `Our Services`;
  const description = BASE_DATA.page_services.description
   
  const canonical = absUrl("/services");

  return {
    title,
    description,
    alternates: { canonical },
    keywords: BASE_DATA.page_services.keywords,
    authors: [{ name: BASE_DATA.siteName }],
    creator: BASE_DATA.siteName,
    publisher: BASE_DATA.siteName,
    category: "Services",
    themeColor: "#000000",
    manifest: "/site.webmanifest",
    bookmarks: ["/blogs"],
    verification: { google:  BASE_DATA.verification_google},
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
      title,
      description,
      url: canonical,
      siteName: BASE_DATA.siteName,
      type: "website",
      images: [
        {
          url: absUrl(BASE_DATA.page_services.img),
          alt: `${BASE_DATA.page_services.alt}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absUrl("/images/blog-twitter.jpg")],
      creator: "@YourTwitterHandle",
      site: "@YourTwitterHandle",
    },
    metadataBase: new URL(BASE_DATA.URL),
  };
}

const ServicesPage = () => {
  return (
    <div className={styles.callingContainer}>
      <div className={styles.cubesWrapper}>
        {serviceLinks.map((service, idx) => (
          <div className={styles.cube} key={idx}>
            <Link href={service.href} className={styles.phoneLink}>
              <FaArrowAltCircleRight className={styles.phoneIcon} />
            </Link>
            <h3 className={styles.cubeTitle}>{service.title}</h3>
            <p className={styles.cubeDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
