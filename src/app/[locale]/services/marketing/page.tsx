import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';
import styles from '../services.module.css';

export default async function MarketingServicePage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <MarketingContent locale={locale} />;
}

function MarketingContent({ locale }: { locale: string }) {
    const t = useTranslations('services');
    const tMarketing = useTranslations('services.marketing');

    return (
        <>
            <main className="min-h-screen pt-24 md:pt-32 w-full max-w-7xl mx-auto px-4 md:px-8">
                <Link href={`/${locale}#Service`} className={styles.backLink}>
                    {t('backToServices')}
                </Link>

                <div
                    className={styles.heroSection}
                    style={{ backgroundImage: 'url(/images/services/ads.avif)' }}
                >
                    <div className={styles.heroContent}>
                        <div className={styles.heroNumber}>{tMarketing('number')}</div>
                        <h1 className={styles.heroTitle}>{tMarketing('title')}</h1>
                        <p className={styles.heroTagline}>
                            {tMarketing('tagline')}
                        </p>
                    </div>
                </div>

                <section className={styles.contentSection}>
                    <div className={styles.grid}>
                        <div className={styles.descriptionBlock}>
                            <div className={styles.sectionLabel}>{t('whatWeDo')}</div>
                            <p className={styles.description}>
                                {tMarketing('description1')}
                            </p>
                            <p className={styles.description}>
                                {tMarketing('description2')}
                            </p>

                            <div className={styles.techStack}>
                                <div className={styles.sectionLabel}>{t('techStack')}</div>
                                <div className={styles.techList}>
                                    <span className={styles.techItem}>Meta Ads</span>
                                    <span className={styles.techItem}>Google Ads</span>
                                    <span className={styles.techItem}>TikTok Ads</span>
                                    <span className={styles.techItem}>Analytics</span>
                                    <span className={styles.techItem}>A/B Testing</span>
                                    <span className={styles.techItem}>SEO</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pricingBlock}>
                            <h3 className={styles.pricingTitle}>{t('pricing')}</h3>
                            <div className={styles.pricingList}>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tMarketing('pricing.campaignSetup.name')}</div>
                                        <div className={styles.pricingNote}>{tMarketing('pricing.campaignSetup.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        <span className={styles.pricingFrom}>{t('from')} </span>{tMarketing('pricing.campaignSetup.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tMarketing('pricing.monthlyManagement.name')}</div>
                                        <div className={styles.pricingNote}>{tMarketing('pricing.monthlyManagement.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        <span className={styles.pricingFrom}>{t('from')} </span>{tMarketing('pricing.monthlyManagement.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tMarketing('pricing.fullService.name')}</div>
                                        <div className={styles.pricingNote}>{tMarketing('pricing.fullService.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>{t('custom')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.ctaSection}>
                    <Link href={`/${locale}#contact`} className={styles.ctaButton}>
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
