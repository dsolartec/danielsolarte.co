import {
    ProjectCategory,
    ProjectTag,
    type Project,
} from '../interfaces/projects';

const PROJECT_IMAGE_FILENAME_OVERRIDES: Record<string, string> = {
    operationsAPP: 'OperationsAPP',
    portfoliov1: 'PortfolioV1',
    portfoliov2: 'PortfolioV2',
    portfoliov3: 'PortfolioV3',
};

export function getProjectImageSrc(project: Project): string | null {
    if (!project.hasImage) {
        return null;
    }

    const format =
        typeof project.hasImage === 'object' ? project.hasImage.format : 'png';
    const filename = PROJECT_IMAGE_FILENAME_OVERRIDES[project.id] ?? project.id;

    return `/projects/${filename}.${format}`;
}

export const ALL_PROJECTS: Project[] = [
    // 2026
    {
        categories: [
            ProjectCategory.BackEnd,
            ProjectCategory.FrontEnd,
            ProjectCategory.FullStack,
            ProjectCategory.University,
            ProjectCategory.Designs,
        ],
        date: new Date(2026, 8),
        hasImage: true,
        id: 'PythonBikergroupsWebAPP',
        links: [
            {
                id: 'github',
                to: 'https://github.com/dsolartec/python-bikergroups-webapp',
            },
        ],
        tags: [
            ProjectTag.AI,
            ProjectTag.Python,
            ProjectTag.Flask,
            ProjectTag.PostgreSQL,
            ProjectTag.HTML,
            ProjectTag.SASS,
            ProjectTag.Figma,
        ],
    },
    {
        categories: [ProjectCategory.FrontEnd, ProjectCategory.University],
        date: new Date(2026, 4),
        hasImage: true,
        id: 'ElipseInteractiveWeb',
        links: [
            { id: 'github', to: 'https://github.com/dsolartec/udem-elipse' },
            { id: 'demo', to: 'https://udem-elipse.danielsolarte.co/' },
        ],
        tags: [
            ProjectTag.AI,
            ProjectTag.HTML,
            ProjectTag.CSS,
            ProjectTag.JavaScript,
        ],
    },
    // 2022
    {
        categories: [ProjectCategory.FrontEnd],
        date: new Date(2022, 10),
        hasImage: true,
        id: 'portfoliov3',
        links: [
            {
                id: 'github',
                to: 'https://github.com/dsolartec/danielsolarte.co/tree/90ff49fe9208f4425c089a067126de001140d5a6',
            },
        ],
        tags: [
            ProjectTag.MaterialUI,
            ProjectTag.ReactJS,
            ProjectTag.SASS,
            ProjectTag.TypeScript,
            ProjectTag.ViteJS,
        ],
    },
    {
        categories: [
            ProjectCategory.BackEnd,
            ProjectCategory.FrontEnd,
            ProjectCategory.FullStack,
            ProjectCategory.University,
        ],
        date: new Date(2022, 9),
        hasImage: true,
        id: 'PTFinalProject',
        links: [
            {
                id: 'github',
                to: 'https://github.com/dsolartec/pt-final-project',
            },
        ],
        tags: [ProjectTag.CSharp, ProjectTag.WPF],
    },
    {
        categories: [
            ProjectCategory.BackEnd,
            ProjectCategory.FrontEnd,
            ProjectCategory.FullStack,
            ProjectCategory.Importants,
        ],
        date: new Date(2022, 8),
        hasImage: { format: 'jpeg' },
        id: 'NextChat2022',
        links: [
            {
                id: 'github',
                to: 'https://github.com/NextChatORG/nc-client-web',
            },
        ],
        tags: [
            ProjectTag.GraphQL,
            ProjectTag.NestJS,
            ProjectTag.NodeJS,
            ProjectTag.MongoDB,
            ProjectTag.ReactJS,
            ProjectTag.Responsive,
            ProjectTag.SASS,
            ProjectTag.TypeScript,
            ProjectTag.ViteJS,
        ],
    },
    {
        categories: [ProjectCategory.FrontEnd, ProjectCategory.University],
        date: new Date(2022, 3),
        hasImage: true,
        id: 'operationsAPP',
        links: [
            {
                id: 'github',
                to: 'https://github.com/dsolartec/aplicacion-operaciones',
            },
        ],
        tags: [ProjectTag.CSharp, ProjectTag.WinForms],
    },
    // 2021
    {
        categories: [ProjectCategory.BackEnd, ProjectCategory.Importants],
        date: new Date(2021, 10),
        id: 'nongoose',
        links: [
            { id: 'github', to: 'https://github.com/dsolartec/nongoose' },
            { id: 'docs', to: 'https://nongoose.danielsolarte.com' },
        ],
        tags: [ProjectTag.MongoDB, ProjectTag.Rust],
    },
    {
        categories: [ProjectCategory.BackEnd],
        date: new Date(2021, 6),
        id: 'languagesrs',
        links: [
            { id: 'github', to: 'https://github.com/dsolartec/languages-rs' },
        ],
        tags: [ProjectTag.Rust],
    },
    {
        categories: [ProjectCategory.FrontEnd, ProjectCategory.University],
        date: new Date(2021, 4),
        hasImage: { format: 'jpeg' },
        id: 'tgs2021',
        links: [
            {
                id: 'github',
                to: 'https://github.com/dsolartec/prototipo-tgs-proyecto-final',
            },
            {
                id: 'demo',
                to: 'https://prototipo-tgs-proyecto-final.vercel.app',
            },
        ],
        tags: [ProjectTag.NextJS, ProjectTag.ReactJS, ProjectTag.TypeScript],
    },
    {
        categories: [ProjectCategory.FrontEnd],
        date: new Date(2021, 0),
        hasImage: true,
        id: 'portfoliov2',
        links: [
            { id: 'github', to: 'https://github.com/dsolartec/portfoliov2' },
        ],
        tags: [ProjectTag.ActixWeb, ProjectTag.Rust, ProjectTag.SASS],
    },
    // 2020
    {
        categories: [ProjectCategory.FrontEnd],
        date: new Date(2020, 11),
        hasImage: true,
        id: 'radiolibre',
        links: [
            {
                id: 'github',
                to: 'https://github.com/dsolartec/radiolibre_template',
            },
        ],
        tags: [ProjectTag.CSS, ProjectTag.HTML, ProjectTag.Responsive],
    },
    {
        categories: [ProjectCategory.Meetings],
        date: new Date(2020, 10, 17),
        hasImage: true,
        id: 'GitHubPresente',
        links: [{ id: 'youtube', to: 'https://youtu.be/l8bLDR89qHA?t=4893' }],
        tags: [ProjectTag.Rust],
    },
    {
        categories: [ProjectCategory.FrontEnd],
        date: new Date(2020, 10),
        hasImage: true,
        id: 'AMVA40',
        links: [
            { id: 'github', to: 'https://github.com/dsolartec/amva-app' },
            { id: 'demo', to: 'https://amva40.github.io/' },
        ],
        tags: [
            ProjectTag.APIRest,
            ProjectTag.NodeJS,
            ProjectTag.ReactJS,
            ProjectTag.TypeScript,
        ],
    },
    {
        categories: [ProjectCategory.BackEnd, ProjectCategory.Contributions],
        date: new Date(2020, 9),
        hasImage: true,
        id: 'BeccaLyria',
        links: [
            {
                id: 'github',
                to: 'https://github.com/BeccaLyria/discord-bot/commits?author=dsolartec',
            },
            {
                id: 'docs',
                to: 'https://github.com/BeccaLyria/discord-documentation/commits?author=dsolartec',
            },
        ],
        tags: [ProjectTag.DiscordJS, ProjectTag.NodeJS, ProjectTag.TypeScript],
    },
    {
        categories: [ProjectCategory.FrontEnd],
        date: new Date(2020, 8),
        hasImage: true,
        id: 'portfoliov1',
        links: [
            { id: 'github', to: 'https://github.com/dsolartec/portfoliov1' },
        ],
        tags: [
            ProjectTag.JavaScript,
            ProjectTag.ReactJS,
            ProjectTag.Responsive,
            ProjectTag.SASS,
        ],
    },
    {
        categories: [ProjectCategory.BackEnd],
        date: new Date(2020, 8),
        id: 'NextDatabase',
        links: [
            { id: 'github', to: 'https://github.com/dsolartec/next-database' },
        ],
        tags: [ProjectTag.MySQL, ProjectTag.NodeJS, ProjectTag.TypeScript],
    },
    {
        categories: [ProjectCategory.BackEnd],
        date: new Date(2020, 7),
        id: 'sflynlang',
        links: [
            {
                id: 'github',
                to: 'https://github.com/sflynlang/sflynlang-interpreter',
            },
        ],
        tags: [ProjectTag.Rust],
    },
    {
        categories: [ProjectCategory.BackEnd],
        date: new Date(2020, 7),
        id: 'spooked',
        links: [{ id: 'github', to: 'https://github.com/dsolartec/spooked' }],
        tags: [
            ProjectTag.MongoDB,
            ProjectTag.MySQL,
            ProjectTag.NodeJS,
            ProjectTag.TypeScript,
        ],
    },
    {
        categories: [ProjectCategory.BackEnd],
        date: new Date(2020, 7),
        hasImage: true,
        id: 'rustNotesCLI',
        links: [
            { id: 'github', to: 'https://github.com/dsolartec/rust-notes-cli' },
        ],
        tags: [ProjectTag.Console, ProjectTag.Rust],
    },
    {
        categories: [ProjectCategory.Designs, ProjectCategory.Mobile],
        date: new Date(2020, 6),
        hasImage: true,
        id: 'NextMusic',
        links: [{ id: 'github', to: 'https://github.com/dsolartec/nextmusic' }],
        tags: [
            ProjectTag.Figma,
            ProjectTag.Ionic,
            ProjectTag.ReactJS,
            ProjectTag.SASS,
            ProjectTag.TypeScript,
        ],
    },
    {
        categories: [ProjectCategory.FrontEnd],
        date: new Date(2020, 6),
        hasImage: true,
        id: 'FaztCommunity',
        links: [
            {
                id: 'twitter',
                to: 'https://twitter.com/FaztTech/status/1281102226237292544',
            },
        ],
        tags: [ProjectTag.CSS, ProjectTag.HTML],
    },
    {
        categories: [
            ProjectCategory.BackEnd,
            ProjectCategory.FrontEnd,
            ProjectCategory.FullStack,
            ProjectCategory.Mobile,
        ],
        date: new Date(2020, 5),
        hasImage: true,
        id: 'NextChat2020',
        links: [
            {
                id: 'githubAPI',
                to: 'https://github.com/dsolartec/nextchat-api',
            },
            {
                id: 'githubWEB',
                to: 'https://github.com/dsolartec/nextchat-web',
            },
            {
                id: 'githubMobile',
                to: 'https://github.com/dsolartec/nextchat-mobile',
            },
        ],
        tags: [
            ProjectTag.Android,
            ProjectTag.APIRest,
            ProjectTag.ExpressJS,
            ProjectTag.Flutter,
            ProjectTag.IOS,
            ProjectTag.MySQL,
            ProjectTag.NodeJS,
            ProjectTag.ReactJS,
            ProjectTag.SASS,
            ProjectTag.SocketIO,
            ProjectTag.TypeORM,
            ProjectTag.TypeScript,
        ],
    },
];
