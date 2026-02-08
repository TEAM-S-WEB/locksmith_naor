import React from 'react'
import styles from './registerpage.module.css'

const RegisterPage = () => {
  return (
     <div className={styles.container}>
        <h1 className={styles.heading}>
            Register 
        </h1>
        <p className={styles.description}>
            Please fill out the form below to register.
        </p>
        <form className={styles.form}>
            <label className={styles.label} htmlFor="name">Name:</label>
            <input className={styles.input} type="text" id="name" name="name" required />

            <label className={styles.label} htmlFor="email">Email:</label>
            <input className={styles.input} type="email" id="email" name="email" required />


            <label className={styles.label} htmlFor="phone">Phone:</label>
            <input className={styles.input} type="tel" id="phone" name="phone" required />


            <button className={styles.button} type="submit">Register</button>
        </form>
    </div>
  )
}

export default RegisterPage