import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import GitHubIcon from '../assets/tablericons/brand-github.svg?react';
import BookOpenIcon from '../assets/tablericons/book.svg?react';
import CodeIcon from '../assets/tablericons/code.svg?react';
import ExternalLinkIcon from '../assets/tablericons/external-link.svg?react';
import GlassCard from '../components/ui/GlassCard/GlassCard';
import SectionHeader from '../components/ui/SectionHeader/SectionHeader';
import TagPill from '../components/ui/TagPill/TagPill';
import { ALL_PROJECTS, getProjectImageSrc } from '../constants/all-projects';
import {
    ProjectCategory,
    type ProjectExternalLinkId,
} from '../interfaces/projects';
import './ProjectsPage.scss';

type FilterValue = 'ALL' | ProjectCategory;

const CATEGORY_LIST = Object.values(ProjectCategory);

function renderProjectLinkIcon(id: ProjectExternalLinkId) {
    if (
        id === 'github' ||
        id === 'githubAPI' ||
        id === 'githubWEB' ||
        id === 'githubMobile'
    ) {
        return <GitHubIcon />;
    }
    if (id === 'docs') {
        return <BookOpenIcon />;
    }
    return <ExternalLinkIcon />;
}

export default function ProjectsPage() {
    const { t, i18n } = useTranslation();
    const [selectedCategory, setSelectedCategory] =
        useState<FilterValue>('ALL');

    const dateFormatter = useMemo(
        () =>
            new Intl.DateTimeFormat(i18n.language, {
                month: 'short',
                year: 'numeric',
            }),
        [i18n.language],
    );

    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'ALL') {
            return ALL_PROJECTS;
        }
        return ALL_PROJECTS.filter((project) =>
            project.categories.includes(selectedCategory),
        );
    }, [selectedCategory]);

    return (
        <section className="projectsPage">
            <div className="projectsPage__container">
                <SectionHeader
                    eyebrow={t('projectsPage.eyebrow')}
                    title={t('projectsPage.title')}
                    subtitle={t('projectsPage.subtitle')}
                    action={
                        <Link to="/" className="projectsPage__backLink">
                            <span>← {t('projectsPage.backToHome')}</span>
                        </Link>
                    }
                />

                <div
                    className="projectsPage__filters"
                    role="tablist"
                    aria-label="Project categories"
                >
                    <button
                        type="button"
                        role="tab"
                        aria-selected={selectedCategory === 'ALL'}
                        onClick={() => setSelectedCategory('ALL')}
                        className={clsx(
                            'projectsPage__filterBtn',
                            selectedCategory === 'ALL' &&
                                'projectsPage__filterBtn--active',
                        )}
                    >
                        <span>{t('projectsPage.allCategories')}</span>
                        <span className="projectsPage__filterBtn__count">
                            ({ALL_PROJECTS.length})
                        </span>
                    </button>

                    {CATEGORY_LIST.map((category) => {
                        const count = ALL_PROJECTS.filter((p) =>
                            p.categories.includes(category),
                        ).length;
                        if (count === 0) return null;

                        return (
                            <button
                                key={category}
                                type="button"
                                role="tab"
                                aria-selected={selectedCategory === category}
                                onClick={() => setSelectedCategory(category)}
                                className={clsx(
                                    'projectsPage__filterBtn',
                                    selectedCategory === category &&
                                        'projectsPage__filterBtn--active',
                                )}
                            >
                                <span>
                                    {t(`projectsPage.categories.${category}`)}
                                </span>
                                <span className="projectsPage__filterBtn__count">
                                    ({count})
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div className="projectsPage__grid">
                    {filteredProjects.map((project) => {
                        const imageSrc = getProjectImageSrc(project);

                        return (
                            <GlassCard
                                key={project.id}
                                as="article"
                                rounded="2xl"
                                className="projectsPage__card"
                            >
                                <div className="projectsPage__card__media">
                                    {imageSrc ? (
                                        <>
                                            <img
                                                src={imageSrc}
                                                alt={t(
                                                    `projectsPage.items.${project.id}.title`,
                                                )}
                                                loading="lazy"
                                                className="projectsPage__card__image"
                                            />
                                            <div className="projectsPage__card__mediaOverlay" />
                                        </>
                                    ) : (
                                        <div className="projectsPage__card__placeholder">
                                            <CodeIcon />
                                            <span>{project.id}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="projectsPage__card__body">
                                    <div className="projectsPage__card__header">
                                        <h2 className="projectsPage__card__title">
                                            {t(
                                                `projectsPage.items.${project.id}.title`,
                                            )}
                                        </h2>
                                        <span className="projectsPage__card__date">
                                            {dateFormatter.format(project.date)}
                                        </span>
                                    </div>

                                    <p className="projectsPage__card__desc">
                                        {t(
                                            `projectsPage.items.${project.id}.description`,
                                        )}
                                    </p>

                                    <div className="projectsPage__card__tags">
                                        {project.tags.map((tag) => (
                                            <TagPill
                                                key={tag}
                                                label={tag}
                                                compact
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="projectsPage__card__footer">
                                    {project.links.map((link) => {
                                        const isGitHub =
                                            link.id === 'github' ||
                                            link.id === 'githubAPI' ||
                                            link.id === 'githubWEB' ||
                                            link.id === 'githubMobile';

                                        return (
                                            <a
                                                key={`${project.id}-${link.id}`}
                                                href={link.to}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={clsx(
                                                    'projectsPage__card__link',
                                                    isGitHub &&
                                                        'projectsPage__card__link--fill',
                                                )}
                                            >
                                                {renderProjectLinkIcon(link.id)}
                                                <span>
                                                    {t(
                                                        `projectsPage.links.${link.id}`,
                                                    )}
                                                </span>
                                            </a>
                                        );
                                    })}
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
