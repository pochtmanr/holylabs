"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import styles from './Navbar.module.css';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const t = useTranslations('nav');
    const locale = useLocale();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { href: `/${locale}#about`, label: t('about') },
        { href: `/${locale}#Service`, label: t('services') },
        { href: `/${locale}#work`, label: t('work') },
        { href: `/${locale}#contact`, label: t('contact') },
    ];

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
                <nav className={styles.navbar}>
                    <Link href={`/${locale}`} className={styles.logo} onClick={closeMobileMenu}>
                        {t('logo')}
                    </Link>

                    <div className={styles.navLinks}>
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className={styles.navLink}>
                                {item.label}
                            </Link>
                        ))}
                        <LanguageSwitcher />
                    </div>

                    <button
                        className={`${styles.menuButton} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className={styles.menuLine}></span>
                        <span className={styles.menuLine}></span>
                        <span className={styles.menuLine}></span>
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuContent}>
                    {navItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={styles.mobileNavLink}
                            onClick={closeMobileMenu}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className={styles.mobileLanguageSwitcher}>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </>
    );
}
