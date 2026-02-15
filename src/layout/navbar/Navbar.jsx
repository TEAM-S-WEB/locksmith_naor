"use client"

import React, { useState } from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import logo from '@/images/logo2027.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleHamburgerClick = () => {
        setMenuOpen((prev) => !prev)
    }

    return (
        <div className={styles.navbar}>
            <a href="/" className={styles.navbarLogo}>
            <Image
                src={logo}
                alt="logo-site"
                width={155}
                height={95}
            />
            </a>
            <div
                className={styles.hamburger}
                onClick={handleHamburgerClick}
                aria-label="Toggle navigation"
                tabIndex={0}
                role="button"
            >
                <div className={styles.hamburgerBar}></div>
                <div className={styles.hamburgerBar}></div>
                <div className={styles.hamburgerBar}></div>
            </div>
            <div
                className={`${styles.navLinks} ${menuOpen ? styles.showNavLinks : ''}`}
            >
                <a href="/" className={styles.navLink}>Home</a>
                <a href="/about" className={styles.navLink}>About</a>
                <a href="/blogs" className={styles.navLink}>Blogs</a>
                <a href="/services" className={styles.navLink}>Services</a>
                <a href="/contact" className={styles.navLink}>Contact</a>
            </div>
        </div>
    )
}

export default Navbar