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

    const portfolioItems = [
        { key: 'simnetiq', website: 'https://www.simnetiq.store/' },
        { key: 'vitrix', website: 'https://muscle-up-main-green.vercel.app/' },
        { key: 'holylabs', website: 'https://holylabs.net/' }
    ];

    const benefits = [
        { key: 'conversionFocused' },
        { key: 'nextjs' },
        { key: 'fastDelivery' },
        { key: 'support' }
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
                    style={{ backgroundImage: 'url(/images/services/web.avif)' }}
                >
                    <div className={styles.heroContent}>
                        <div className={styles.heroNumber}>{tWeb('number')}</div>
                        <h1 className={styles.heroTitle}>{tWeb('title')}<br />{tWeb('titleLine2')}</h1>
                    </div>
                </div>

                {/* Hero Text Below Image */}
                <div className={styles.heroTextBelow}>
                    <div className={styles.eyebrow}>{tWeb('eyebrow')}</div>
                    <p className={styles.heroSubheader}>{tWeb('tagline')}</p>
                    <div className={styles.proofLine}>
                        <span className={styles.proofCheck}>✓</span>
                        {tWeb('proofLine')}
                    </div>
                </div>

                {/* Benefits Section - Why Businesses Choose Us */}
                <section className={styles.benefitsSection}>
                    <div className={styles.sectionLabel}>{tWeb('whyFounders')}</div>

                    <div className={styles.benefitsList}>
                        {benefits.map((benefit) => (
                            <div key={benefit.key} className={styles.benefitItem}>
                                <span className={styles.benefitCheck}>✓</span>
                                <div className={styles.benefitContent}>
                                    <span className={styles.benefitTitle}>
                                        {tWeb(`benefits.${benefit.key}.title`)}
                                    </span>
                                    <span className={styles.benefitDescription}>
                                        {tWeb(`benefits.${benefit.key}.description`)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#portfolio" className={styles.seeWorkLink}>
                        {tWeb('seeOurWork')}
                    </a>
                </section>

                {/* Pricing Section */}
                <section className={styles.contentSection}>
                    <div className={styles.grid}>
                        <div className={styles.descriptionBlock}>
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

                        <div className={styles.pricingBlock}>
                            <h3 className={styles.pricingTitle}>{tWeb('pricingTitle')}</h3>
                            <div className={styles.pricingList}>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tWeb('pricing.launchPage.name')}</div>
                                        <div className={styles.pricingNote}>{tWeb('pricing.launchPage.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        {tWeb('pricing.launchPage.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tWeb('pricing.businessWebsite.name')}</div>
                                        <div className={styles.pricingNote}>{tWeb('pricing.businessWebsite.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        {tWeb('pricing.businessWebsite.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tWeb('pricing.webApp.name')}</div>
                                        <div className={styles.pricingNote}>{tWeb('pricing.webApp.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>{tWeb('pricing.webApp.price')}</div>
                                </div>
                            </div>
                            <div className={styles.pricingFooter}>
                                <p className={styles.pricingFooterText}>{tWeb('pricingNote')}</p>
                                <Link
                                    href={`/${locale}#contact`}
                                    className={styles.pricingCtaButton}
                                    onClick={handleCtaClick}
                                >
                                    {tWeb('pricingCta')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className={styles.portfolioSection}>
                    <div className={styles.sectionLabel}>{tWeb('ourWork')}</div>
                    <div className={styles.portfolioGrid}>
                        {portfolioItems.map((item) => (
                            <div key={item.key} className={styles.portfolioItem}>
                                <div className={styles.portfolioName}>{tWeb(`portfolio.${item.key}.name`)}</div>
                                <p className={styles.portfolioDesc}>
                                    {tWeb(`portfolio.${item.key}.description`)}
                                </p>
                                <div className={styles.portfolioLinks}>
                                    {item.website && (
                                        <a
                                            href={item.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.portfolioLink}
                                        >
                                            {tWeb('links.viewSite')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Section - How It Works */}
                <section className={styles.processSection}>
                    <div className={styles.sectionLabel}>{tWeb('process.title')}</div>
                    <div className={styles.processGrid}>
                        {processSteps.map((step) => (
                            <div key={step.key} className={styles.processStep}>
                                <div className={styles.processNumber}>{step.number}</div>
                                <div>
                                    <div className={styles.processName}>{tWeb(`process.${step.key}.name`)}</div>
                                    <p className={styles.processDescription}>
                                        {tWeb(`process.${step.key}.description`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <div className={styles.sectionLabel}>{tWeb('faq.title')}</div>
                    <div className={styles.faqList}>
                        {faqItems.map((item) => (
                            <div key={item} className={styles.faqItem}>
                                <div className={styles.faqQuestion}>{tWeb(`faq.${item}.question`)}</div>
                                <p className={styles.faqAnswer}>{tWeb(`faq.${item}.answer`)}</p>
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
                        {tWeb('processCta')}
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
