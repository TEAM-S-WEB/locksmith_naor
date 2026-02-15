import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/layout/navbar/Navbar";
import Footer from "@/layout/footer/Footer";
import { BASE_DATA } from "@/constants/base";
import "./globals.css";
import Script from "next/script";
import SOAFooter from "@/layout/footer/SOAFooter/SOAFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: BASE_DATA.siteName,
    template: `%s || ${BASE_DATA.siteName}`,
  },
  description: BASE_DATA.description_global,
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  openGraph: {
    title: {
      default: BASE_DATA.siteName,
      template: `%s || ${BASE_DATA.siteName}`,
    },
    description:
      "Trusted locksmith and door repair company serving NY & NJ with excellence and speed.",
    siteTitle: {
      default: BASE_DATA.siteName,
      template: `%s || ${BASE_DATA.siteName}`,
    },
    title: {
      default: BASE_DATA.siteName,
      template: `%s || ${BASE_DATA.siteName}`,
    },
    description: BASE_DATA.description_global,
    url: BASE_DATA.URL,
    siteName: BASE_DATA.siteName,
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BASE_DATA.siteName}`,
    description: BASE_DATA.description_global,
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: BASE_DATA.verification_google,
    yandex: "your-yandex-verification-code",
  },
  category: "Home Services",
  keywords: [
    "locksmith",
    "door repair",
    "emergency locksmith",
    "lock replacement",
    "24/7 locksmith",
    "door installation",
    "security locks",
    "New York locksmith",
    "New Jersey locksmith",
    BASE_DATA.siteName,
  ],
  authors: [{ name: BASE_DATA.siteName, url: BASE_DATA.URL }],
  creator: BASE_DATA.siteName,
  publisher: BASE_DATA.siteName,
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  colorScheme: "light",
  verificationTokens: {
    google: BASE_DATA.verification_google,
    yandex: "your-yandex-verification-code",
  },
  appleWebApp: {
    title: {
      default: BASE_DATA.siteName,
      template: `%s || ${BASE_DATA.siteName}`,
    },
    statusBarStyle: "default",
  },
  mobileWebApp: {
    title: {
      default: BASE_DATA.siteName,
      template: `%s || ${BASE_DATA.siteName}`,
    },
    themeColor: "#ffffff",
  },
  bookmarks: [
    {
      title: {
        default: BASE_DATA.siteName,
        template: `%s || ${BASE_DATA.siteName}`,
      },
      url: BASE_DATA.URL,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        <SOAFooter />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V499MBRKDQ"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V499MBRKDQ', { send_page_view: false });
          `}
        </Script>
      </body>
    </html>
  );
}
