import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import TerminalIcon from '../../../assets/tablericons/terminal.svg?react';
import { ABOUT_FACTS, ABOUT_HIGHLIGHT_KEYS } from '../../../constants/about';
import GlassCard from '../../ui/GlassCard/GlassCard';
import { CheckIcon } from '../../ui/Icons/Icons';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import './AboutSection.scss';

export default function AboutSection() {
    const { t } = useTranslation();

    return (
        <section className="aboutSection" id="about">
            <div className="aboutSection__container">
                <SectionHeader
                    eyebrow={t('about.eyebrow')}
                    title={t('about.title')}
                />

                <div className="aboutSection__grid">
                    <GlassCard
                        rounded="2xl"
                        className="aboutSection__narrative"
                    >
                        <div
                            className="aboutSection__narrative__glow"
                            aria-hidden="true"
                        />
                        <p className="aboutSection__narrative__text">
                            {t('about.paragraph1Prefix')}
                            <strong>{t('about.paragraph1Strong')}</strong>
                            {t('about.paragraph1Suffix')}
                        </p>
                        <p className="aboutSection__narrative__text aboutSection__narrative__text--spaced">
                            {t('about.paragraph2Part1')}
                            <span className="aboutSection__narrative__mono aboutSection__narrative__mono--cyan">
                                Rust
                            </span>
                            {t('about.paragraph2Part2')}
                            <span className="aboutSection__narrative__mono aboutSection__narrative__mono--teal">
                                GraphQL &amp; NestJS
                            </span>
                            {t('about.paragraph2Part3')}
                            <span className="aboutSection__narrative__mono aboutSection__narrative__mono--emerald">
                                Kotlin &amp; Flutter
                            </span>
                            {t('about.paragraph2Part4')}
                        </p>

                        <div className="aboutSection__highlights">
                            {ABOUT_HIGHLIGHT_KEYS.map((key) => (
                                <div
                                    key={key}
                                    className="aboutSection__highlights__item"
                                >
                                    <span className="aboutSection__highlights__check">
                                        <CheckIcon />
                                    </span>
                                    <span>{t(key)}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    <GlassCard
                        rounded="2xl"
                        accent="teal"
                        className="aboutSection__philosophy"
                    >
                        <div>
                            <div className="aboutSection__philosophy__icon">
                                <TerminalIcon />
                            </div>
                            <h3 className="aboutSection__philosophy__title">
                                {t('about.philosophy.title')}
                            </h3>
                            <p className="aboutSection__philosophy__quote">
                                {t('about.philosophy.quote')}
                            </p>
                        </div>

                        <div className="aboutSection__philosophy__facts">
                            {ABOUT_FACTS.map((fact) => (
                                <div
                                    key={fact.labelKey}
                                    className="aboutSection__philosophy__factRow"
                                >
                                    <span>{t(fact.labelKey)}</span>
                                    <span
                                        className={clsx(
                                            'aboutSection__philosophy__factValue',
                                            fact.highlight &&
                                                'aboutSection__philosophy__factValue--highlight',
                                        )}
                                    >
                                        {t(fact.valueKey)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
