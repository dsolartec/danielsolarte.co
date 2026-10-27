import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router';
import BriefcaseIcon from '../../assets/tablericons/briefcase.svg?react';
import BriefcaseFilledIcon from '../../assets/tablericons/briefcase-filled.svg?react';
import CodeIcon from '../../assets/tablericons/code.svg?react';
import GitForkIcon from '../../assets/tablericons/git-fork.svg?react';
import UserIcon from '../../assets/tablericons/user.svg?react';
import UserFilledIcon from '../../assets/tablericons/user-filled.svg?react';
import './BaseLayout.scss';

const NAVIGATION_ITEMS = [
    {
        icon: {
            active: <UserFilledIcon />,
            disabled: <UserIcon />,
        },
        title: 'navigation.pages.about',
        to: '/',
    },
    {
        icon: {
            active: <GitForkIcon />,
            disabled: <GitForkIcon />,
        },
        title: 'navigation.pages.projects',
        to: '/projects',
    },
    {
        icon: {
            active: <BriefcaseFilledIcon />,
            disabled: <BriefcaseIcon />,
        },
        title: 'navigation.pages.experience',
        to: '/experience',
    },
];

export default function BaseLayout({ children }: React.PropsWithChildren<{}>) {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <main className="baseLayout">
            <header className="baseLayout__header">
                <h1 className="baseLayout__header__title">
                    <CodeIcon />
                    Daniel <span>Solarte</span>
                </h1>
                <ul className="baseLayout__header__navigation">
                    {NAVIGATION_ITEMS.map((item) => {
                        const isActive = item.to == location.pathname;

                        return (
                            <li
                                className={clsx(
                                    'baseLayout__header__navigation__item',
                                    {
                                        'baseLayout__header__navigation__item--active':
                                            isActive,
                                    },
                                )}
                            >
                                <Link to={item.to}>
                                    {isActive
                                        ? item.icon.active
                                        : item.icon.disabled}
                                    {t(item.title)}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div></div>
            </header>
            {children}
        </main>
    );
}
