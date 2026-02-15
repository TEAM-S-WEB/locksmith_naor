"use client";

import { useState } from "react";
import styles from "./ScheduleAppointment.module.css";
import Image from "next/image";
import img_g from "@/images/g.jpg";

export default function ScheduleAppointment({ img }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceNeeded: "Residential Lock Services",
    date: "",
    arrivalWindow: "8AM - 10AM",
    address: "",
    zip: "",
    message: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    // כאן את מחברת ל-API שלך / Email service / CRM
    console.log("submit:", form);
    alert("Thanks! We received your request.");
  }

  return (
    <section className={styles.wrap}>
      {/* Left image */}
      <div className={styles.left} aria-hidden="true" />

      {/* Right form */}
      {/* <Image
        src={img || img_g}
        alt="Schedule Appointment"
        className={styles.bgImage}
        width={500}
        height={500}
      /> */}
      <div className={styles.right}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Schedule Your Appointment</h2>

          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.grid}>
              <Field label="Full Name" required>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  placeholder=""
                  required
                />
              </Field>

              <Field label="Email" required>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder=""
                  required
                />
              </Field>

              <Field label="Phone" required>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder=""
                  required
                />
              </Field>

              <Field label="Service Needed" required>
                <select
                  name="serviceNeeded"
                  value={form.serviceNeeded}
                  onChange={onChange}
                  required
                >
                  <option>Residential Lock Services</option>
                  <option>Commercial Locksmith</option>
                  <option>Car Key / Automotive</option>
                  <option>Door Repair</option>
                  <option>Emergency Lockout</option>
                </select>
              </Field>

              <Field label="Desired Inspection Date" required>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={onChange}
                  required
                />
              </Field>

              <Field label="Arrival Window" required>
                <select
                  name="arrivalWindow"
                  value={form.arrivalWindow}
                  onChange={onChange}
                  required
                >
                  <option>8AM - 10AM</option>
                  <option>10AM - 12PM</option>
                  <option>12PM - 2PM</option>
                  <option>2PM - 4PM</option>
                  <option>4PM - 6PM</option>
                </select>
              </Field>

              <Field label="Address" required>
                <input
                  name="address"
                  value={form.address}
                  onChange={onChange}
                  placeholder=""
                  required
                />
              </Field>

              <Field label="Zip Code" required>
                <input
                  name="zip"
                  value={form.zip}
                  onChange={onChange}
                  placeholder=""
                  required
                />
              </Field>

              <div className={styles.full}>
                <Field label="Message" required>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    required
                  />
                </Field>
              </div>
            </div>

            <button className={styles.button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className={styles.field}>
      <div className={styles.labelRow}>
        <span className={styles.label}>{label}</span>
        {required && <span className={styles.req}>*</span>}
      </div>
      {children}
    </label>
  );
}
