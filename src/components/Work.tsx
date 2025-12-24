"use client";
import { useTranslations } from 'next-intl';
import styles from './Work.module.css';

const works = [
    {
        id: 1,
        title: 'Simnetiq',
        categoryKey: 'esimPlatform',
        image: '/images/work/simnetiq_converted.avif',
        url: 'https://www.simnetiq.store/'
    },
    {
        id: 2,
        title: 'Go Delivery',
        categoryKey: 'deliverySystem',
        image: '/images/work/go-delivery_converted.avif',
        url: 'https://apps.apple.com/es/app/go-delivery/id6747035141'
    },
    {
        id: 3,
        title: 'Smrtcom',
        categoryKey: 'householdManagement',
        image: '/images/work/smtrcom_converted.avif',
        url: 'https://www.smrtcom.com/'
    },
    {
        id: 4,
        title: 'RoamJet',
        categoryKey: 'esimAppApi',
        image: '/images/work/roamjet_converted.avif',
        url: 'https://roamjet.net/'
    },
    {
        id: 5,
        title: 'Monti VPN',
        categoryKey: 'iosChromeExtension',
        image: '/images/work/montivpn_converted.avif',
        url: 'https://apps.apple.com/de/app/monti-vpn/id6755795018'
    }
];

export default function Work() {
    const t = useTranslations('work');

    return (
        <section className={styles.workSection} id="work">
            <div className="container">
                <div className={styles.titleBlock}>
                    <h2 className="big-text">{t('discover')}<br /><span className="small-text">{t('ourWork')}</span></h2>
                </div>
            </div>

            {works.map((work) => (
                <a
                    key={work.id}
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.workItem}
                >
                    <img src={work.image} alt={work.title} className={styles.workImage} />
                    <div className={styles.overlay}></div>
                    <div className={styles.workInfo}>
                        <h3 className={styles.workTitle}>{work.title}</h3>
                        <span className={styles.workCategory}>{t(`categories.${work.categoryKey}`)}</span>
                    </div>
                </a>
            ))}
        </section>
    );
}
