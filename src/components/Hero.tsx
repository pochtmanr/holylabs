"use client";
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import styles from './Hero.module.css';

const Antigravity = dynamic(() => import('./Antigravity'), { ssr: false });

export default function Hero() {
    const movingTitleRef = useRef<HTMLDivElement>(null);
    const shadeRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const t = useTranslations('hero');
    const locale = useLocale();
    const isRTL = locale === 'he';

    const scrollToNextSection = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Horizontal move effect for title
            if (movingTitleRef.current) {
                const move = isRTL ? scrollY * 0.2 : -scrollY * 0.2;
                movingTitleRef.current.style.transform = `translate3d(${move}px, 0, 0)`;
                const opacity = 1 - Math.min(1, scrollY / (window.innerHeight * 0.8));
                movingTitleRef.current.style.opacity = `${opacity}`;
            }

            if (shadeRef.current) {
                const width = Math.min(100, scrollY * 0.1);
                shadeRef.current.style.width = `${width}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile, isRTL]);

    return (
        <section id="hero" className={styles.hero}>
            {/* Antigravity animation - smaller particles on mobile */}
            <div className={styles.canvasWrapper}>
                <Antigravity
                    count={isMobile ? 200 : 300}
                    magnetRadius={isMobile ? 6 : 8}
                    ringRadius={isMobile ? 7 : 9}
                    waveSpeed={0.3}
                    waveAmplitude={1.2}
                    particleSize={isMobile ? 0.6 : 1.2}
                    lerpSpeed={0.04}
                    color="#3b82f6"
                    autoAnimate={true}
                    particleVariance={1}
                />
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.heroWrap}>
                    {/* Moving Title Wrapper */}
                    <div
                        ref={movingTitleRef}
                        className={styles.heroMovingTitle}
                        style={{ willChange: 'transform', transform: 'translate3d(0px, 0px, 0px)' }}
                    >

                        {/* Main Title Layer */}
                        <div className={styles.heroTitleWrap}>
                            <h1 className={styles.defaultTitle}>{t('code')}</h1>

                            <div className={styles.heroAccentWrap}>
                                <div className={styles.heroAccentShape}>
                                    <div className={styles.heroAccentRotate}>
                                        <div className={styles.heroAccent}>
                                            <div className={`${styles.accentPart} ${styles.var1}`}></div>
                                            <div className={`${styles.accentPart} ${styles.var2}`}></div>
                                            <div className={`${styles.accentPart} ${styles.var3}`}></div>
                                            <div className={`${styles.accentPart} ${styles.var4}`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h1 className={styles.defaultTitle}>{t('that')}</h1>
                            <h1 className={`${styles.defaultTitle} ${styles.scalesText}`}>{t('scales')}</h1>
                        </div>

                        {/* Shade/Duplicate Layer - only shown for LTR languages */}
                        {!isRTL && (
                            <div ref={shadeRef} className={styles.heroTitleShade} style={{ width: '0%' }}>
                                <h1 className={styles.defaultTitle} style={{ color: '#999' }}>{t('code')}</h1>
                                <div className={`${styles.heroAccentWrap} ${styles.shade}`}>
                                </div>
                                <h1 className={styles.defaultTitle} style={{ color: '#999' }}>{t('that')}</h1>
                                <h1 className={styles.defaultTitle} style={{ marginInlineStart: '0.5em', color: '#999' }}>{t('scales')}</h1>
                            </div>
                        )}

                    </div>

                    <div className={styles.heroDescWrap}>
                        <p className={styles.heroDesc}>{t('description')}</p>
                        <Link
                            href={`/${locale}#contact`}
                            className={styles.ctaButton}
                            onClick={() => {
                                if (typeof window !== 'undefined' && window.fbq) {
                                    window.fbq('trackCustom', 'HeroCta', { language: locale });
                                }
                            }}
                        >
                            {t('cta')}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.ctaArrow}>
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>

            </div>
            <div className={styles.scrollIndicator} onClick={scrollToNextSection} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToNextSection()}>
                <span className={styles.scrollText}>{t('scroll')}</span>
                <div className={styles.scrollArrow}></div>
            </div>
        </section>
    );
}
