"use client";
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl';
import styles from './WhyUs.module.css';
import CountUp from './CountUp';

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '59, 130, 246';
const MOBILE_BREAKPOINT = 768;

const calculateSpotlightValues = (radius: number) => ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;

    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', `${radius}px`);
};

interface GlobalSpotlightProps {
    sectionRef: React.RefObject<HTMLElement | null>;
    cardsRef: React.RefObject<HTMLDivElement | null>;
    disableAnimations?: boolean;
    enabled?: boolean;
    spotlightRadius?: number;
    glowColor?: string;
}

const GlobalSpotlight = ({
    sectionRef,
    cardsRef,
    disableAnimations = false,
    enabled = true,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    glowColor = DEFAULT_GLOW_COLOR
}: GlobalSpotlightProps) => {
    const spotlightRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (disableAnimations || !sectionRef?.current || !enabled) return;

        const spotlight = document.createElement('div');
        spotlight.className = 'global-spotlight-whyus';
        spotlight.style.cssText = `
            position: fixed;
            width: 800px;
            height: 800px;
            border-radius: 50%;
            pointer-events: none;
            background: radial-gradient(circle,
                rgba(${glowColor}, 0.15) 0%,
                rgba(${glowColor}, 0.08) 15%,
                rgba(${glowColor}, 0.04) 25%,
                rgba(${glowColor}, 0.02) 40%,
                rgba(${glowColor}, 0.01) 65%,
                transparent 70%
            );
            z-index: 200;
            opacity: 0;
            transform: translate(-50%, -50%);
            mix-blend-mode: screen;
        `;
        document.body.appendChild(spotlight);
        spotlightRef.current = spotlight;

        const handleMouseMove = (e: MouseEvent) => {
            if (!spotlightRef.current || !sectionRef.current || !cardsRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const mouseInside =
                e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

            const cards = cardsRef.current.querySelectorAll(`.${styles.card}`);

            if (!mouseInside) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                cards.forEach(card => {
                    (card as HTMLElement).style.setProperty('--glow-intensity', '0');
                });
                return;
            }

            const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
            let minDistance = Infinity;

            cards.forEach(card => {
                const cardElement = card as HTMLElement;
                const cardRect = cardElement.getBoundingClientRect();
                const centerX = cardRect.left + cardRect.width / 2;
                const centerY = cardRect.top + cardRect.height / 2;
                const distance =
                    Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                const effectiveDistance = Math.max(0, distance);

                minDistance = Math.min(minDistance, effectiveDistance);

                let glowIntensity = 0;
                if (effectiveDistance <= proximity) {
                    glowIntensity = 1;
                } else if (effectiveDistance <= fadeDistance) {
                    glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                }

                updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
            });

            gsap.to(spotlightRef.current, {
                left: e.clientX,
                top: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });

            const targetOpacity =
                minDistance <= proximity
                    ? 0.8
                    : minDistance <= fadeDistance
                        ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
                        : 0;

            gsap.to(spotlightRef.current, {
                opacity: targetOpacity,
                duration: targetOpacity > 0 ? 0.2 : 0.5,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            cardsRef.current?.querySelectorAll(`.${styles.card}`).forEach(card => {
                (card as HTMLElement).style.setProperty('--glow-intensity', '0');
            });
            if (spotlightRef.current) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
        };
    }, [sectionRef, cardsRef, disableAnimations, enabled, spotlightRadius, glowColor]);

    return null;
};

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

export default function WhyUs() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const isMobile = useMobileDetection();
    const t = useTranslations('whyUs');

    return (
        <section className={styles.whyUsSection} id="why-us" ref={sectionRef}>
            <GlobalSpotlight
                sectionRef={sectionRef}
                cardsRef={cardsRef}
                disableAnimations={isMobile}
                enabled={true}
                spotlightRadius={DEFAULT_SPOTLIGHT_RADIUS}
                glowColor={DEFAULT_GLOW_COLOR}
            />

            <div className="container">
                <div className={styles.layout}>
                    <div className={styles.leftCol}>
                        <div className={styles.stickyWrapper}>
                            <h2 className="big-text">{t('title')}<br />{t('titleLine2')}</h2>
                        </div>
                    </div>

                    <div className={styles.rightCol} ref={cardsRef}>
                        <div className={styles.card}>
                            <div className={styles.pillarTitle}>{t('pillars.speed.title')}</div>
                            <p className={styles.pillarDesc}>{t('pillars.speed.description')}</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.pillarTitle}>{t('pillars.ownership.title')}</div>
                            <p className={styles.pillarDesc}>{t('pillars.ownership.description')}</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.pillarTitle}>{t('pillars.clarity.title')}</div>
                            <p className={styles.pillarDesc}>{t('pillars.clarity.description')}</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.statNumber}>
                                <CountUp to={92} duration={2.5} suffix="%" />
                            </div>
                            <p className={styles.statLabel}>{t('satisfaction.label')}</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.avatarGroup}>
                                <div className={styles.avatar} style={{ backgroundImage: 'url(/images/why-us/22%209.png)' }}></div>
                                <div className={styles.avatar} style={{ backgroundImage: 'url(/images/why-us/24%203.png)' }}></div>
                                <div className={styles.avatar} style={{ backgroundImage: 'url(/images/why-us/29%2014.png)' }}></div>
                                <div className={styles.avatar} style={{ backgroundImage: 'url(/images/why-us/29%2024.png)' }}></div>
                            </div>
                            <div className={styles.statNumber}>
                                <CountUp to={30} duration={2} suffix="k+" />
                            </div>
                            <p className={styles.statLabel}>{t('users.label')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
