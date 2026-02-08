"use client";

import React, {useState, useRef} from "react";
import styles from "./input.module.css";

const Input = ({ data }) => {
const [showUpdateInput, setShowUpdateInput] = useState(false);
const updateInputRef = useRef(null);


const handleUpdateSubmit = () => {
  // Handle update submit logic
  const newValue = updateInputRef.current.value;
  console.log("Updated value:", newValue);
  setShowUpdateInput(false);
};

  return (
    <div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Admin Dashboard</h2>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Search Users</label>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Search by name or email"
          />
        </div>
        <div className={styles.buttonGroup}>
          <button className={`${styles.actionButton} ${styles.searchButton}`}>
            Search
          </button>
        </div>
        <div className={styles.listContainer}>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.listContentContainer}>
                  <div className={styles.listContent}>{item.content}</div>
                  <div className={styles.buttonGroup}>
                    <button
                      className={`${styles.actionButton} ${styles.updateButton}`}
                      onClick={() => setShowUpdateInput(index)}
                  >
                    Update
                  </button>
                </div>
                </div>
                {showUpdateInput === index && (
                  <div className={styles.updateInputContainer}>
                    <textarea
                      type="text"
                      className={styles.updateInput}
                      placeholder="Enter new value"
                      ref={updateInputRef}
                      style={{ width: "100%", marginTop: "8px" }}
                    />
                    <button
                      className={`${styles.actionButton} ${styles.submitButton}`}
                      style={{ marginTop: "8px" }}
                      onClick={handleUpdateSubmit}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className={styles.noResults}>No results found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;

   