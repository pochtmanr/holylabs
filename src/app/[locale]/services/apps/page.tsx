"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Footer from '@/components/Footer';
import styles from '../services.module.css';

export default function AppsServicePage() {
    const locale = useLocale();
    const t = useTranslations('services');
    const tApps = useTranslations('services.apps');

    useEffect(() => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: 'Apps Service',
                language: locale
            });
        }
    }, [locale]);

    const handleCtaClick = () => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('trackCustom', 'ServiceCta', {
                service: 'Apps',
                language: locale
            });
        }
    };

    const portfolioItems = [
        { key: 'simnetiq', website: 'https://www.simnetiq.store/', appStore: 'https://apps.apple.com/us/app/simnetiq-global-esim/id6755963262', googlePlay: 'https://play.google.com/store/apps/details?id=com.simnetiq.storeAndroid' },
        { key: 'goDelivery', appStore: 'https://apps.apple.com/es/app/go-delivery/id6747035141', googlePlay: 'https://play.google.com/store/apps/details?id=com.theholylabs.melon' },
        { key: 'montiVpn', appStore: 'https://apps.apple.com/de/app/monti-vpn/id6755795018', googlePlay: 'https://play.google.com/store/apps/details?id=com.theholylabs.rock' },
        { key: 'roamjet', appStore: 'https://apps.apple.com/us/app/roamjet-esim/id6751737433', googlePlay: 'https://play.google.com/store/apps/details?id=com.theholylabs.esim' },
        { key: 'vitrix', website: 'https://muscle-up-main-green.vercel.app/', googlePlay: 'https://play.google.com/store/apps/details?id=com.muscleup.muscleup' },
        { key: 'branndi', appStore: 'https://apps.apple.com/at/app/branndi/id6755268249', googlePlay: 'https://play.google.com/store/apps/details?id=com.theholylabs.branndi' },
        { key: 'plugiq', appStore: 'https://apps.apple.com/us/app/plugiq/id6748287564' }
    ];

    const benefits = [
        { key: 'oneCodebase' },
        { key: 'transparentPricing' },
        { key: 'weeklyUpdates' },
        { key: 'postLaunch' }
    ];

    const processSteps = [
        { key: 'step1', number: 1 },
        { key: 'step2', number: 2 },
        { key: 'step3', number: 3 },
        { key: 'step4', number: 4 }
    ];

    const faqItems = ['q1', 'q2', 'q3', 'q4', 'q5'];

    return (
        <>
            <main className="min-h-screen pt-24 md:pt-32 w-full max-w-7xl mx-auto px-4 md:px-8">
                <Link href={`/${locale}#Service`} className={styles.backLink}>
                    {t('backToServices')}
                </Link>

                {/* Hero Section */}
                <div
                    className={styles.heroSection}
                    style={{ backgroundImage: 'url(/images/services/apps.avif)' }}
                >
                    <div className={styles.heroContent}>
                        <div className={styles.heroNumber}>{tApps('number')}</div>
                        <h1 className={styles.heroTitle}>{tApps('title')}<br />{tApps('titleLine2')}</h1>
                    </div>
                </div>

                {/* Hero Text Below Image */}
                <div className={styles.heroTextBelow}>
                    <div className={styles.eyebrow}>{tApps('eyebrow')}</div>
                    <p className={styles.heroSubheader}>{tApps('tagline')}</p>
                    <div className={styles.proofLine}>
                        <span className={styles.proofCheck}>✓</span>
                        {tApps('proofLine')}
                    </div>
                </div>

                {/* Benefits Section - Why Founders Choose Us */}
                <section className={styles.benefitsSection}>
                    <div className={styles.sectionLabel}>{tApps('whyFounders')}</div>

                    <div className={styles.benefitsList}>
                        {benefits.map((benefit) => (
                            <div key={benefit.key} className={styles.benefitItem}>
                                <span className={styles.benefitCheck}>✓</span>
                                <div className={styles.benefitContent}>
                                    <span className={styles.benefitTitle}>
                                        {tApps(`benefits.${benefit.key}.title`)}
                                    </span>
                                    <span className={styles.benefitDescription}>
                                        {tApps(`benefits.${benefit.key}.description`)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#portfolio" className={styles.seeWorkLink}>
                        {tApps('seeOurWork')}
                    </a>
                </section>

                {/* Pricing Section */}
                <section className={styles.contentSection}>
                    <div className={styles.grid}>
                        <div className={styles.descriptionBlock}>
                            <div className={styles.sectionLabel}>{t('techStack')}</div>
                            <div className={styles.techList}>
                                <span className={styles.techItem}>React Native</span>
                                <span className={styles.techItem}>Expo</span>
                                <span className={styles.techItem}>TypeScript</span>
                                <span className={styles.techItem}>Firebase</span>
                                <span className={styles.techItem}>Supabase</span>
                                <span className={styles.techItem}>REST APIs</span>
                                <span className={styles.techItem}>Push Notifications</span>
                            </div>
                        </div>

                        <div className={styles.pricingBlock}>
                            <h3 className={styles.pricingTitle}>{tApps('pricingTitle')}</h3>
                            <div className={styles.pricingList}>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tApps('pricing.mvpLaunch.name')}</div>
                                        <div className={styles.pricingNote}>{tApps('pricing.mvpLaunch.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        <span className={styles.pricingFrom}>{t('from')} </span>{tApps('pricing.mvpLaunch.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tApps('pricing.fullProduct.name')}</div>
                                        <div className={styles.pricingNote}>{tApps('pricing.fullProduct.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        <span className={styles.pricingFrom}>{t('from')} </span>{tApps('pricing.fullProduct.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tApps('pricing.enterprise.name')}</div>
                                        <div className={styles.pricingNote}>{tApps('pricing.enterprise.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>{tApps('pricing.enterprise.price')}</div>
                                </div>
                            </div>
                            <div className={styles.pricingFooter}>
                                <p className={styles.pricingFooterText}>{tApps('pricingNote')}</p>
                                <Link
                                    href={`/${locale}#contact`}
                                    className={styles.pricingCtaButton}
                                    onClick={handleCtaClick}
                                >
                                    {tApps('pricingCta')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className={styles.portfolioSection}>
                    <div className={styles.sectionLabel}>{tApps('ourApps')}</div>
                    <div className={styles.portfolioGrid}>
                        {portfolioItems.map((item) => (
                            <div key={item.key} className={styles.portfolioItem}>
                                <div className={styles.portfolioName}>{tApps(`portfolio.${item.key}.name`)}</div>
                                <p className={styles.portfolioDesc}>
                                    {tApps(`portfolio.${item.key}.description`)}
                                </p>
                                <div className={styles.portfolioLinks}>
                                    {item.website && (
                                        <a
                                            href={item.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.portfolioLink}
                                        >
                                            {tApps('links.website')}
                                        </a>
                                    )}
                                    {item.appStore && (
                                        <a
                                            href={item.appStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.portfolioLink}
                                        >
                                            {tApps('links.appStore')}
                                        </a>
                                    )}
                                    {item.googlePlay && (
                                        <a
                                            href={item.googlePlay}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.portfolioLink}
                                        >
                                            {tApps('links.googlePlay')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Section - How It Works */}
                <section className={styles.processSection}>
                    <div className={styles.sectionLabel}>{tApps('process.title')}</div>
                    <div className={styles.processGrid}>
                        {processSteps.map((step) => (
                            <div key={step.key} className={styles.processStep}>
                                <div className={styles.processNumber}>{step.number}</div>
                                <div>
                                    <div className={styles.processName}>{tApps(`process.${step.key}.name`)}</div>
                                    <p className={styles.processDescription}>
                                        {tApps(`process.${step.key}.description`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <div className={styles.sectionLabel}>{tApps('faq.title')}</div>
                    <div className={styles.faqList}>
                        {faqItems.map((item) => (
                            <div key={item} className={styles.faqItem}>
                                <div className={styles.faqQuestion}>{tApps(`faq.${item}.question`)}</div>
                                <p className={styles.faqAnswer}>{tApps(`faq.${item}.answer`)}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <Link
                        href={`/${locale}#contact`}
                        className={styles.ctaButton}
                        onClick={handleCtaClick}
                    >
                        {tApps('processCta')}
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
