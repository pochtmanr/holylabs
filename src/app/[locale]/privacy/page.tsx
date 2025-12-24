import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';

export default async function PrivacyPolicyPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <PrivacyContent locale={locale} />;
}

function PrivacyContent({ locale }: { locale: string }) {
    const t = useTranslations('privacy');
    const tServices = useTranslations('services');

    return (
        <>
            <main className="min-h-screen pt-24 md:pt-32 pb-16 w-full max-w-4xl mx-auto px-4 md:px-8">
                <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
                    {tServices('backToHome')}
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-8">{t('title')}</h1>
                <p className="text-gray-400 mb-12">{t('lastUpdated')}</p>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('sections.introduction.title')}</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {t('sections.introduction.content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('sections.informationCollect.title')}</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">{t('sections.informationCollect.intro')}</p>
                        <ul className="list-disc ps-6 text-gray-300 space-y-2">
                            <li><strong>{t('sections.informationCollect.items.0').split(':')[0]}:</strong>{t('sections.informationCollect.items.0').split(':').slice(1).join(':')}</li>
                            <li><strong>{t('sections.informationCollect.items.1').split(':')[0]}:</strong>{t('sections.informationCollect.items.1').split(':').slice(1).join(':')}</li>
                            <li><strong>{t('sections.informationCollect.items.2').split(':')[0]}:</strong>{t('sections.informationCollect.items.2').split(':').slice(1).join(':')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('sections.howWeUse.title')}</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">{t('sections.howWeUse.intro')}</p>
                        <ul className="list-disc ps-6 text-gray-300 space-y-2">
                            <li>{t('sections.howWeUse.items.0')}</li>
                            <li>{t('sections.howWeUse.items.1')}</li>
                            <li>{t('sections.howWeUse.items.2')}</li>
                            <li>{t('sections.howWeUse.items.3')}</li>
                            <li>{t('sections.howWeUse.items.4')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('sections.informationSharing.title')}</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {t('sections.informationSharing.intro')}
                        </p>
                        <ul className="list-disc ps-6 text-gray-300 space-y-2 mt-4">
                            <li>{t('sections.informationSharing.items.0')}</li>
                            <li>{t('sections.informationSharing.items.1')}</li>
                            <li>{t('sections.informationSharing.items.2')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('sections.dataSecurity.title')}</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {t('sections.dataSecurity.content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('sections.yourRights.title')}</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">{t('sections.yourRights.intro')}</p>
                        <ul className="list-disc ps-6 text-gray-300 space-y-2">
                            <li>{t('sections.yourRights.items.0')}</li>
                            <li>{t('sections.yourRights.items.1')}</li>
                            <li>{t('sections.yourRights.items.2')}</li>
                            <li>{t('sections.yourRights.items.3')}</li>
                            <li>{t('sections.yourRights.items.4')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('sections.contactUs.title')}</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {t('sections.contactUs.intro')}
                        </p>
                        <p className="text-gray-300 mt-4">
                            <strong>{t('sections.contactUs.email')}</strong>{' '}
                            <a href="mailto:info@holylabs.net" className="text-blue-400 hover:text-blue-300">
                                info@holylabs.net
                            </a>
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
