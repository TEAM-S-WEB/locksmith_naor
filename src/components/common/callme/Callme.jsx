import React from "react";
import styles from "./callme.module.css";

const Callme = () => {
  return (
    <div className={styles.callMeContainer}>
      <div className={styles.callMeContent}>
        <p>24/7 <span className={styles.emergencySpan}>Emergency</span> Locksmith NYC</p>
        <h2 className={styles.callMeTitle}>Call Us Now</h2>

        <a href="tel:+1234567890" className={styles.callButton}>
          +1 234 567 890
        </a>
      </div>
    </div>
  );
};

export default Callme;
