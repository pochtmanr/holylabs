import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';

export default async function CookiesPolicyPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <CookiesContent locale={locale} />;
}

function CookiesContent({ locale }: { locale: string }) {
    const t = useTranslations('cookies');
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
                        <h2 className="text-2xl font-semibold mb-4">{t('sections.whatAreCookies.title')}</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {t('sections.whatAreCookies.content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('sections.howWeUse.title')}</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">{t('sections.howWeUse.intro')}</p>
                        <ul className="list-disc ps-6 text-gray-300 space-y-2">
                            <li>{t('sections.howWeUse.items.0')}</li>
                            <li>{t('sections.howWeUse.items.1')}</li>
                            <li>{t('sections.howWeUse.items.2')}</li>
                            <li>{t('sections.howWeUse.items.3')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('sections.typesOfCookies.title')}</h2>
                        <ul className="list-disc ps-6 text-gray-300 space-y-2">
                            <li><strong>{t('sections.typesOfCookies.items.0').split(':')[0]}:</strong>{t('sections.typesOfCookies.items.0').split(':').slice(1).join(':')}</li>
                            <li><strong>{t('sections.typesOfCookies.items.1').split(':')[0]}:</strong>{t('sections.typesOfCookies.items.1').split(':').slice(1).join(':')}</li>
                            <li><strong>{t('sections.typesOfCookies.items.2').split(':')[0]}:</strong>{t('sections.typesOfCookies.items.2').split(':').slice(1).join(':')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('sections.managingCookies.title')}</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {t('sections.managingCookies.content')}
                        </p>
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
