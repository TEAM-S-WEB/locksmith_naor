import AboutPage from "@/components/aboutPage/AboutPage";
import Bannerlink from "@/components/common/banner/link/Bannerlink";
import React from "react";
import { BASE_DATA } from "@/constants/base.js";

function absUrl(path = "/") {
  const base = BASE_DATA.URL?.replace(/\/$/, "") || "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function generateMetadata() {
  const title = `About Us`;
  const description = BASE_DATA.page_about.description;

  return {
    title,
    description,
      keywords: BASE_DATA.page_about.keywords,
    alternates: {
      canonical: absUrl("/about"),
    },
    icons: { icon: "/favicon.ico" },
    // מומלץ להשאיר רק שדות שנתמכים רשמית ב-Next Metadata API
    openGraph: {
      title,
      description,
      url: absUrl("/about"),
      siteName: BASE_DATA.siteName,
      type: "website",
      images: [{ url: absUrl(BASE_DATA.page_about.img), alt: `About | ${BASE_DATA.siteName}` }],
      locale: BASE_DATA.defaultLanguage || "en-US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absUrl(BASE_DATA.page_about.img)],
      // אם יש לכם משתמש טוויטר אמיתי, אפשר לשים כאן:
      // site: "@YourTwitterHandle",
      // creator: "@YourTwitterHandle",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
    metadataBase: new URL(BASE_DATA.URL), // עוזר ל-NEXT לבנות קישורים אבסולוטיים
  };
}

const page = () => {
  return (
    <div>
      <Bannerlink text="" description="Call us now" link="tel:+17326314663" />
      <AboutPage />
    </div>
  );
};

export default page;
