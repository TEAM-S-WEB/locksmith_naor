import React from 'react'
import styles from "./LocationServices.module.css"
import { VscDebugBreakpointLog } from "react-icons/vsc";

const LocationServices = ({local_a, local_b, local_c}) => {
  return (
    <div className={styles.locationServices}>
        {/* <p>Services in :</p> */}
      <div className={styles.local_a}>{local_a}</div>
      <VscDebugBreakpointLog size={20} color='#d69929ff'/>
      <div className={styles.local_b}>{local_b}</div>
        <VscDebugBreakpointLog size={20} color='#d69929ff'/>
      <div className={styles.local_c}>{local_c}</div>
    </div>
  )
}

export default LocationServices