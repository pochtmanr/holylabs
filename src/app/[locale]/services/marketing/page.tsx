"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Footer from '@/components/Footer';
import styles from '../services.module.css';

export default function MarketingServicePage() {
    const locale = useLocale();
    const t = useTranslations('services');
    const tMarketing = useTranslations('services.marketing');

    useEffect(() => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: 'Marketing Service',
                language: locale
            });
        }
    }, [locale]);

    const handleCtaClick = () => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('trackCustom', 'ServiceCta', {
                service: 'Marketing',
                language: locale
            });
        }
    };

    const benefits = [
        { key: 'fullFunnel' },
        { key: 'creative' },
        { key: 'transparent' },
        { key: 'yourAccount' }
    ];

    const results = [
        { key: 'ecommerce' },
        { key: 'dental' },
        { key: 'course' }
    ];

    const services = [
        { key: 'adStrategy' },
        { key: 'creatives' },
        { key: 'management' },
        { key: 'tracking' }
    ];

    const processSteps = [
        { key: 'step1', number: 1 },
        { key: 'step2', number: 2 },
        { key: 'step3', number: 3 },
        { key: 'step4', number: 4 },
        { key: 'step5', number: 5 }
    ];

    const faqItems = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

    return (
        <>
            <main className="min-h-screen pt-24 md:pt-32 w-full max-w-7xl mx-auto px-4 md:px-8">
                <Link href={`/${locale}#Service`} className={styles.backLink}>
                    {t('backToServices')}
                </Link>

                {/* Hero Section */}
                <div
                    className={styles.heroSection}
                    style={{ backgroundImage: 'url(/images/services/ads.avif)' }}
                >
                    <div className={styles.heroContent}>
                        <div className={styles.heroNumber}>{tMarketing('number')}</div>
                        <h1 className={styles.heroTitle}>{tMarketing('title')}<br />{tMarketing('titleLine2')}</h1>
                    </div>
                </div>

                {/* Hero Text Below Image */}
                <div className={styles.heroTextBelow}>
                    <div className={styles.eyebrow}>{tMarketing('eyebrow')}</div>
                    <p className={styles.heroSubheader}>{tMarketing('tagline')}</p>
                    <div className={styles.proofLine}>
                        <span className={styles.proofCheck}>✓</span>
                        {tMarketing('proofLine')}
                    </div>
                </div>

                {/* Benefits Section */}
                <section className={styles.benefitsSection}>
                    <div className={styles.sectionLabel}>{tMarketing('whyBusinesses')}</div>

                    <div className={styles.benefitsList}>
                        {benefits.map((benefit) => (
                            <div key={benefit.key} className={styles.benefitItem}>
                                <span className={styles.benefitCheck}>✓</span>
                                <div className={styles.benefitContent}>
                                    <span className={styles.benefitTitle}>
                                        {tMarketing(`benefits.${benefit.key}.title`)}
                                    </span>
                                    <span className={styles.benefitDescription}>
                                        {tMarketing(`benefits.${benefit.key}.description`)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#results" className={styles.seeWorkLink}>
                        {tMarketing('seeResults')}
                    </a>
                </section>

                {/* Results Section */}
                <section id="results" className={styles.resultsSection}>
                    <div className={styles.sectionLabel}>{tMarketing('results.title')}</div>
                    <div className={styles.resultsGrid}>
                        {results.map((result) => (
                            <div key={result.key} className={styles.resultItem}>
                                <div className={styles.resultName}>{tMarketing(`results.${result.key}.name`)}</div>
                                <div className={styles.resultStat}>{tMarketing(`results.${result.key}.stat`)}</div>
                                <p className={styles.resultDesc}>
                                    {tMarketing(`results.${result.key}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services/What's Included Section */}
                <section className={styles.servicesSection}>
                    <div className={styles.sectionLabel}>{tMarketing('whatsIncluded')}</div>
                    <div className={styles.servicesGrid}>
                        {services.map((service) => (
                            <div key={service.key} className={styles.serviceItem}>
                                <div className={styles.serviceName}>{tMarketing(`services.${service.key}.title`)}</div>
                                <p className={styles.serviceDesc}>
                                    {tMarketing(`services.${service.key}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing Section */}
                <section className={styles.contentSection}>
                    <div className={styles.grid}>
                        <div className={styles.descriptionBlock}>
                            <div className={styles.sectionLabel}>{t('techStack')}</div>
                            <div className={styles.techList}>
                                <span className={styles.techItem}>Meta Ads</span>
                                <span className={styles.techItem}>Facebook</span>
                                <span className={styles.techItem}>Instagram</span>
                                <span className={styles.techItem}>Pixel</span>
                                <span className={styles.techItem}>Analytics</span>
                                <span className={styles.techItem}>A/B Testing</span>
                            </div>
                        </div>

                        <div className={styles.pricingBlock}>
                            <h3 className={styles.pricingTitle}>{tMarketing('pricingTitle')}</h3>
                            <div className={styles.pricingList}>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tMarketing('pricing.starter.name')}</div>
                                        <div className={styles.pricingNote}>{tMarketing('pricing.starter.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        {tMarketing('pricing.starter.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tMarketing('pricing.growth.name')}</div>
                                        <div className={styles.pricingNote}>{tMarketing('pricing.growth.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        {tMarketing('pricing.growth.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tMarketing('pricing.scale.name')}</div>
                                        <div className={styles.pricingNote}>{tMarketing('pricing.scale.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>{tMarketing('pricing.scale.price')}</div>
                                </div>
                            </div>
                            <div className={styles.pricingFooter}>
                                <p className={styles.pricingFooterText}>{tMarketing('pricingNote')}</p>
                                <Link
                                    href={`/${locale}#contact`}
                                    className={styles.pricingCtaButton}
                                    onClick={handleCtaClick}
                                >
                                    {tMarketing('pricingCta')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className={styles.processSection}>
                    <div className={styles.sectionLabel}>{tMarketing('process.title')}</div>
                    <div className={styles.processGrid}>
                        {processSteps.map((step) => (
                            <div key={step.key} className={styles.processStep}>
                                <div className={styles.processNumber}>{step.number}</div>
                                <div>
                                    <div className={styles.processName}>{tMarketing(`process.${step.key}.name`)}</div>
                                    <p className={styles.processDescription}>
                                        {tMarketing(`process.${step.key}.description`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <div className={styles.sectionLabel}>{tMarketing('faq.title')}</div>
                    <div className={styles.faqList}>
                        {faqItems.map((item) => (
                            <div key={item} className={styles.faqItem}>
                                <div className={styles.faqQuestion}>{tMarketing(`faq.${item}.question`)}</div>
                                <p className={styles.faqAnswer}>{tMarketing(`faq.${item}.answer`)}</p>
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
                        {tMarketing('processCta')}
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
