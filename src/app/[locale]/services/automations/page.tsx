"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Footer from '@/components/Footer';
import styles from '../services.module.css';

export default function AutomationsServicePage() {
    const locale = useLocale();
    const t = useTranslations('services');
    const tAuto = useTranslations('services.automations');

    useEffect(() => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: 'Automations Service',
                language: locale
            });
        }
    }, [locale]);

    const handleCtaClick = () => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('trackCustom', 'ServiceCta', {
                service: 'Automations',
                language: locale
            });
        }
    };

    return (
        <>
            <main className="min-h-screen pt-24 md:pt-32 w-full max-w-7xl mx-auto px-4 md:px-8">
                <Link href={`/${locale}#Service`} className={styles.backLink}>
                    {t('backToServices')}
                </Link>

                <div
                    className={styles.heroSection}
                    style={{ backgroundImage: 'url(/images/services/automations.avif)' }}
                >
                    <div className={styles.heroContent}>
                        <div className={styles.heroNumber}>{tAuto('number')}</div>
                        <h1 className={styles.heroTitle}>{tAuto('title')}</h1>
                        <p className={styles.heroTagline}>
                            {tAuto('tagline')}
                        </p>
                    </div>
                </div>

                <section className={styles.contentSection}>
                    <div className={styles.grid}>
                        <div className={styles.descriptionBlock}>
                            <div className={styles.sectionLabel}>{t('whatWeDo')}</div>
                            <p className={styles.description}>
                                {tAuto('description1')}
                            </p>
                            <p className={styles.description}>
                                {tAuto('description2')}
                            </p>

                            <div className={styles.techStack}>
                                <div className={styles.sectionLabel}>{t('techStack')}</div>
                                <div className={styles.techList}>
                                    <span className={styles.techItem}>n8n</span>
                                    <span className={styles.techItem}>Make</span>
                                    <span className={styles.techItem}>Zapier</span>
                                    <span className={styles.techItem}>APIs</span>
                                    <span className={styles.techItem}>Webhooks</span>
                                    <span className={styles.techItem}>Cron Jobs</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pricingBlock}>
                            <h3 className={styles.pricingTitle}>{t('pricing')}</h3>
                            <div className={styles.pricingList}>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tAuto('pricing.simpleAutomation.name')}</div>
                                        <div className={styles.pricingNote}>{tAuto('pricing.simpleAutomation.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        <span className={styles.pricingFrom}>{t('from')} </span>{tAuto('pricing.simpleAutomation.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tAuto('pricing.complexAutomation.name')}</div>
                                        <div className={styles.pricingNote}>{tAuto('pricing.complexAutomation.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        <span className={styles.pricingFrom}>{t('from')} </span>{tAuto('pricing.complexAutomation.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tAuto('pricing.enterpriseAutomation.name')}</div>
                                        <div className={styles.pricingNote}>{tAuto('pricing.enterpriseAutomation.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>{t('custom')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.ctaSection}>
                    <Link
                        href={`/${locale}#contact`}
                        className={styles.ctaButton}
                        onClick={handleCtaClick}
                    >
                        {t('startProject')}
                        <div className={styles.ctaArrowCircle}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.ctaArrowIcon}>
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                </section>
            </main>
            <Footer />
        </>
    );
}
