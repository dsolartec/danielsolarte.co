import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import MailIcon from '../../../assets/tablericons/mail.svg?react';
import MapPinIcon from '../../../assets/tablericons/map-pin.svg?react';
import SendIcon from '../../../assets/tablericons/send.svg?react';
import Button from '../../ui/Button/Button';
import GlassCard from '../../ui/GlassCard/GlassCard';
import './ContactSection.scss';

export default function ContactSection() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !message.trim()) {
            return;
        }
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className="contactSection" id="contact">
            <div className="contactSection__container">
                <GlassCard
                    rounded="2xl"
                    accent="teal-strong"
                    hoverable={false}
                    className="contactSection__banner"
                >
                    <div
                        className="contactSection__glow contactSection__glow--topRight"
                        aria-hidden="true"
                    />
                    <div
                        className="contactSection__glow contactSection__glow--bottomLeft"
                        aria-hidden="true"
                    />

                    <div className="contactSection__grid">
                        <div className="contactSection__info">
                            <span className="contactSection__info__eyebrow">
                                {t('contact.eyebrow')}
                            </span>
                            <h2 className="contactSection__info__title">
                                {t('contact.title')}
                            </h2>
                            <p className="contactSection__info__desc">
                                {t('contact.description')}
                            </p>

                            <div className="contactSection__info__items">
                                <div className="contactSection__info__item">
                                    <div className="contactSection__info__icon contactSection__info__icon--teal">
                                        <MailIcon width={20} height={20} />
                                    </div>
                                    <div>
                                        <span className="contactSection__info__label">
                                            {t('contact.emailLabel')}
                                        </span>
                                        <a
                                            href="mailto:daniel.solarte@example.com"
                                            className="contactSection__info__value"
                                        >
                                            daniel.solarte@example.com
                                        </a>
                                    </div>
                                </div>

                                <div className="contactSection__info__item">
                                    <div className="contactSection__info__icon contactSection__info__icon--cyan">
                                        <MapPinIcon />
                                    </div>
                                    <div>
                                        <span className="contactSection__info__label">
                                            {t('contact.locationLabel')}
                                        </span>
                                        <span className="contactSection__info__value">
                                            {t('contact.locationValue')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contactSection__formCard">
                            <form
                                className="contactSection__form"
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <label
                                        className="contactSection__form__label"
                                        htmlFor="contact-name"
                                    >
                                        {t('contact.form.nameLabel')}
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        placeholder={t(
                                            'contact.form.namePlaceholder',
                                        )}
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setSubmitted(false);
                                        }}
                                        className="contactSection__form__input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        className="contactSection__form__label"
                                        htmlFor="contact-email"
                                    >
                                        {t('contact.form.emailLabel')}
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        placeholder={t(
                                            'contact.form.emailPlaceholder',
                                        )}
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setSubmitted(false);
                                        }}
                                        className="contactSection__form__input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        className="contactSection__form__label"
                                        htmlFor="contact-message"
                                    >
                                        {t('contact.form.messageLabel')}
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        rows={3}
                                        placeholder={t(
                                            'contact.form.messagePlaceholder',
                                        )}
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                            setSubmitted(false);
                                        }}
                                        className="contactSection__form__input"
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    block
                                >
                                    <SendIcon />
                                    <span>{t('contact.form.submit')}</span>
                                </Button>
                                {submitted && (
                                    <p className="contactSection__form__status">
                                        {t('contact.form.submitted')}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
