"use client";

import React, { useRef, useState } from 'react'
import { SendingDetails } from '@/services/contact.service';
import styles from './contactpage.module.css'

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
      message: MessageRef.current.value
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
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.description}>We'd love to hear from you!</p>
        <form onSubmit={hundelSubmit} className={styles.form}>
            <label className={styles.label} htmlFor="name">Name:</label>
            <input className={styles.input} ref={NameRef} type="text" id="name" name="name" required />

            <label className={styles.label} htmlFor="phone">Phone:</label>
            <input className={styles.input} ref={PhoneRef} type="tel" id="phone" name="phone" required />

            <label className={styles.label} htmlFor="email">Email:</label>
            <input className={styles.input} ref={EmailRef} type="email" id="email" name="email" required />

            <label className={styles.label} htmlFor="message">Message:</label>
            <textarea className={styles.textarea} ref={MessageRef} id="message" name="message" required></textarea>

            <button className={styles.button} type="submit">{textButton}</button>
        </form>
    </div>
  )
}

export default ContactPage