import React from "react";
import styles from "./aboutpage.module.css";
import { BASE_DATA, TEXT_PAGE_ABOUT } from "@/constants/base";

const AboutPage = () => {
  return (
    <div className={styles.aboutPageContainer}>
      <h1 className={styles.aboutTitle}>About {BASE_DATA.siteName}</h1>
      <p className={styles.aboutSubtitle}>
       {TEXT_PAGE_ABOUT.text_a}
      </p>
      <p className={styles.aboutContent}>
       {TEXT_PAGE_ABOUT.text_b}
      </p>
      <p className={styles.aboutContent}>
       {TEXT_PAGE_ABOUT.text_c}
      </p>
      <p className={styles.aboutContact}>
        For inquiries, please contact us at:{" "}
        <a href={`mailto:${BASE_DATA.email}`}>{BASE_DATA.email}</a> or call{" "}
        {/* <a href="tel:7326314663">732-631-4663</a> */}
      </p>
    </div>
  );
};

export default AboutPage;
