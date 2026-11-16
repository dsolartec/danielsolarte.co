import GitHubIcon from '../assets/tablericons/brand-github.svg?react';
import LinkedInIcon from '../assets/tablericons/brand-linkedin.svg?react';
import TelegramIcon from '../assets/tablericons/brand-telegram.svg?react';
import type { SocialNetworkItem } from '../interfaces/social-networks';

export const SOCIAL_NETWORKS: SocialNetworkItem[] = [
    {
        icon: <GitHubIcon width={20} height={20} />,
        title: 'GitHub Profile',
        url: 'https://github.com/dsolartec',
    },
    {
        icon: <LinkedInIcon width={20} height={20} />,
        title: 'LinkedIn Profile',
        url: 'https://linkedin.com/in/dsolartec',
    },
    {
        icon: <TelegramIcon width={20} height={20} />,
        title: 'Telegram Profile',
        url: 'https://t.me/dsolartec',
    },
];
