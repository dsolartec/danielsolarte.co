import type { ProjectItem } from '../interfaces/projects';

export const FEATURED_PROJECTS: ProjectItem[] = [
    {
        id: 'nextchat',
        title: 'NextChat',
        badgeKey: 'projects.items.nextchat.badge',
        badgeAccent: 'teal',
        dateKey: 'projects.items.nextchat.date',
        domain: 'nextchat.solarte.dev',
        domainIcon: 'lock',
        descriptionKey: 'projects.items.nextchat.description',
        tags: [
            'GraphQL',
            'NestJS',
            'NodeJS',
            'MongoDB',
            'ReactJS',
            'TypeScript',
            'ViteJS',
            'SASS/SCSS',
        ],
        previewType: 'chat',
        links: [
            {
                labelKey: 'projects.items.nextchat.links.github',
                href: 'https://github.com/NextChatORG/nc-client-web',
                icon: 'github',
                external: true,
            },
        ],
    },
    {
        id: 'nongoose',
        title: 'Nongoose',
        badgeKey: 'projects.items.nongoose.badge',
        badgeAccent: 'orange',
        dateKey: 'projects.items.nongoose.date',
        domain: 'crates.io/nongoose',
        domainIcon: 'terminal',
        descriptionKey: 'projects.items.nongoose.description',
        tags: [
            'Rust',
            'MongoDB',
            'Systems Programming',
            'Async-Std',
            'BSON Engine',
        ],
        previewType: 'terminal',
        links: [
            {
                labelKey: 'projects.items.nongoose.links.github',
                href: 'https://github.com/dsolartec',
                icon: 'github',
                external: true,
            },
            {
                labelKey: 'projects.items.nongoose.links.docs',
                href: '#contact',
                icon: 'docs',
                external: false,
            },
        ],
    },
];
