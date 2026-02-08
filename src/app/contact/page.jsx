import ContactPage from "@/components/contactPage/ContactPage";
import React from "react";
import Bannerlink from "@/components/common/banner/link/Bannerlink";
import { BASE_DATA } from "@/constants/base";

function absUrl(path = "/") {
  const base = BASE_DATA.URL?.replace(/\/$/, "") || "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

// הפונקציה הדינמית
export async function generateMetadata() {
  const title = `Contact Us`;
  const description = BASE_DATA.page_contact.description
  const canonical = absUrl("/contact");

  return {
    title,
    description,
    alternates: { canonical },
    keywords: BASE_DATA.page_contact.keywords,
    authors: [{ name: BASE_DATA.siteName }],
    creator: BASE_DATA.siteName,
    publisher: BASE_DATA.siteName,
    category: "Blog",
    themeColor: "#000000",
    manifest: "/site.webmanifest",
    bookmarks: ["/blogs"],
    verification: { google: BASE_DATA.verification_google},
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
          url: absUrl(BASE_DATA.page_contact.img),
          alt: BASE_DATA.page_contact.alt,
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

const page = () => {
  return (
    <div>
      <Bannerlink text="" description="Call us now" link="tel:+17326314663" />
      <ContactPage />
    </div>
  );
};

export default page;
