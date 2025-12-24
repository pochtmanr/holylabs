"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useLocale, useTranslations } from 'next-intl';
import styles from './Contact.module.css';

const Antigravity = dynamic(() => import('./Antigravity'), { ssr: false });

const contactIcons = {
    whatsapp: (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
    ),
    telegram: (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
    ),
    email: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
        </svg>
    ),
    linkedin: (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    )
};

const contactLinks = [
    { key: 'whatsapp', href: 'https://wa.me/4915214902243', isExternal: true },
    { key: 'telegram', href: 'https://t.me/holyads_bot', isExternal: true },
    { key: 'email', href: 'mailto:holylabsltd@gmail.com?subject=Project%20Inquiry&body=Hi%20HolyLabs%20team%2C%0A%0AI%27m%20interested%20in%20working%20with%20you%20on%20a%20project.%20Please%20reply%20to%20my%20email%20so%20we%20can%20discuss%20further.%0A%0ABest%20regards', isExternal: false },
    { key: 'linkedin', href: 'https://www.linkedin.com/company/holylabs/', isExternal: true }
];

export default function Contact() {
    const t = useTranslations('contact');
    const locale = useLocale();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleContactClick = (contactType: string) => {
        if (typeof window !== 'undefined' && window.fbq) {
            const eventName = contactType === 'whatsapp' ? 'WABAContact' :
                              contactType === 'telegram' ? 'TelegramContact' :
                              contactType === 'email' ? 'EmailContact' :
                              contactType === 'linkedin' ? 'LinkedInContact' : 'Contact';
            window.fbq('trackCustom', eventName, { language: locale });
        }
    };

    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.canvasWrapper}>
                <Antigravity
                    count={isMobile ? 100 : 200}
                    magnetRadius={isMobile ? 4 : 6}
                    ringRadius={isMobile ? 7 : 9}
                    waveSpeed={0.3}
                    waveAmplitude={1.2}
                    particleSize={isMobile ? 0.4 : 0.8}
                    lerpSpeed={0.04}
                    color="#3b82f6"
                    autoAnimate={true}
                    particleVariance={1}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.sectionLabel}>{t('getInTouch')}</div>
                    <h2 className={styles.title}>{t('letsChat')}</h2>
                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>
                </div>

                <div className={styles.optionsGrid}>
                    {contactLinks.map((option) => (
                        <a
                            key={option.key}
                            href={option.href}
                            target={option.isExternal ? '_blank' : undefined}
                            rel={option.isExternal ? 'noopener noreferrer' : undefined}
                            className={styles.optionCard}
                            onClick={() => handleContactClick(option.key)}
                        >
                            <div className={styles.iconWrap}>
                                {contactIcons[option.key as keyof typeof contactIcons]}
                            </div>
                            <div className={styles.optionName}>{t(`options.${option.key}.name`)}</div>
                            <p className={styles.optionDesc}>{t(`options.${option.key}.description`)}</p>
                            <div className={styles.linkText}>
                                {t('contactUs')} <span className={styles.arrow}>→</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className={styles.languagesSection}>
                    <p className={styles.languagesLabel}>{t('languagesLabel')}</p>
                    <div className={styles.flagsContainer}>
                        <div className={styles.flagItem}>
                            <div className={styles.flag}>
                                <svg viewBox="0 0 60 30" className={styles.flagSvg}>
                                    <clipPath id="uk-clip"><circle cx="30" cy="15" r="15"/></clipPath>
                                    <g clipPath="url(#uk-clip)">
                                        <rect width="60" height="30" fill="#012169"/>
                                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#uk-diag)"/>
                                        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
                                        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
                                    </g>
                                </svg>
                            </div>
                            <span className={styles.flagName}>{t('languages.english')}</span>
                        </div>
                        <div className={styles.flagItem}>
                            <div className={styles.flag}>
                                <svg viewBox="0 0 60 30" className={styles.flagSvg}>
                                    <clipPath id="il-clip"><circle cx="30" cy="15" r="15"/></clipPath>
                                    <g clipPath="url(#il-clip)">
                                        <rect width="60" height="30" fill="#fff"/>
                                        <rect y="3" width="60" height="4" fill="#0038b8"/>
                                        <rect y="23" width="60" height="4" fill="#0038b8"/>
                                        <path d="M30,7 L33.5,13 L30,19 L26.5,13 Z" fill="none" stroke="#0038b8" strokeWidth="1.5"/>
                                        <path d="M30,11 L33.5,17 L26.5,17 Z" fill="none" stroke="#0038b8" strokeWidth="1.5"/>
                                    </g>
                                </svg>
                            </div>
                            <span className={styles.flagName}>{t('languages.hebrew')}</span>
                        </div>
                        <div className={styles.flagItem}>
                            <div className={styles.flag}>
                                <svg viewBox="0 0 60 30" className={styles.flagSvg}>
                                    <clipPath id="ua-clip"><circle cx="30" cy="15" r="15"/></clipPath>
                                    <g clipPath="url(#ua-clip)">
                                        <rect width="60" height="15" fill="#005BBB"/>
                                        <rect y="15" width="60" height="15" fill="#FFD500"/>
                                    </g>
                                </svg>
                            </div>
                            <span className={styles.flagName}>{t('languages.ukrainian')}</span>
                        </div>
                        <div className={styles.flagItem}>
                            <div className={styles.flag}>
                                <svg viewBox="0 0 60 30" className={styles.flagSvg}>
                                    <clipPath id="ru-clip"><circle cx="30" cy="15" r="15"/></clipPath>
                                    <g clipPath="url(#ru-clip)">
                                        <rect width="60" height="10" fill="#fff"/>
                                        <rect y="10" width="60" height="10" fill="#0039A6"/>
                                        <rect y="20" width="60" height="10" fill="#D52B1E"/>
                                    </g>
                                </svg>
                            </div>
                            <span className={styles.flagName}>{t('languages.russian')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
