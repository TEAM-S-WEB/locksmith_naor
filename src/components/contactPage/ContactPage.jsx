"use client";

import React, { useRef, useState } from "react";
import { SendingDetails } from "@/services/contact.service";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
import styles from "./contactpage.module.css";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [textButton, setTextButton] = useState("send");

  const NameRef = useRef();
  const PhoneRef = useRef();
  const EmailRef = useRef();
  const MessageRef = useRef();

  const hundelSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: NameRef.current.value,
      phone: PhoneRef.current.value,
      email: EmailRef.current.value,
      subject: "contact",
      message: MessageRef.current.value,
    };
    setIsLoading(true);
    const res = await SendingDetails(data);
    if (res) {
      setIsLoading(false);
      setTextButton("We will get back to you soon");
    }
    NameRef.current.value = "";
    PhoneRef.current.value = "";
    EmailRef.current.value = "";
    MessageRef.current.value = "";
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.description}>We'd love to hear from you!</p>
        <form onSubmit={hundelSubmit} className={styles.form}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input
            className={styles.input}
            ref={NameRef}
            type="text"
            id="name"
            name="name"
            required
          />

          <label className={styles.label} htmlFor="phone">
            Phone:
          </label>
          <input
            className={styles.input}
            ref={PhoneRef}
            type="tel"
            id="phone"
            name="phone"
            required
          />

          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.input}
            ref={EmailRef}
            type="email"
            id="email"
            name="email"
            required
          />

          <label className={styles.label} htmlFor="message">
            Message:
          </label>
          <textarea
            className={styles.textarea}
            ref={MessageRef}
            id="message"
            name="message"
            required
          ></textarea>

          <button className={styles.button} type="submit">
            {textButton}
          </button>
        </form>
      </div>
      {/* <div className={styles.detailsContainer}>
        <h2 className={styles.detailsHeading}>Our Contact Details</h2>
        <p className={styles.detailsText}>
          <strong>Address:</strong> 123 Main Street, Anytown, USA <br />
          <strong>Phone:</strong> (123) 456-7890 <br />
          <strong>Email:</strong> contact@locksmithanddoors.com <br />
          <strong>Business Hours:</strong> Mon-Fri: 9am - 6pm, Sat: 10am - 4pm,
          Sun: Closed
        </p>

      </div> */}
      <div className={styles.contactWrapper}>

      <div className={styles.contactItem}>
        <FaPhoneAlt className={styles.icon} />
        <div>
          <h3>Phone</h3>
          <p className={styles.highlight}>212-780-0144</p>
        </div>
      </div>

      <div className={styles.contactItem}>
        <FaMapMarkerAlt className={styles.icon} />
        <div>
          <h3>Address</h3>
          <p>400 2nd Ave, NY, NY 10010</p>
        </div>
      </div>

      <div className={styles.contactItem}>
        <FaClock className={styles.icon} />
        <div>
          <h3>Opening Hours</h3>
          <p>9:00AM - 6:00PM Mon-Fri</p>
        </div>
      </div>

      <div className={styles.contactItem}>
        <FaEnvelope className={styles.icon} />
        <div>
          <h3>Email</h3>
          <p>info@mr-locks.com</p>
        </div>
      </div>

    </div>
    </div>
  );
};

export default ContactPage;
