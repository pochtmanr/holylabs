import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const baseUrl = 'https://holylabs.io';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/services/apps',
        '/services/web',
        '/services/automations',
        '/services/marketing',
        '/privacy',
        '/cookies',
    ];

    const sitemap: MetadataRoute.Sitemap = [];

    // Generate entries for each locale and route
    for (const locale of locales) {
        for (const route of routes) {
            const url = `${baseUrl}/${locale}${route}`;

            // Create alternates for all languages
            const languages: Record<string, string> = {};
            for (const altLocale of locales) {
                languages[altLocale] = `${baseUrl}/${altLocale}${route}`;
            }
            languages['x-default'] = `${baseUrl}/en${route}`;

            sitemap.push({
                url,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'weekly' : 'monthly',
                priority: route === '' ? 1.0 : 0.8,
                alternates: {
                    languages,
                },
            });
        }
    }

    return sitemap;
}
