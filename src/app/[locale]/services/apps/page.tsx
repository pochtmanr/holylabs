import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';
import styles from '../services.module.css';

export default async function AppsServicePage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <AppsContent locale={locale} />;
}

function AppsContent({ locale }: { locale: string }) {
    const t = useTranslations('services');
    const tApps = useTranslations('services.apps');

    const portfolioItems = [
        { key: 'simnetiq', website: 'https://www.simnetiq.store/', appStore: 'https://apps.apple.com/us/app/simnetiq-global-esim/id6755963262', googlePlay: 'https://play.google.com/store/apps/details?id=com.simnetiq.storeAndroid' },
        { key: 'goDelivery', appStore: 'https://apps.apple.com/es/app/go-delivery/id6747035141', googlePlay: 'https://play.google.com/store/apps/details?id=com.theholylabs.melon' },
        { key: 'montiVpn', appStore: 'https://apps.apple.com/de/app/monti-vpn/id6755795018', googlePlay: 'https://play.google.com/store/apps/details?id=com.theholylabs.rock' },
        { key: 'roamjet', appStore: 'https://apps.apple.com/us/app/roamjet-esim/id6751737433', googlePlay: 'https://play.google.com/store/apps/details?id=com.theholylabs.esim' },
        { key: 'vitrix', website: 'https://muscle-up-main-green.vercel.app/', googlePlay: 'https://play.google.com/store/apps/details?id=com.muscleup.muscleup' },
        { key: 'branndi', appStore: 'https://apps.apple.com/at/app/branndi/id6755268249', googlePlay: 'https://play.google.com/store/apps/details?id=com.theholylabs.branndi' },
        { key: 'plugiq', appStore: 'https://apps.apple.com/us/app/plugiq/id6748287564' }
    ];

    return (
        <>
            <main className="min-h-screen pt-24 md:pt-32 w-full max-w-7xl mx-auto px-4 md:px-8">
                <Link href={`/${locale}#Service`} className={styles.backLink}>
                    {t('backToServices')}
                </Link>

                <div
                    className={styles.heroSection}
                    style={{ backgroundImage: 'url(/images/services/apps.avif)' }}
                >
                    <div className={styles.heroContent}>
                        <div className={styles.heroNumber}>{tApps('number')}</div>
                        <h1 className={styles.heroTitle}>{tApps('title')}</h1>
                        <p className={styles.heroTagline}>
                            {tApps('tagline')}
                        </p>
                    </div>
                </div>

                <section className={styles.contentSection}>
                    <div className={styles.grid}>
                        <div className={styles.descriptionBlock}>
                            <div className={styles.sectionLabel}>{t('whatWeDo')}</div>
                            <p className={styles.description}>
                                {tApps('description1')}
                            </p>
                            <p className={styles.description}>
                                {tApps('description2')}
                            </p>

                            <div className={styles.techStack}>
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
                        </div>

                        <div className={styles.pricingBlock}>
                            <h3 className={styles.pricingTitle}>{t('pricing')}</h3>
                            <div className={styles.pricingList}>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tApps('pricing.mobileApp.name')}</div>
                                        <div className={styles.pricingNote}>{tApps('pricing.mobileApp.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        <span className={styles.pricingFrom}>{t('from')} </span>{tApps('pricing.mobileApp.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tApps('pricing.mvpApp.name')}</div>
                                        <div className={styles.pricingNote}>{tApps('pricing.mvpApp.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>
                                        <span className={styles.pricingFrom}>{t('from')} </span>{tApps('pricing.mvpApp.price')}
                                    </div>
                                </div>
                                <div className={styles.pricingItem}>
                                    <div>
                                        <div className={styles.pricingName}>{tApps('pricing.enterpriseApp.name')}</div>
                                        <div className={styles.pricingNote}>{tApps('pricing.enterpriseApp.note')}</div>
                                    </div>
                                    <div className={styles.pricingAmount}>{t('custom')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.portfolioSection}>
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

                <section className={styles.ctaSection}>
                    <Link href={`/${locale}#contact`} className={styles.ctaButton}>
                        {t('startProject')}
                    </Link>
                </section>
            </main>
            <Footer />
        </>
    );
}
