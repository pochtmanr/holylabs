"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={styles.header} style={{
            transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
            padding: isScrolled ? '1rem 2rem' : '1.5rem 2rem'
        }}>
            <nav className={styles.navbar}>
                <Link href="/" className={styles.logo}>
                    HolyLabs
                </Link>

                <div className={styles.navLinks}>
                    <Link href="/#about" className={styles.navLink}>About</Link>
                    <Link href="/#services" className={styles.navLink}>Services</Link>
                    <Link href="/#work" className={styles.navLink}>Work</Link>
                    <Link href="/#contact" className={styles.navLink}>Contact</Link>
                </div>

                <div className={styles.menuButton}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
            </nav>
        </header>
    );
}
