import React from 'react'
import styles from "./goodresponse.module.css"
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

const GoodResponse = () => {
  return (
 <div className={styles.goodResponseStrip}>
  <div className={styles.goodResponseInner}>
    
    <div className={styles.ratingBlock}>
      <h3 className={styles.goodResponseTitle}>5.0</h3>
      <div className={styles.starContainer} aria-label="5 star rating">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>
    </div>

    <div className={styles.brandBlock}>
      <FcGoogle size={42} />
      <span className={styles.brandName}>Google Reviews</span>
    </div>

  </div>
</div>


  )
}

export default GoodResponse