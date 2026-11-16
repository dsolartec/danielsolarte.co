import { useTranslation } from 'react-i18next';
import { EXPERIENCE_MILESTONES } from '../../../constants/experience';
import GlassCard from '../../ui/GlassCard/GlassCard';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import './ExperienceSection.scss';

export default function ExperienceSection() {
    const { t, i18n } = useTranslation();

    const dateFormatter = new Intl.DateTimeFormat(i18n.language, {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    const formatPeriod = (startDate: Date, endDate: Date | null) => {
        const start = dateFormatter.format(startDate);
        const end = endDate
            ? dateFormatter.format(endDate)
            : t('experience.present');
        return `${start} - ${end}`;
    };

    return (
        <section className="experienceSection" id="experience">
            <div className="experienceSection__container">
                <SectionHeader
                    eyebrow={t('experience.eyebrow')}
                    title={t('experience.title')}
                />

                <div className="experienceSection__timeline">
                    {EXPERIENCE_MILESTONES.map((item) => (
                        <div key={item.id} className="experienceSection__item">
                            <span
                                className={`experienceSection__dot experienceSection__dot--${item.accent}`}
                                aria-hidden="true"
                            />
                            <GlassCard
                                rounded="2xl"
                                className="experienceSection__card"
                            >
                                <div className="experienceSection__card__header">
                                    <h3 className="experienceSection__card__role">
                                        {t(item.roleKey)}
                                    </h3>
                                    <span
                                        className={`experienceSection__card__period experienceSection__card__period--${item.accent}`}
                                    >
                                        {formatPeriod(
                                            item.startDate,
                                            item.endDate,
                                        )}
                                    </span>
                                </div>
                                <p className="experienceSection__card__org">
                                    {item.organization}
                                </p>
                                <p className="experienceSection__card__desc">
                                    {t(item.descriptionKey)}
                                </p>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
