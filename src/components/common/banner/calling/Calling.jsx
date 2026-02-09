import React from 'react'
import styles from './calling.module.css'
import { FaPhone } from "react-icons/fa6";

const Calling = ({phone, cubeTitle_A, cubeTitle_B, cubeTitle_C, cubeDescription_A, cubeDescription_B, cubeDescription_C}) => {
return (
    <div className={styles.callingContainer}>
        <div className={styles.cubesWrapper}>
            {cubeTitle_A && (
            <div className={styles.cube}>
                <a href={`tel:${phone}`} className={styles.phoneLink}>
                    <FaPhone className={styles.phoneIcon} />
                </a>
                <h3 className={styles.cubeTitle}>{cubeTitle_A}</h3>
                <p className={styles.cubeDescription}>{cubeDescription_A}</p>
            </div>
            )}
            {cubeTitle_B && (   
            <div className={styles.cube}>
                <a href={`tel:${phone}`} className={styles.phoneLink}>
                    <FaPhone className={styles.phoneIcon} />
                </a>
                <h3 className={styles.cubeTitle}>{cubeTitle_B}</h3>
                <p className={styles.cubeDescription}>{cubeDescription_B}</p>
            </div>
            )}
            {cubeTitle_C && (   
            <div className={styles.cube}>
                <a href={`tel:${phone}`} className={styles.phoneLink}>
                    <FaPhone className={styles.phoneIcon} />
                </a>
                <h3 className={styles.cubeTitle}>{cubeTitle_C}</h3>
                <p className={styles.cubeDescription}>{cubeDescription_C}</p>
            </div>
            )}
        </div>
    </div>
)
}

export default Calling