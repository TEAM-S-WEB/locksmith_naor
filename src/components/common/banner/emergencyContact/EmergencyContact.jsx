"use client";

import React, { useRef, useState } from "react";
import styles from "./emergencycontact.module.css";
import { MdOutlineEmergency } from "react-icons/md";
import { SendingDetails } from '@/services/contact.service';




const EmergencyContact = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [textButton, setTextButton] = useState("send message");

  const NameRef = useRef();
  const PhoneRef = useRef();
  const ZipRef = useRef();
  // const subjectRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: NameRef.current.value,
      phone: PhoneRef.current.value,
      subject:  "Emergency Contact",
      zipCode: ZipRef.current.value,
    };
    setIsLoading(true);
    const res = await SendingDetails(data);
    if (res) {
      setIsLoading(false);
      setTextButton("We will get back to you soon");
    }
    NameRef.current.value = "";
    PhoneRef.current.value = "";
    // subjectRef.current.value = "";
    ZipRef.current.value = "";
  };

  return (
    <div className={styles.container}>
        <MdOutlineEmergency className={styles.icon} />
      <h2 className={styles.header}>Emergency Contact 24/7</h2>
      <p className={styles.description}>
        In case of emergency, please contact us at:
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.contactInfo}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            required
            ref={NameRef}
          />

          <label className={styles.label} htmlFor="zip">
            Zip Code:
          </label>
          <input
            className={styles.input}
            type="text"
            id="zip"
            name="zip"
            required
            ref={ZipRef}
          />

          <label className={styles.label} htmlFor="phone">
            Your Phone:
          </label>
          <input
            className={styles.input}
            type="text"
            id="phone"
            name="phone"
            required
            ref={PhoneRef}
          />
        </div>
        <div className={styles.btn}>
          <button className={styles.button} type="submit">
            {textButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmergencyContact;
