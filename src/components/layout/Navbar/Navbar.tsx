import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import CodeIcon from '../../../assets/tablericons/code.svg?react';
import FileDownIcon from '../../../assets/tablericons/file-download.svg?react';
import SendIcon from '../../../assets/tablericons/send.svg?react';
import { NAV_ITEMS } from '../../../constants/navigation';
import Button from '../../ui/Button/Button';
import './Navbar.scss';

export default function Navbar() {
    const { t } = useTranslation();
    const location = useLocation();
    const [activeId, setActiveId] = useState<string>('hero');
    const isHome = location.pathname === '/';

    useEffect(() => {
        if (!isHome) {
            return;
        }
        const sectionIds = NAV_ITEMS.map((item) => item.id);
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveId(id);
                        }
                    });
                },
                { rootMargin: '-35% 0px -55% 0px' },
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [isHome]);

    const currentActiveId = isHome ? activeId : 'projects';

    return (
        <header className="navbar">
            <div className="navbar__inner">
                <a
                    className="navbar__brand"
                    href={isHome ? '#hero' : '/#hero'}
                    onClick={() => setActiveId('hero')}
                >
                    <span className="navbar__brand__icon">
                        <CodeIcon />
                    </span>
                    <span className="navbar__brand__name">
                        Daniel <span>Solarte</span>
                    </span>
                </a>

                <nav aria-label="Main Navigation" className="navbar__nav">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={isHome ? item.href : `/${item.href}`}
                            onClick={() => setActiveId(item.id)}
                            className={clsx(
                                'navbar__nav__link',
                                currentActiveId === item.id &&
                                    'navbar__nav__link--active',
                            )}
                        >
                            {t(item.labelKey)}
                        </a>
                    ))}
                </nav>

                <div className="navbar__actions">
                    <Button
                        href={isHome ? '#contact' : '/#contact'}
                        size="sm"
                        className="navbar__actions__cta"
                        aria-label={t('navigation.cta')}
                    >
                        <SendIcon />
                        <span>{t('navigation.cta')}</span>
                    </Button>
                    <a
                        href={isHome ? '#contact' : '/#contact'}
                        className="navbar__actions__iconBtn"
                        title={t('navigation.downloadCv')}
                        aria-label={t('navigation.downloadCv')}
                    >
                        <FileDownIcon />
                    </a>
                </div>
            </div>
        </header>
    );
}
