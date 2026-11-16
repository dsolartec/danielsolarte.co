import { useTranslation } from 'react-i18next';
import RustIcon from '../../../assets/devicons/rust-original.svg?react';
import ArrowRightIcon from '../../../assets/tablericons/arrow-right.svg?react';
import MailIcon from '../../../assets/tablericons/mail.svg?react';
import SparklesIcon from '../../../assets/tablericons/sparkles.svg?react';
import { HERO_STATS } from '../../../constants/stats';
import { SOCIAL_NETWORKS } from '../../../constants/social-networks';
import Button from '../../ui/Button/Button';
import GlassCard from '../../ui/GlassCard/GlassCard';
import './HeroSection.scss';

const AVATAR_URL =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDnou5Y7P1NtCXteIraMlOTkV0oh0XHtpQ6ZkKu-Qpc9SvSFhas0Jm-Dkq5e-Ew1vx0rhnMSDCQYdBmFO4-hUJVAUs-Lv0GMNRpLziwWJ8A77GDHEK2H8xX37JK50hn3L3mzEowcUCI6aGLZnne0L96CpTvLDtys1mmsTB4HbIUh24_7efh1-0dPQnyhq5p0aA7jTkwu_2mqJrRKPNMYA8KsBJrpzfdZRBSRI96bypUIvg-4IVgwu2LIw';

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="heroSection" id="hero">
            <div className="heroSection__container">
                <div className="heroSection__grid">
                    <div className="heroSection__intro">
                        <div className="heroSection__greeting">
                            <span className="heroSection__greeting__emoji">
                                👋
                            </span>
                            <span>{t('hero.greeting')}</span>
                            <span className="heroSection__greeting__dot" />
                        </div>

                        <h1 className="heroSection__headline">
                            Daniel <span>Solarte</span>
                        </h1>

                        <p className="heroSection__role">{t('hero.role')}</p>

                        <p className="heroSection__bio">{t('hero.bio')}</p>

                        <div className="heroSection__actions">
                            <Button
                                href="#projects"
                                variant="primary"
                                size="lg"
                                fullWidthOnMobile
                            >
                                <span>{t('hero.actions.exploreProjects')}</span>
                                <ArrowRightIcon className="heroSection__actions__arrow" />
                            </Button>
                            <Button
                                href="#contact"
                                variant="glass"
                                size="lg"
                                fullWidthOnMobile
                            >
                                <MailIcon className="heroSection__actions__mail" />
                                <span>{t('hero.actions.getInTouch')}</span>
                            </Button>
                        </div>

                        <div className="heroSection__socials">
                            <span className="heroSection__socials__label">
                                {t('hero.connect')}
                            </span>
                            {SOCIAL_NETWORKS.map((item) => (
                                <GlassCard
                                    key={item.title}
                                    as="a"
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.title}
                                    className="heroSection__socials__link"
                                >
                                    {item.icon}
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    <div className="heroSection__visual">
                        <div className="heroSection__avatarWrapper">
                            <div className="heroSection__halo" />
                            <div className="heroSection__frame">
                                <div className="heroSection__frame__inner">
                                    <img
                                        src={AVATAR_URL}
                                        alt="Daniel Solarte - Full Stack Developer"
                                    />
                                    <div className="heroSection__frame__overlay" />
                                </div>
                            </div>

                            <GlassCard
                                hoverable={false}
                                className="heroSection__badge heroSection__badge--top"
                            >
                                <div className="heroSection__badge__icon heroSection__badge__icon--rust">
                                    <RustIcon />
                                </div>
                                <div>
                                    <p className="heroSection__badge__eyebrow">
                                        {t('hero.badges.rustGoEyebrow')}
                                    </p>
                                    <p className="heroSection__badge__title">
                                        {t('hero.badges.rustGoTitle')}
                                    </p>
                                </div>
                            </GlassCard>

                            <GlassCard
                                hoverable={false}
                                className="heroSection__badge heroSection__badge--bottom"
                            >
                                <div className="heroSection__badge__icon heroSection__badge__icon--teal">
                                    <SparklesIcon />
                                </div>
                                <div>
                                    <span className="heroSection__badge__strong">
                                        {t('hero.badges.fullStackTitle')}
                                    </span>
                                    <span className="heroSection__badge__mono">
                                        {t('hero.badges.fullStackSubtitle')}
                                    </span>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </div>

                <div className="heroSection__stats">
                    {HERO_STATS.map((stat) => (
                        <GlassCard
                            key={stat.labelKey}
                            rounded="2xl"
                            className="heroSection__stats__card"
                        >
                            <p
                                className={`heroSection__stats__value heroSection__stats__value--${stat.accent}`}
                            >
                                {stat.value}
                            </p>
                            <p className="heroSection__stats__label">
                                {t(stat.labelKey)}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
