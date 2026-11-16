import { useTranslation } from 'react-i18next';
import { SOCIAL_NETWORKS } from '../../../constants/social-networks';
import {
    BACKEND_SKILLS,
    FRONTEND_SKILLS,
    FULLSTACK_SKILLS,
    MOBILE_SKILLS,
    OTHER_SKILLS,
    SCIENTIST_SKILLS,
} from '../../../constants/skills';
import './HeroSection.scss';

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="heroSection">
            <div className="heroSection__about">
                <span className="heroSection__about__greeting">
                    {t("Hello, I'm")}
                </span>
                <h2 className="heroSection__about__fullName">
                    Daniel <span>Solarte</span>
                </h2>
                <h3 className="heroSection__about__jobTitle">
                    {t('about.title')}
                </h3>
                <p className="heroSection__about__description">
                    {t('about.description')}
                </p>
                <div className="heroSection__about__socialNetworks">
                    <span>Follow me on</span>
                    <ul className="heroSection__about__socialNetworks__list">
                        {SOCIAL_NETWORKS.map((item, i) => (
                            <li
                                className="heroSection__about__socialNetworks__list__item"
                                key={`socialNetwork_${i}`}
                            >
                                <a href={item.url} target="_blank">
                                    {item.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="heroSection__skills">
                <h3 className="heroSection__skills__title">Skills</h3>
                <div className="heroSection__skills__container">
                    <h4 className="heroSection__skills__container__title">
                        FullStack
                    </h4>
                    <ul className="heroSection__skills__container__list">
                        {FULLSTACK_SKILLS.map((skill, i) => (
                            <li
                                className="heroSection__skills__container__list__item"
                                key={`fs_skill_${i}`}
                            >
                                {skill.icon}
                                <span>{skill.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="heroSection__skills__container">
                    <h4 className="heroSection__skills__container__title">
                        BackEnd
                    </h4>
                    <ul className="heroSection__skills__container__list">
                        {BACKEND_SKILLS.map((skill, i) => (
                            <li
                                className="heroSection__skills__container__list__item"
                                key={`be_skill_${i}`}
                            >
                                {skill.icon}
                                <span>{skill.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="heroSection__skills__container">
                    <h4 className="heroSection__skills__container__title">
                        FrontEnd
                    </h4>
                    <ul className="heroSection__skills__container__list">
                        {FRONTEND_SKILLS.map((skill, i) => (
                            <li
                                className="heroSection__skills__container__list__item"
                                key={`fe_skill_${i}`}
                            >
                                {skill.icon}
                                <span>{skill.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="heroSection__skills__container">
                    <h4 className="heroSection__skills__container__title">
                        Scientist
                    </h4>
                    <ul className="heroSection__skills__container__list">
                        {SCIENTIST_SKILLS.map((skill, i) => (
                            <li
                                className="heroSection__skills__container__list__item"
                                key={`s_skill_${i}`}
                            >
                                {skill.icon}
                                <span>{skill.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="heroSection__skills__container">
                    <h4 className="heroSection__skills__container__title">
                        Mobile
                    </h4>
                    <ul className="heroSection__skills__container__list">
                        {MOBILE_SKILLS.map((skill, i) => (
                            <li
                                className="heroSection__skills__container__list__item"
                                key={`m_skill_${i}`}
                            >
                                {skill.icon}
                                <span>{skill.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="heroSection__skills__container">
                    <h4 className="heroSection__skills__container__title">
                        Other tools
                    </h4>
                    <ul className="heroSection__skills__container__list">
                        {OTHER_SKILLS.map((skill, i) => (
                            <li
                                className="heroSection__skills__container__list__item"
                                key={`o_skill_${i}`}
                            >
                                {skill.icon}
                                <span>{skill.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
