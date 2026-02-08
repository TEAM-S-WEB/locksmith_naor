"use client";

import React from 'react';
import styles from './aboutbrief.module.css';
import { BASE_DATA, PHOTO_COLLAGE_ABOUT_BRIEF } from '@/constants/base';
// import Image from 'next/image';
// import about_a from '../../../images/about_a.jpg';
// import about_b from '../../../images/about_b.jpg';
// import about_c from '../../../images/about_c.jpg';
import PhotoCollage from '@/components/common/banner/photoCollage/PhotoCollage';
// import ZipCodeDetector from '@/components/common/zipCodeDetector/ZipCodeDetector';



const AboutBrief = () => {
    return (
        <section className={styles.aboutBriefContainer}>
            <h2 className={styles.aboutTitle}>About Us</h2>
            <p>
                {BASE_DATA.siteName} provides top-notch solutions for your everyday needs.
                Our team is dedicated to delivering quality and reliability you can trust.
                With years of experience in the industry, we pride ourselves on our commitment to customer satisfaction and innovative problem-solving.
                Whether you need assistance with home services, business support, or specialized consulting, our experts are here to help you achieve your goals.
                Discover how our personalized approach and attention to detail set us apart from the competition.
            </p>
                
            <p className={styles.aboutContent}>
                {BASE_DATA.siteName} was founded to offer dependable, all-in-one solutions
                for commercial and residential clients, with a primary focus on doors,
                locks, parking lot maintenance, and other construction needs. We
        recognize that every project is unique, and we work closely with our
        clients to deliver customized services that meet their specific
        requirements.
      </p>
      <p className={styles.aboutContent}>
        Our expertise in doors, locks, parking lots, and construction solutions
        is backed by a dedication to professionalism and customer care. We
        strive to provide seamless, worry-free experiences, ensuring peace of
        mind and confidence in our work. All services are performed in
        accordance with industry standards and applicable laws, with guarantees
        as outlined in our service agreements.
      </p>
      {/* <div className={styles.imageContainer}>
        <Image src={img} alt="About Us" className={styles.aboutImage} />
        <Image src={img} alt="About Us" className={styles.aboutImage} />
        <Image src={img} alt="About Us" className={styles.aboutImage} />
        </div> */}

        {/* <ZipCodeDetector text="Service in Your Area" /> */}
      <a href="/about">
          <button className={styles.learnMoreButton}>
              Read More
          </button>
      </a>
      <PhotoCollage a={PHOTO_COLLAGE_ABOUT_BRIEF.a} b={PHOTO_COLLAGE_ABOUT_BRIEF.b} c={PHOTO_COLLAGE_ABOUT_BRIEF.c}  fullscreen={false} />
    

            {/* <Link to="/about">
                <button className={styles.learnMoreButton}>
                    Learn More
                </button>
            </Link> */}
        </section>
    );
};

export default AboutBrief;