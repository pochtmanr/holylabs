"use client";
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { locales, localeNames, type Locale } from '@/i18n/config';
import styles from './LanguageSwitcher.module.css';

const flags: Record<Locale, React.ReactNode> = {
    en: (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
            <rect width="60" height="30" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
        </svg>
    ),
    he: (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
            <rect width="60" height="30" fill="#fff"/>
            <rect y="3" width="60" height="4" fill="#0038b8"/>
            <rect y="23" width="60" height="4" fill="#0038b8"/>
            <path d="M30,8 L34,14 L30,20 L26,14 Z" fill="none" stroke="#0038b8" strokeWidth="1.5"/>
            <path d="M30,10 L34,16 L26,16 Z" fill="none" stroke="#0038b8" strokeWidth="1.5"/>
        </svg>
    ),
    ru: (
        <svg viewBox="0 0 60 30" className={styles.flagSvg}>
            <rect width="60" height="10" fill="#fff"/>
            <rect y="10" width="60" height="10" fill="#0039A6"/>
            <rect y="20" width="60" height="10" fill="#D52B1E"/>
        </svg>
    )
};

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if click is on dropdown
            const dropdown = document.querySelector(`.${styles.dropdown}`);
            if (dropdown && dropdown.contains(event.target as Node)) {
                return;
            }
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            const dropdownWidth = 150;
            setDropdownPosition({
                top: rect.bottom + 8,
                left: Math.max(8, rect.right - dropdownWidth)
            });
        }
    }, [isOpen]);

    // Close on scroll
    useEffect(() => {
        if (isOpen) {
            const handleScroll = () => setIsOpen(false);
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [isOpen]);

    const switchLocale = (newLocale: Locale) => {
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');

        router.push(newPath);
        setIsOpen(false);
    };

    const dropdown = isOpen && mounted ? createPortal(
        <ul
            className={styles.dropdown}
            role="listbox"
            style={{
                top: dropdownPosition.top,
                left: dropdownPosition.left
            }}
        >
            {locales.map((loc) => (
                <li key={loc}>
                    <button
                        className={`${styles.option} ${loc === locale ? styles.optionActive : ''}`}
                        onClick={() => switchLocale(loc)}
                        role="option"
                        aria-selected={loc === locale}
                    >
                        <span className={styles.flag}>{flags[loc]}</span>
                        <span className={styles.localeName}>{localeNames[loc]}</span>
                    </button>
                </li>
            ))}
        </ul>,
        document.body
    ) : null;

    return (
        <div className={styles.container} ref={containerRef}>
            <button
                ref={triggerRef}
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <svg className={styles.globeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span className={styles.locale}>{locale.toUpperCase()}</span>
                <svg
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            {dropdown}
        </div>
    );
}
