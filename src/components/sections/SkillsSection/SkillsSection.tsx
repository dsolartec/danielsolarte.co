import { useTranslation } from 'react-i18next';
import { SKILL_CATEGORIES } from '../../../constants/skills';
import GlassCard from '../../ui/GlassCard/GlassCard';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import TagPill from '../../ui/TagPill/TagPill';
import './SkillsSection.scss';

export default function SkillsSection() {
    const { t } = useTranslation();

    return (
        <section className="skillsSection" id="skills">
            <div className="skillsSection__container">
                <SectionHeader
                    eyebrow={t('skills.eyebrow')}
                    title={t('skills.title')}
                    subtitle={t('skills.subtitle')}
                    action={
                        <span className="skillsSection__verified">
                            {t('skills.verified')}
                        </span>
                    }
                />

                <div className="skillsSection__grid">
                    {SKILL_CATEGORIES.map((category) => (
                        <GlassCard
                            key={category.id}
                            rounded="2xl"
                            className="skillsSection__card"
                        >
                            <div className="skillsSection__card__header">
                                <div
                                    className={`skillsSection__card__icon skillsSection__card__icon--${category.accent}`}
                                >
                                    {category.icon}
                                </div>
                                <h3 className="skillsSection__card__title">
                                    {t(category.titleKey)}
                                </h3>
                            </div>

                            <div className="skillsSection__card__list">
                                {category.skills.map((skill) => (
                                    <TagPill
                                        key={skill.title}
                                        label={skill.title}
                                        icon={skill.icon}
                                        accent={category.accent}
                                    />
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
