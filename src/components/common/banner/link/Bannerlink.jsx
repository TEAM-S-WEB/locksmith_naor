import React from "react";
import styles from "./bannerlink.module.css";
// import { MdGroups } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";

const Bannerlink = ({ text, description, link }) => {
  return (
    <Link className={styles.bannerLink} href={link}>
        <FaPhone size={25} />
      <div className={styles.link} >
        {/* <a className={styles.link} href={link}>{text}</a> */}
        {description && (
          <span className={styles.description}>{description}</span>
        )}
        <span className={styles.arrow}>&#8594;</span>
      </div>
    </Link>
  );
};

export default Bannerlink;
