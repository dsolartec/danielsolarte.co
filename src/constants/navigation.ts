import type { NavItem } from '../interfaces/navigation';

export const NAV_ITEMS: NavItem[] = [
    { id: 'hero', labelKey: 'navigation.links.hero', href: '#hero' },
    { id: 'about', labelKey: 'navigation.links.about', href: '#about' },
    { id: 'skills', labelKey: 'navigation.links.skills', href: '#skills' },
    {
        id: 'projects',
        labelKey: 'navigation.links.projects',
        href: '#projects',
    },
    {
        id: 'experience',
        labelKey: 'navigation.links.experience',
        href: '#experience',
    },
    { id: 'contact', labelKey: 'navigation.links.contact', href: '#contact' },
];
