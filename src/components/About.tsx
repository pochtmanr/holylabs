"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import styles from './About.module.css';

const MOBILE_BREAKPOINT = 768;

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const t = useTranslations('about');
    const locale = useLocale();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Disable scroll animations on mobile
        if (isMobile) {
            setProgress(0);
            return;
        }

        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const end = rect.height - window.innerHeight;

            // Calculate how far we've scrolled into the section (negative top means we are scrolling down)
            const scrolled = -rect.top;

            // Normalize properly: 0 when top of section hits top of viewport, 1 when we reach the end of scrollable area
            let p = Math.max(0, Math.min(1, scrolled / end));

            setProgress(p);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    const scrollToServices = () => {
        const servicesSection = document.getElementById('Service');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const services = [
        { key: 'apps', image: '/images/services/apps.avif', href: `/${locale}/services/apps` },
        { key: 'web', image: '/images/services/web.avif', href: `/${locale}/services/web` },
        { key: 'automations', image: '/images/services/automations.avif', href: `/${locale}/services/automations` },
        { key: 'marketing', image: '/images/services/ads.avif', href: `/${locale}/services/marketing` }
    ];

    return (
        <section id="about" className={styles.aboutSection} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.aboutInnerSticky}>
                    <div className={styles.aboutWrap}>
                        <div className={styles.aboutInnerWrap}>
                            <div className={styles.aboutContent}>

                                {/* Line 1: We [Image] */}
                                <div className={styles.aboutLine}>
                                    <div className={styles.bigTextWrap}>
                                        <div className={styles.bigText}>{t('we')} </div>
                                    </div>
                                    <div className={styles.aboutImageResize} style={{ width: isMobile ? '20vw' : `${Math.min(16, progress * 40)}vw` }}>
                                        <div className={styles.aboutImageWrap}>
                                            <img
                                                src="/images/about/about.avif"
                                                alt="Development"
                                                className={styles.aboutImage}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.bigTextWrap}>
                                        <div className={styles.bigText}>{t('areADev')}</div>
                                    </div>
                                </div>

                                {/* Line 2: studio [Arrow] dedicated */}
                                <div className={styles.aboutLine}>
                                    <div className={styles.bigTextWrap}>
                                        <div className={styles.bigText}>{t('team')} </div>
                                    </div>
                                    <div className={styles.bigTextWrap}>
                                        <div className={styles.bigText}>{t('building')}</div>
                                    </div>
                                    <div className={styles.lottieWrap}>
                                        {/* SVG Arrow placeholder for Lottie */}
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.arrowIcon}>
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Line 3: to craft a [Button] solution */}
                                <div className={styles.aboutLine}>
                                    <div className={styles.bigTextWrap}>
                                        <div className={styles.bigText}>{t('yourNext')}</div>
                                    </div>
                                    <div className={styles.heroButtonWrap}>
                                        <Link href={`/${locale}#contact`} className={styles.buttonSlide}>
                                            <div className={styles.buttonSlideText}>{t('workWithUs')}</div>
                                        </Link>
                                    </div>
                                    <div className={styles.bigTextWrap}>
                                        <div className={styles.bigText}>{t('product')}</div>
                                    </div>
                                </div>

                            </div>

                            {/* "Work With Us" Link at bottom right/fixed? */}
                            <Link href={`/${locale}#contact`} className={styles.lineLink}>
                                <div className={styles.lineLinkText}>{t('workWithUs')}</div>
                            </Link>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div
                        className={styles.scrollIndicator}
                        onClick={scrollToServices}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && scrollToServices()}
                    >
                        <span className={styles.scrollText}>{t('seeOurWork')}</span>
                        <div className={styles.scrollArrow}></div>
                    </div>
                </div>

                {/* Second background / trigger? - hidden on mobile */}
                {!isMobile && (
                    <div className={styles.aboutSecondBg} style={{ opacity: progress > 0.8 ? 1 : 0 }}></div>
                )}

                {/* Service / Project Cards Section */}
                <div id="Service" className="relative z-[20] pt-8 pb-12 px-2 bg-[var(--background)]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full md:w-[90%] md:mx-auto">
                        {services.map((service, i) => (
                            <Link
                                key={service.key}
                                href={service.href}
                                className="relative min-h-[350px] md:min-h-[400px] rounded-2xl overflow-hidden flex flex-col justify-end p-6 bg-cover bg-center group"
                                style={{ backgroundImage: `url(${service.image})` }}
                            >
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[1]" />

                                {/* Arrow button - bottom right */}
                                <div className="absolute bottom-4 end-4 md:bottom-6 md:end-6 w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center z-[3] transition-transform duration-300 group-hover:scale-110">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6 text-white" style={{ transform: 'rotate(-45deg)' }}>
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="relative z-[2]">
                                    <div className="text-sm text-white/70 mb-1">0{i + 1}.</div>
                                    <div className="text-2xl md:text-3xl font-semibold text-white mb-2">
                                        {t(`services.${service.key}.title`)}
                                    </div>
                                    <p className="text-sm text-white/80 max-w-[65%]">
                                        {t(`services.${service.key}.description`)}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
