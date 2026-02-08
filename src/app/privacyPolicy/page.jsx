import React from 'react';
import styles from './privacypolicy.module.css';
import { BASE_DATA } from '@/constants/base';


function absUrl(path = "/") {
  const base = BASE_DATA.URL?.replace(/\/$/, "") || "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

// הפונקציה הדינמית
export async function generateMetadata() {
  const title = `Privacy Policy`;
  const description = `This Privacy Policy outlines how ${BASE_DATA.siteName} collects, uses, and protects your personal information when you visit our website or use our services. We are committed to ensuring your privacy and data security.`;
 
  const canonical = absUrl("/privacy-policy");

  return {
    title,
    description,
    alternates: { canonical },
    keywords: BASE_DATA.page_privacy.keywords,
    authors: [{ name: BASE_DATA.siteName }],
    creator: BASE_DATA.siteName,
    publisher: BASE_DATA.siteName,
    category: "Blog",
    themeColor: "#000000",
    manifest: "/site.webmanifest",
    bookmarks: ["/blogs"],
    verification: { google: "06d00a2347ddddea" },
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
          url: absUrl(BASE_DATA.page_privacy.img),
          alt: `${BASE_DATA.page_privacy.alt}`,
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




const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPageContainer}>
      <h1 className={styles.privacyTitle}>Privacy Policy</h1>
      <p className={styles.privacySubtitle}>
        <strong>Effective Date:</strong> August 2, 2025<br />
        <strong>Last Updated:</strong> August 2, 2025
      </p>
      <p className={styles.privacyContent}>
        Welcome to `{BASE_DATA.siteName}` (“we”, “our”, or “us”). We are committed to maintaining the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and protect your information when you visit our website (<a href={`https://${BASE_DATA.URL}`}>{`https://${BASE_DATA.URL}`}</a>) or utilize our services.
      </p>

      <h2 className={styles.privacySectionTitle}>1. Information We Collect</h2>
      <h3 className={styles.privacySubsectionTitle}>a. Personal Information</h3>
      <ul className={styles.privacyList}>
        <li className={styles.privacyListItem}>Name</li>
        <li className={styles.privacyListItem}>Email address</li>
        <li className={styles.privacyListItem}>Phone number</li>
        <li className={styles.privacyListItem}>Any details submitted via our contact or service request forms</li>
      </ul>
      <h3 className={styles.privacySubsectionTitle}>b. Automatically Collected Information</h3>
      <ul className={styles.privacyList}>
        <li className={styles.privacyListItem}>IP address</li>
        <li className={styles.privacyListItem}>Browser type</li>
        <li className={styles.privacyListItem}>Operating system</li>
        <li className={styles.privacyListItem}>Access times</li>
        <li className={styles.privacyListItem}>Pages viewed</li>
        <li className={styles.privacyListItem}>Referring website</li>
      </ul>
      <h3 className={styles.privacySubsectionTitle}>c. Cookies and Tracking Technologies</h3>
      <p className={styles.privacyContent}>
        We may use cookies and similar technologies to enhance your experience. You may disable cookies in your browser settings; however, certain features of our website may not function properly as a result.
      </p>

      <h2 className={styles.privacySectionTitle}>2. How We Use Your Information</h2>
      <ul className={styles.privacyList}>
        <li className={styles.privacyListItem}>Respond to service inquiries and provide customer support</li>
        <li className={styles.privacyListItem}>Schedule and deliver services</li>
        <li className={styles.privacyListItem}>Improve our website and services</li>
        <li className={styles.privacyListItem}>Send service updates, promotions, and other communications (if you have opted in)</li>
        <li className={styles.privacyListItem}>Ensure security and prevent fraud</li>
      </ul>

      <h2 className={styles.privacySectionTitle}>3. How We Share Your Information</h2>
      <p className={styles.privacyContent}>
        We do not sell or rent your personal information. We may share your information only in the following circumstances:
      </p>
      <ul className={styles.privacyList}>
        <li className={styles.privacyListItem}>With trusted third-party service providers assisting in our operations</li>
        <li className={styles.privacyListItem}>To comply with applicable laws, regulations, or legal requests</li>
        <li className={styles.privacyListItem}>To protect the rights, property, or safety of {BASE_DATA.siteName}, our users, or the public</li>
      </ul>

      <h2 className={styles.privacySectionTitle}>4. Data Security</h2>
      <p className={styles.privacyContent}>
        We implement reasonable technical and organizational measures to safeguard your personal data. However, please be aware that no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className={styles.privacySectionTitle}>5. Your Privacy Rights</h2>
      <ul className={styles.privacyList}>
        <li className={styles.privacyListItem}>Access the personal information we hold about you</li>
        <li className={styles.privacyListItem}>Request corrections or deletion of your data</li>
        <li className={styles.privacyListItem}>Opt out of receiving marketing communications at any time</li>
      </ul>
      <p className={styles.privacyContent}>
        To exercise any of these rights, please contact us at <a href={`mailto:${BASE_DATA.email}`}>{BASE_DATA.email}</a> or use the contact form on our website.
      </p>

      <h2 className={styles.privacySectionTitle}>6. Third-Party Links</h2>
      <p className={styles.privacyContent}>
        Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites. Please review their privacy policies before providing any personal information.
      </p>

      <h2 className={styles.privacySectionTitle}>7. Changes to This Privacy Policy</h2>
      <p className={styles.privacyContent}>
        We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
      </p>

      <h2 className={styles.privacySectionTitle}>8. Contact Us</h2>
      <p className={styles.privacyContact}>
        If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact:<br /><br />
        <strong>{BASE_DATA.siteName}</strong><br />
        Phone: <a href={`tel:${BASE_DATA.phone}`}>{BASE_DATA.phone}</a><br />
        Email: <a href={`mailto:${BASE_DATA.email}`}>{BASE_DATA.email}</a><br />
        Website: <a href={`https://${BASE_DATA.URL}`}>{`https://${BASE_DATA.URL}`}</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;