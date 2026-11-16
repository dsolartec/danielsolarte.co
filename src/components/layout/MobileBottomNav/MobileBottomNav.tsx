import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import BriefcaseFilledIcon from '../../../assets/tablericons/briefcase-filled.svg?react';
import BriefcaseIcon from '../../../assets/tablericons/briefcase.svg?react';
import CodeIcon from '../../../assets/tablericons/code.svg?react';
import GitForkIcon from '../../../assets/tablericons/git-fork.svg?react';
import UserFilledIcon from '../../../assets/tablericons/user-filled.svg?react';
import UserIcon from '../../../assets/tablericons/user.svg?react';
import { LayoutIcon } from '../../ui/Icons/Icons';
import './MobileBottomNav.scss';

const MOBILE_NAV_ITEMS = [
    {
        id: 'hero',
        labelKey: 'navigation.links.hero',
        href: '#hero',
        icon: <CodeIcon />,
        activeIcon: <CodeIcon />,
    },
    {
        id: 'about',
        labelKey: 'navigation.links.about',
        href: '#about',
        icon: <UserIcon />,
        activeIcon: <UserFilledIcon />,
    },
    {
        id: 'skills',
        labelKey: 'navigation.links.skills',
        href: '#skills',
        icon: <LayoutIcon />,
        activeIcon: <LayoutIcon />,
    },
    {
        id: 'projects',
        labelKey: 'navigation.links.projects',
        href: '#projects',
        icon: <GitForkIcon />,
        activeIcon: <GitForkIcon />,
    },
    {
        id: 'experience',
        labelKey: 'navigation.links.experience',
        href: '#experience',
        icon: <BriefcaseIcon />,
        activeIcon: <BriefcaseFilledIcon />,
    },
];

export default function MobileBottomNav() {
    const { t } = useTranslation();
    const location = useLocation();
    const [activeId, setActiveId] = useState<string>('hero');
    const isHome = location.pathname === '/';

    useEffect(() => {
        if (!isHome) {
            return;
        }
        const observers: IntersectionObserver[] = [];

        MOBILE_NAV_ITEMS.forEach((item) => {
            const el = document.getElementById(item.id);
            if (!el) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveId(item.id);
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
        <nav aria-label="Mobile Navigation" className="mobileBottomNav">
            <div className="mobileBottomNav__inner">
                {MOBILE_NAV_ITEMS.map((item) => {
                    const isActive = currentActiveId === item.id;
                    return (
                        <a
                            key={item.id}
                            href={isHome ? item.href : `/${item.href}`}
                            aria-current={isActive ? 'page' : undefined}
                            onClick={() => setActiveId(item.id)}
                            className={clsx(
                                'mobileBottomNav__item',
                                isActive && 'mobileBottomNav__item--active',
                            )}
                        >
                            {isActive ? item.activeIcon : item.icon}
                            <span className="mobileBottomNav__label">
                                {t(item.labelKey)}
                            </span>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
