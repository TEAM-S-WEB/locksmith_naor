"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import img from "../images/bggaa.png";
import { BASE_DATA, PHOTO_COLLAGE_HOME } from "@/constants/base";

import Calling from "@/components/common/banner/calling/Calling";
import PhotoCollage from "@/components/common/banner/photoCollage/PhotoCollage";
import EmergencyContact from "@/components/common/banner/emergencyContact/EmergencyContact";
import AboutBrief from "@/components/homePage/aboutBrief/AboutBrief";
import CompanyLocation from "@/components/homePage/companyLocation/CompanyLocation";
import LocationServices from "@/components/homePage/locationServices/LocationServices";
import Callme from "@/components/common/callme/Callme";
import GoodResponse from "@/components/homePage/Goodresponse/GoodResponse";
import BrandsSection from "@/components/homePage/brands/BrandsSection";
import ScheduleAppointment from "@/components/homePage/scheduleAppointment/ScheduleAppointment";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div className={styles.page}>
      <div className={styles.heroSection}>
        <div className={styles.heroTitle}>
        {/* <h1 className={styles.heroTitle}>Welcome to {BASE_DATA.siteName}</h1> */}
        <p className={styles.callMeTitle}>Welcome to <span className={styles.locksmithSpan}>locksmith & doors </span>services in NYC!</p>
        {/* <h2 className={styles.callMeTitle}>PROFESSIONAL LOCKSMITH SERVICES</h2> */}

        <a href="tel:+1234567890" className={styles.callButton}>
          +1 234 567 890
        </a>
      </div>

        <Image src={img} alt="Locksmith Service" className={styles.heroImage} />
      </div>
      <LocationServices
        local_a="Manhatan"
        local_b="Brooklyn"
        local_c="Queens"
      />
       <LocationServices
        local_a="Bronks"
        local_b="jersey city"
      
      />
      <GoodResponse />
      <Callme />
      {/* <Calling
        phone={BASE_DATA.phone}
        cubeTitle_A="Emergency Services"
        cubeDescription_A="24/7 emergency locksmith services"
      /> */}
      <AboutBrief />

      <EmergencyContact />
      <BrandsSection /> 
      <PhotoCollage
        a={PHOTO_COLLAGE_HOME.a}
        b={PHOTO_COLLAGE_HOME.b}
        c={PHOTO_COLLAGE_HOME.c}
        d={PHOTO_COLLAGE_HOME.d}
        f={PHOTO_COLLAGE_HOME.f}
        g={PHOTO_COLLAGE_HOME.g}
      />
        <ScheduleAppointment img={PHOTO_COLLAGE_HOME.d}/>
      <CompanyLocation />
    </div>
  );
}
