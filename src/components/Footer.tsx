"use client";
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer() {
    const t = useTranslations('footer');
    const locale = useLocale();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.mainSection}>
                    <div className={styles.brandSection}>
                        <Link href={`/${locale}`} className={styles.logo}>
                            HolyLabs
                        </Link>
                        <p className={styles.tagline}>
                            {t('tagline')}
                        </p>
                    </div>

                    <div className={styles.linksSection}>
                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>{t('connect')}</h4>
                            <a href="https://www.linkedin.com/company/theholylabs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://wa.me/972542474747" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            <a href="mailto:info@holylabs.net">info@holylabs.net</a>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>{t('legal')}</h4>
                            <Link href={`/${locale}/privacy`}>{t('privacyPolicy')}</Link>
                            <Link href={`/${locale}/cookies`}>{t('cookiesPolicy')}</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.copy}>
                        {t('copyright', { year: new Date().getFullYear() })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
