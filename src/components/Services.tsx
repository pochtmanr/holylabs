"use client";
import Link from 'next/link';
import { useLocale } from 'next-intl';
import styles from './Services.module.css';

const services = [
    {
        id: '01',
        title: 'Apps',
        image: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7abb1dc9797d92e7aae3f_img6.webp',
        href: '/services/apps'
    },
    {
        id: '02',
        title: 'Web',
        image: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68aea452324447dec982d6b3_img9.webp',
        href: '/services/web'
    },
    {
        id: '03',
        title: 'Automations',
        image: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b53ed5e0ae8eda7ac7e424_img17.webp',
        href: '/services/automations'
    },
    {
        id: '04',
        title: 'Ads & Marketing',
        image: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b53ed5e0ae8eda7ac7e41b_img16.webp',
        href: '/services/marketing'
    }
];

export default function Services() {
    const locale = useLocale();

    const handleServiceClick = (serviceTitle: string) => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: serviceTitle,
                language: locale
            });
        }
    };

    return (
        <section className={styles.servicesSection} id="services">
            <div className="container">
                <div className={styles.headingWrap}>
                    <h2 className="h2">Services</h2>
                    <div className={styles.arrowCircle}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.arrowIcon}>
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
                <div className={styles.cardsWrapper}>
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={service.href}
                            className={styles.card}
                            onClick={() => handleServiceClick(service.title)}
                        >
                            <img src={service.image} alt={service.title} className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <span className={styles.number}>{service.id}.</span>
                                <span className={styles.title}>{service.title}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
