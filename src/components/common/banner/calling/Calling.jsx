import React from 'react'
import styles from './calling.module.css'
import { FaPhone } from "react-icons/fa6";

const Calling = () => {
return (
    <div className={styles.callingContainer}>
        <div className={styles.cubesWrapper}>
            <div className={styles.cube}>
                <a href="tel:7189026543" className={styles.phoneLink}>
                    <FaPhone className={styles.phoneIcon} />
                </a>
                <h3 className={styles.cubeTitle}>Door Service</h3>
                <p className={styles.cubeDescription}>Expert solutions for all your door needs.</p>
            </div>
            <div className={styles.cube}>
                <a href="tel:7189026543" className={styles.phoneLink}>
                    <FaPhone className={styles.phoneIcon} />
                </a>
                <h3 className={styles.cubeTitle}>Locksmith Service</h3>
                <p className={styles.cubeDescription}>Professional lock installation and repair.</p>
            </div>
            <div className={styles.cube}>
                <a href="tel:7189026543" className={styles.phoneLink}>
                    <FaPhone className={styles.phoneIcon} />
                </a>
                <h3 className={styles.cubeTitle}>Garage Door Service</h3>
                <p className={styles.cubeDescription}>Reliable garage door maintenance and support.</p>
            </div>
        </div>
    </div>
)
}

export default Calling