import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { afterEach, beforeAll, vi } from 'vitest';
import enTranslation from '../../public/locales/en/translation.json';
import esTranslation from '../../public/locales/es/translation.json';

class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin: string = '';
    readonly scrollMargin: string = '';
    readonly thresholds: ReadonlyArray<number> = [];

    disconnect = vi.fn();
    observe = vi.fn();
    takeRecords = vi.fn(() => []);
    unobserve = vi.fn();
}

beforeAll(async () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
    vi.stubGlobal('scrollTo', vi.fn());

    if (!i18next.isInitialized) {
        await i18next.use(initReactI18next).init({
            lng: 'en',
            fallbackLng: 'en',
            interpolation: { escapeValue: false },
            resources: {
                en: { translation: enTranslation },
                es: { translation: esTranslation },
            },
        });
    }
});

afterEach(() => {
    cleanup();
});
