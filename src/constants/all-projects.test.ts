import { describe, expect, it } from 'vitest';
import enTranslation from '../../public/locales/en/translation.json';
import esTranslation from '../../public/locales/es/translation.json';
import { ProjectCategory, ProjectTag } from '../interfaces/projects';
import { ALL_PROJECTS, getProjectImageSrc } from './all-projects';

describe('all-projects constants', () => {
    it('returns null when project has no image', () => {
        const nongoose = ALL_PROJECTS.find((p) => p.id === 'nongoose');
        expect(nongoose).toBeDefined();
        expect(getProjectImageSrc(nongoose!)).toBeNull();
    });

    it('resolves overridden filenames and default png format', () => {
        const portfolioV3 = ALL_PROJECTS.find((p) => p.id === 'portfoliov3');
        const operationsApp = ALL_PROJECTS.find(
            (p) => p.id === 'operationsAPP',
        );
        expect(getProjectImageSrc(portfolioV3!)).toBe(
            '/projects/PortfolioV3.png',
        );
        expect(getProjectImageSrc(operationsApp!)).toBe(
            '/projects/OperationsAPP.png',
        );
    });

    it('resolves custom image formats like jpeg', () => {
        const nextChat2022 = ALL_PROJECTS.find((p) => p.id === 'NextChat2022');
        expect(getProjectImageSrc(nextChat2022!)).toBe(
            '/projects/NextChat2022.jpeg',
        );
    });

    it('has valid metadata and translations in both EN and ES for every project', () => {
        const enItems = enTranslation.projectsPage.items as Record<
            string,
            { title: string; description: string }
        >;
        const esItems = esTranslation.projectsPage.items as Record<
            string,
            { title: string; description: string }
        >;

        expect(ALL_PROJECTS.length).toBeGreaterThan(0);

        for (const project of ALL_PROJECTS) {
            expect(project.date).toBeInstanceOf(Date);
            expect(project.categories.length).toBeGreaterThan(0);
            expect(project.tags.length).toBeGreaterThan(0);
            expect(project.links.length).toBeGreaterThan(0);
            expect(enItems[project.id]?.title).toBeTruthy();
            expect(enItems[project.id]?.description).toBeTruthy();
            expect(esItems[project.id]?.title).toBeTruthy();
            expect(esItems[project.id]?.description).toBeTruthy();
        }
    });

    it('tags all 2026 projects with AI', () => {
        const projects2026 = ALL_PROJECTS.filter(
            (p) => p.date.getFullYear() === 2026,
        );
        expect(projects2026.length).toBe(2);
        for (const project of projects2026) {
            expect(project.tags).toContain(ProjectTag.AI);
            expect(project.categories).toContain(ProjectCategory.University);
        }
    });
});
