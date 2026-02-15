import React from "react";
import styles from "./footer.module.css";
import { IoLogoYoutube } from "react-icons/io";

import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { BASE_DATA } from "@/constants/base";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        <a href={BASE_DATA.facebook} className={styles.footerLink}>
          <FaFacebook size={22} />
        </a>
        <a
          href={BASE_DATA.youtube}
          className={styles.footerLink}
        >
          <IoLogoYoutube size={20} />
        </a>
        <a
          href={BASE_DATA.instagram}
          className={styles.footerLink}
        >
          <RiInstagramFill size={20} />
        </a>
      </div>
      <div className={styles.footerCopyright}>
        &copy; 2025 {BASE_DATA.siteName}. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
