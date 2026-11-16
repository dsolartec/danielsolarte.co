import type { AccentVariant } from './theme';

export const ProjectCategory = {
    BackEnd: 'BackEnd',
    FrontEnd: 'FrontEnd',
    FullStack: 'FullStack',
    University: 'University',
    Importants: 'Importants',
    Meetings: 'Meetings',
    Contributions: 'Contributions',
    Designs: 'Designs',
    Mobile: 'Mobile',
} as const;

export type ProjectCategory =
    (typeof ProjectCategory)[keyof typeof ProjectCategory];

export const ProjectTag = {
    AI: 'AI',
    CSharp: 'C#',
    WPF: 'WPF',
    GraphQL: 'GraphQL',
    NestJS: 'NestJS',
    NodeJS: 'Node.js',
    MongoDB: 'MongoDB',
    ReactJS: 'ReactJS',
    Responsive: 'Responsive',
    SASS: 'SASS/SCSS',
    TypeScript: 'TypeScript',
    ViteJS: 'ViteJS',
    WinForms: 'WinForms',
    Rust: 'Rust',
    NextJS: 'Next.js',
    ActixWeb: 'Actix Web',
    CSS: 'CSS3',
    HTML: 'HTML5',
    APIRest: 'API REST',
    DiscordJS: 'Discord.js',
    JavaScript: 'JavaScript',
    MySQL: 'MySQL',
    PostgreSQL: 'PostgreSQL',
    Python: 'Python',
    Console: 'CLI',
    Figma: 'Figma',
    Flask: 'Flask',
    Ionic: 'Ionic',
    Android: 'Android',
    ExpressJS: 'Express.js',
    Flutter: 'Flutter',
    IOS: 'iOS',
    MaterialUI: 'Material UI',
    SocketIO: 'Socket.IO',
    TypeORM: 'TypeORM',
} as const;

export type ProjectTag = (typeof ProjectTag)[keyof typeof ProjectTag];

export type ProjectExternalLinkId =
    | 'github'
    | 'demo'
    | 'docs'
    | 'youtube'
    | 'twitter'
    | 'githubAPI'
    | 'githubWEB'
    | 'githubMobile';

export interface ProjectExternalLink {
    id: ProjectExternalLinkId;
    to: string;
}

export interface Project {
    categories: ProjectCategory[];
    date: Date;
    hasImage?: boolean | { format: 'jpeg' | 'png' | 'webp' };
    id: string;
    links: ProjectExternalLink[];
    tags: ProjectTag[];
}

export interface ProjectLink {
    labelKey: string;
    href: string;
    icon: 'github' | 'external' | 'docs';
    external?: boolean;
}

export interface ProjectItem {
    id: string;
    title: string;
    badgeKey: string;
    badgeAccent: Extract<AccentVariant, 'teal' | 'orange' | 'cyan'>;
    dateKey: string;
    domain: string;
    domainIcon: 'lock' | 'terminal';
    descriptionKey: string;
    tags: string[];
    previewType: 'chat' | 'terminal';
    links: ProjectLink[];
}
