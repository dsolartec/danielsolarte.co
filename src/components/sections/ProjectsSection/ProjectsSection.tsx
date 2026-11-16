import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import GitHubIcon from '../../../assets/tablericons/brand-github.svg?react';
import ArrowRightIcon from '../../../assets/tablericons/arrow-right.svg?react';
import BookOpenIcon from '../../../assets/tablericons/book.svg?react';
import ExternalLinkIcon from '../../../assets/tablericons/external-link.svg?react';
import TerminalIcon from '../../../assets/tablericons/terminal.svg?react';
import { FEATURED_PROJECTS } from '../../../constants/projects';
import type { ProjectLink } from '../../../interfaces/projects';
import GlassCard from '../../ui/GlassCard/GlassCard';
import { LockIcon } from '../../ui/Icons/Icons';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import TagPill from '../../ui/TagPill/TagPill';
import './ProjectsSection.scss';

function renderLinkIcon(icon: ProjectLink['icon']) {
    switch (icon) {
        case 'github':
            return <GitHubIcon />;
        case 'docs':
            return <BookOpenIcon />;
        case 'external':
        default:
            return <ExternalLinkIcon />;
    }
}

function ChatPreview() {
    return (
        <div className="projectsSection__chatMock">
            <div className="projectsSection__chatMock__row">
                <div className="projectsSection__chatMock__avatar projectsSection__chatMock__avatar--indigo">
                    D
                </div>
                <div className="projectsSection__chatMock__bubble">
                    <div className="projectsSection__chatMock__meta">
                        <span className="projectsSection__chatMock__user projectsSection__chatMock__user--teal">
                            @daniel
                        </span>
                        <span className="projectsSection__chatMock__time">
                            12:57 PM
                        </span>
                    </div>
                    <p className="projectsSection__chatMock__msg">
                        We have an intuitive, high-speed messaging platform.
                        Ready to check it out?
                    </p>
                </div>
            </div>
            <div className="projectsSection__chatMock__row projectsSection__chatMock__row--right">
                <div className="projectsSection__chatMock__bubble projectsSection__chatMock__bubble--teal">
                    <div className="projectsSection__chatMock__meta">
                        <span className="projectsSection__chatMock__time">
                            01:04 PM
                        </span>
                        <span className="projectsSection__chatMock__user projectsSection__chatMock__user--cyan">
                            @collaborator
                        </span>
                    </div>
                    <p className="projectsSection__chatMock__msg projectsSection__chatMock__msg--teal">
                        Continuous real-time features deployed daily for optimal
                        collaboration experience.
                    </p>
                </div>
                <div className="projectsSection__chatMock__avatar projectsSection__chatMock__avatar--teal">
                    C
                </div>
            </div>
        </div>
    );
}

function TerminalPreview() {
    return (
        <div className="projectsSection__terminalMock">
            <div className="projectsSection__terminalMock__cmdRow">
                <span className="projectsSection__terminalMock__cmd">
                    $ cargo bench --package nongoose
                </span>
                <span className="projectsSection__terminalMock__status">
                    PASSED
                </span>
            </div>
            <p className="projectsSection__terminalMock__muted">
                &gt; Compiling nongoose v0.1.0-alpha
            </p>
            <p className="projectsSection__terminalMock__cyan">
                bench: mongodb_doc_serialization ... 4,821 ns/iter (+/- 14)
            </p>
            <p className="projectsSection__terminalMock__teal">
                bench: type_checked_aggregation ... 8,110 ns/iter (+/- 31)
            </p>
            <p className="projectsSection__terminalMock__comment">
                // Zero runtime overhead &amp; memory safe queries
            </p>
        </div>
    );
}

export default function ProjectsSection() {
    const { t } = useTranslation();

    return (
        <section className="projectsSection" id="projects">
            <div className="projectsSection__container">
                <SectionHeader
                    eyebrow={t('projects.eyebrow')}
                    title={t('projects.title')}
                    subtitle={t('projects.subtitle')}
                    action={
                        <Link
                            to="/projects"
                            className="projectsSection__viewAll"
                        >
                            <span>{t('projects.viewAll')}</span>
                            <ArrowRightIcon />
                        </Link>
                    }
                />

                <div className="projectsSection__grid">
                    {FEATURED_PROJECTS.map((project) => (
                        <GlassCard
                            key={project.id}
                            as="article"
                            rounded="2xl"
                            className="projectsSection__card"
                        >
                            <div>
                                <div className="projectsSection__card__windowBar">
                                    <div className="projectsSection__card__dots">
                                        <span className="projectsSection__card__dot--rose" />
                                        <span className="projectsSection__card__dot--amber" />
                                        <span className="projectsSection__card__dot--emerald" />
                                    </div>
                                    <div className="projectsSection__card__domain">
                                        {project.domainIcon === 'lock' ? (
                                            <LockIcon className="projectsSection__card__domain--teal" />
                                        ) : (
                                            <TerminalIcon
                                                width={12}
                                                height={12}
                                                className="projectsSection__card__domain--cyan"
                                            />
                                        )}
                                        <span>{project.domain}</span>
                                    </div>
                                    <span className="projectsSection__card__date">
                                        {t(project.dateKey)}
                                    </span>
                                </div>

                                <div className="projectsSection__card__preview">
                                    {project.previewType === 'chat' ? (
                                        <ChatPreview />
                                    ) : (
                                        <TerminalPreview />
                                    )}
                                </div>

                                <div className="projectsSection__card__body">
                                    <div className="projectsSection__card__titleRow">
                                        <h3 className="projectsSection__card__title">
                                            {project.title}
                                        </h3>
                                        <span
                                            className={`projectsSection__card__badge projectsSection__card__badge--${project.badgeAccent}`}
                                        >
                                            {t(project.badgeKey)}
                                        </span>
                                    </div>

                                    <p className="projectsSection__card__desc">
                                        {t(project.descriptionKey)}
                                    </p>

                                    <div className="projectsSection__card__tags">
                                        {project.tags.map((tag) => (
                                            <TagPill
                                                key={tag}
                                                label={tag}
                                                compact
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="projectsSection__card__footer">
                                {project.links.map((link) => (
                                    <a
                                        key={link.labelKey}
                                        href={link.href}
                                        target={
                                            link.external ? '_blank' : undefined
                                        }
                                        rel={
                                            link.external
                                                ? 'noopener noreferrer'
                                                : undefined
                                        }
                                        className={
                                            link.icon === 'github'
                                                ? 'projectsSection__card__link'
                                                : 'projectsSection__card__link projectsSection__card__link--stroke'
                                        }
                                    >
                                        {link.icon === 'github' ? (
                                            <>
                                                {renderLinkIcon(link.icon)}
                                                <span>{t(link.labelKey)}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>{t(link.labelKey)}</span>
                                                {renderLinkIcon(link.icon)}
                                            </>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
