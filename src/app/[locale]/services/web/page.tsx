"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Footer from '@/components/Footer';
import styles from '../services.module.css';

export default function WebServicePage() {
    const locale = useLocale();
    const t = useTranslations('services');
    const tWeb = useTranslations('services.web');

    useEffect(() => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: 'Web Service',
                language: locale
            });
        }
    }, [locale]);

    const handleCtaClick = () => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('trackCustom', 'ServiceCta', {
                service: 'Web',
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
                    style={{ backgroundImage: 'url(/images/services/web.avif)' }}
                >
                    <div className={styles.heroContent}>
                        <div className={styles.heroNumber}>{tWeb('number')}</div>
                        <h1 className={styles.heroTitle}>{tWeb('title')}</h1>
                        <p className={styles.heroTagline}>
                            {tWeb('tagline')}
                        </p>
                    </div>
                </div>

                <section className={styles.contentSection}>
                    <div className={styles.grid}>
                        <div className={styles.descriptionBlock}>
                            <div className={styles.sectionLabel}>{t('whatWeDo')}</div>
                            <p className={styles.description}>
                                {tWeb('description1')}
                            </p>
                            <p className={styles.description}>
                                {tWeb('description2')}
                            </p>

                            <div className={styles.techStack}>
                                <div className={styles.sectionLabel}>{t('techStack')}</div>
                                <div className={styles.techList}>
                                    <span className={styles.techItem}>Next.js</span>
                                    <span className={styles.techItem}>React</span>
                                    <span className={styles.techItem}>TypeScript</span>
                                    <span className={styles.techItem}>Tailwind CSS</span>
                                    <span className={styles.techItem}>Vercel</span>
                                    <span className={styles.techItem}>Prisma</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pricingBlock}>
                            <h3 className={styles.pricingTitle}>{t('pricing')}</h3>
                            <div className={styles.pricingList}>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tWeb('pricing.landingPage.name')}</div>
                                        <div className={styles.pricingNote}>{tWeb('pricing.landingPage.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        <span className={styles.pricingFrom}>{t('from')} </span>{tWeb('pricing.landingPage.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tWeb('pricing.website.name')}</div>
                                        <div className={styles.pricingNote}>{tWeb('pricing.website.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        <span className={styles.pricingFrom}>{t('from')} </span>{tWeb('pricing.website.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tWeb('pricing.webApp.name')}</div>
                                        <div className={styles.pricingNote}>{tWeb('pricing.webApp.note')}</div>
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
