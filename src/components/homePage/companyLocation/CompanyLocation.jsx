import React from 'react'
import styles from './companylocation.module.css'
const CompanyLocation = () => {
  return (
    <div className={styles.companyLocationContainer}>
      <h2 className={styles.companyLocationTitle}>Our Location</h2>
      <p className={styles.companyLocationDescription}>
        We are proud to serve our community from multiple locations. Below are our main offices where you can find us:
      </p>
       

     <section className={styles.mapSection}>
  

  <div className={styles.mapGrid}>
    {/* ניו יורק */}
    <article className={styles.mapCard}>
      <h3 className={styles.mapTitle}>New York</h3>
      <iframe
        className={styles.mapFrame}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279896065!2d-74.25986522478287!3d40.69767006407312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1697065675431!5m2!1sen!2sus"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="New York Map"
      />
    </article>

    {/* ניו ג'רזי */}
    <article className={styles.mapCard}>
      <h3 className={styles.mapTitle}>New Jersey</h3>
      <iframe
        className={styles.mapFrame}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97102.92504347135!2d-74.5059726!3d40.0583238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c15638bafcbcb3%3A0x54a3a3d4f9d3dcbf!2sNew%20Jersey!5e0!3m2!1sen!2sus!4v1697065800123!5m2!1sen!2sus"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="New Jersey Map"
      />
    </article>
  </div>
</section>


    </div>
  )
}

export default CompanyLocation