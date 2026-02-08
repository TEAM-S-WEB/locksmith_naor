"use client";

import React, { useState, useEffect } from "react";
import styles from "./zipcodedetector.module.css";

const ZipCodeDetector = ({text}) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setLocation(data.city + ", " + data.region); // למשל: "Brooklyn, New York"
      });
  }, []);

  return (
    <div className={styles.zipCodeDetector}>
      <h2 className={styles.title}>{text}</h2>
      <p className={styles.description}>
      Our service is available in the {location} area.
      </p>
    </div>
  );
};

export default ZipCodeDetector;
