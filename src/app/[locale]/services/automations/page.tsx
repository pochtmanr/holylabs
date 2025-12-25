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

    const benefits = [
        { key: 'connectTools' },
        { key: 'eliminateManual' },
        { key: 'builtToLast' },
        { key: 'support' }
    ];

    const useCases = [
        { key: 'leadFollowup' },
        { key: 'crmUpdates' },
        { key: 'invoiceCreation' },
        { key: 'reporting' },
        { key: 'clientOnboarding' }
    ];

    const results = [
        { key: 'ecommerce' },
        { key: 'agency' },
        { key: 'saas' }
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
                    style={{ backgroundImage: 'url(/images/services/automations.avif)' }}
                >
                    <div className={styles.heroContent}>
                        <div className={styles.heroNumber}>{tAuto('number')}</div>
                        <h1 className={styles.heroTitle}>{tAuto('title')}<br />{tAuto('titleLine2')}</h1>
                    </div>
                </div>

                {/* Hero Text Below Image */}
                <div className={styles.heroTextBelow}>
                    <div className={styles.eyebrow}>{tAuto('eyebrow')}</div>
                    <p className={styles.heroSubheader}>{tAuto('tagline')}</p>
                    <div className={styles.proofLine}>
                        <span className={styles.proofCheck}>✓</span>
                        {tAuto('proofLine')}
                    </div>
                </div>

                {/* Benefits Section */}
                <section className={styles.benefitsSection}>
                    <div className={styles.sectionLabel}>{tAuto('whyFounders')}</div>

                    <div className={styles.benefitsList}>
                        {benefits.map((benefit) => (
                            <div key={benefit.key} className={styles.benefitItem}>
                                <span className={styles.benefitCheck}>✓</span>
                                <div className={styles.benefitContent}>
                                    <span className={styles.benefitTitle}>
                                        {tAuto(`benefits.${benefit.key}.title`)}
                                    </span>
                                    <span className={styles.benefitDescription}>
                                        {tAuto(`benefits.${benefit.key}.description`)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#usecases" className={styles.seeWorkLink}>
                        {tAuto('seeOurWork')}
                    </a>
                </section>

                {/* Use Cases Section */}
                <section id="usecases" className={styles.useCasesSection}>
                    <div className={styles.sectionLabel}>{tAuto('ourWork')}</div>
                    <div className={styles.useCasesTable}>
                        <div className={styles.useCasesHeader}>
                            <span>Process</span>
                            <span>Before</span>
                            <span>After</span>
                        </div>
                        {useCases.map((useCase) => (
                            <div key={useCase.key} className={styles.useCaseRow}>
                                <span className={styles.useCaseProcess}>{tAuto(`useCases.${useCase.key}.process`)}</span>
                                <span className={styles.useCaseBefore}>{tAuto(`useCases.${useCase.key}.before`)}</span>
                                <span className={styles.useCaseAfter}>{tAuto(`useCases.${useCase.key}.after`)}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Results Section */}
                <section className={styles.resultsSection}>
                    <div className={styles.sectionLabel}>{tAuto('results.title')}</div>
                    <div className={styles.resultsGrid}>
                        {results.map((result) => (
                            <div key={result.key} className={styles.resultItem}>
                                <div className={styles.resultName}>{tAuto(`results.${result.key}.name`)}</div>
                                <p className={styles.resultDesc}>
                                    {tAuto(`results.${result.key}.description`)}
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
                                <span className={styles.techItem}>n8n</span>
                                <span className={styles.techItem}>Make</span>
                                <span className={styles.techItem}>APIs</span>
                                <span className={styles.techItem}>Webhooks</span>
                                <span className={styles.techItem}>CRM</span>
                                <span className={styles.techItem}>Slack</span>
                            </div>
                        </div>

                        <div className={styles.pricingBlock}>
                            <h3 className={styles.pricingTitle}>{tAuto('pricingTitle')}</h3>
                            <div className={styles.pricingList}>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tAuto('pricing.starterWorkflow.name')}</div>
                                        <div className={styles.pricingNote}>{tAuto('pricing.starterWorkflow.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        {tAuto('pricing.starterWorkflow.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tAuto('pricing.growthSystem.name')}</div>
                                        <div className={styles.pricingNote}>{tAuto('pricing.growthSystem.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        {tAuto('pricing.growthSystem.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tAuto('pricing.operationsOverhaul.name')}</div>
                                        <div className={styles.pricingNote}>{tAuto('pricing.operationsOverhaul.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>{tAuto('pricing.operationsOverhaul.price')}</div>
                                </div>
                            </div>
                            <div className={styles.pricingFooter}>
                                <p className={styles.pricingFooterText}>{tAuto('pricingNote')}</p>
                                <Link
                                    href={`/${locale}#contact`}
                                    className={styles.pricingCtaButton}
                                    onClick={handleCtaClick}
                                >
                                    {tAuto('pricingCta')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className={styles.processSection}>
                    <div className={styles.sectionLabel}>{tAuto('process.title')}</div>
                    <div className={styles.processGrid}>
                        {processSteps.map((step) => (
                            <div key={step.key} className={styles.processStep}>
                                <div className={styles.processNumber}>{step.number}</div>
                                <div>
                                    <div className={styles.processName}>{tAuto(`process.${step.key}.name`)}</div>
                                    <p className={styles.processDescription}>
                                        {tAuto(`process.${step.key}.description`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <div className={styles.sectionLabel}>{tAuto('faq.title')}</div>
                    <div className={styles.faqList}>
                        {faqItems.map((item) => (
                            <div key={item} className={styles.faqItem}>
                                <div className={styles.faqQuestion}>{tAuto(`faq.${item}.question`)}</div>
                                <p className={styles.faqAnswer}>{tAuto(`faq.${item}.answer`)}</p>
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
                        {tAuto('processCta')}
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
