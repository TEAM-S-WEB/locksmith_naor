"use client"

import React, {useState} from 'react'
import styles from './adminpage.module.css'
import Input from './input/Input'
import {useAdminContext} from '@/context/contextAdmin'; 
import { useUserContext } from '@/context/contextUser';
import { useContextInfo } from '@/context/contextInfo';

const AdminPage = () => {
  const { data } = useAdminContext();
  const { user } = useUserContext();
  const { state } = useContextInfo();
  const [selectedData, setSelectedData] = useState(null);


  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.dashboardTitle}>Admin Dashboard</h2>
      <div className={styles.buttonGroup}>
        <button className={`${styles.actionButton} ${styles.searchButton}`} onClick={() => setSelectedData(data.Users)}>Users</button>
        <button className={`${styles.actionButton} ${styles.searchButton}`} onClick={() => setSelectedData(data.support)}>support</button>
        <button className={`${styles.actionButton} ${styles.searchButton}`} onClick={() => setSelectedData(data.volunteers)}>volunteers</button>
      </div>
       <div className={styles.buttonGroup}>
        <button className={`${styles.actionButton} ${styles.searchButton}`} onClick={() => setSelectedData(data.Events)}>Events</button>
        <button className={`${styles.actionButton} ${styles.searchButton}`} onClick={() => setSelectedData(data.Updates)}>Updates</button>
        <button className={`${styles.actionButton} ${styles.searchButton}`} onClick={() => setSelectedData(data.Halacha)}>Halacha</button>
      </div>
      <Input data={selectedData} />
    </div>
  )
}

export default AdminPage