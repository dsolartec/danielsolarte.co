import BrunoIcon from '../assets/devicons/bruno-original.svg?react';
import CSS3Icon from '../assets/devicons/css3-original.svg?react';
import DartIcon from '../assets/devicons/dart-original.svg?react';
import DataDogIcon from '../assets/devicons/datadog-original.svg?react';
import DockerIcon from '../assets/devicons/docker-original.svg?react';
import FigmaIcon from '../assets/devicons/figma-original.svg?react';
import FlaskIcon from '../assets/devicons/flask-original.svg?react';
import FlutterIcon from '../assets/devicons/flutter-original.svg?react';
import GitIcon from '../assets/devicons/git-original.svg?react';
import GitHubActionsIcon from '../assets/devicons/githubactions-original.svg?react';
import GitHubIcon from '../assets/devicons/github-original.svg?react';
import GoIcon from '../assets/devicons/go-original.svg?react';
import HTML5Icon from '../assets/devicons/html5-original.svg?react';
import JetpackComposeIcon from '../assets/devicons/jetpackcompose-original.svg?react';
import JupyterIcon from '../assets/devicons/jupyter-original.svg?react';
import JWTIcon from '../assets/devicons/jwt-original.svg?react';
import KotlinIcon from '../assets/devicons/kotlin-original.svg?react';
import MatplotlibIcon from '../assets/devicons/matplotlib-original.svg?react';
import MongoDBIcon from '../assets/devicons/mongodb-original.svg?react';
import MySQLIcon from '../assets/devicons/mysql-original.svg?react';
import NextJSIcon from '../assets/devicons/nextjs-original.svg?react';
import NodeJSIcon from '../assets/devicons/nodejs-original.svg?react';
import NumPyIcon from '../assets/devicons/numpy-original.svg?react';
import PandasIcon from '../assets/devicons/pandas-original.svg?react';
import PoetryIcon from '../assets/devicons/poetry-original.svg?react';
import PostgreSQLIcon from '../assets/devicons/postgresql-original.svg?react';
import PythonIcon from '../assets/devicons/python-original.svg?react';
import ReactIcon from '../assets/devicons/react-original.svg?react';
import RustIcon from '../assets/devicons/rust-original.svg?react';
import SASSIcon from '../assets/devicons/sass-original.svg?react';
import SQLAlchemyIcon from '../assets/devicons/sqlalchemy-original.svg?react';
import SwaggerIcon from '../assets/devicons/swagger-original.svg?react';
import TailwindCSSIcon from '../assets/devicons/tailwindcss-original.svg?react';
import TypeScriptIcon from '../assets/devicons/typescript-original.svg?react';
import UnixIcon from '../assets/devicons/unix-original.svg?react';
import ViteJSIcon from '../assets/devicons/vitejs-original.svg?react';
import CpuIcon from '../assets/tablericons/cpu.svg?react';
import DatabaseIcon from '../assets/tablericons/database.svg?react';
import ServerIcon from '../assets/tablericons/server.svg?react';
import SmartphoneIcon from '../assets/tablericons/device-mobile.svg?react';
import { BarChartIcon, LayoutIcon } from '../components/ui/Icons/Icons';
import type { Skill, SkillCategory } from '../interfaces/skills';

export const BACKEND_SKILLS: Skill[] = [
    { icon: <GoIcon />, title: 'Go (Golang)' },
    { icon: <RustIcon />, title: 'Rust' },
    { icon: <PythonIcon />, title: 'Python' },
    { icon: <FlaskIcon />, title: 'Flask' },
    { icon: <PoetryIcon />, title: 'Poetry' },
    { icon: <NodeJSIcon />, title: 'Node.js' },
    // { title: 'NestJS' },
    { icon: <TypeScriptIcon />, title: 'TypeScript' },
    { icon: <SQLAlchemyIcon />, title: 'SQLAlchemy' },
    // { title: 'GraphQL' },
    { icon: <SwaggerIcon />, title: 'Swagger API' },
];

export const FRONTEND_SKILLS: Skill[] = [
    { icon: <ReactIcon />, title: 'ReactJS' },
    { icon: <NextJSIcon />, title: 'Next.js' },
    { icon: <ViteJSIcon />, title: 'ViteJS' },
    { icon: <TailwindCSSIcon />, title: 'TailwindCSS' },
    { icon: <SASSIcon />, title: 'SASS / SCSS' },
    { icon: <HTML5Icon />, title: 'HTML5' },
    { icon: <CSS3Icon />, title: 'CSS3' },
    { icon: <FigmaIcon />, title: 'Figma' },
];

export const DATABASE_SKILLS: Skill[] = [
    { icon: <MongoDBIcon />, title: 'MongoDB' },
    { icon: <PostgreSQLIcon />, title: 'PostgreSQL' },
    { icon: <MySQLIcon />, title: 'MySQL' },
    { title: 'Mongoose ODM' },
    { title: 'Redis (Caching)' },
];

export const MOBILE_SKILLS: Skill[] = [
    { icon: <KotlinIcon />, title: 'Kotlin' },
    { icon: <JetpackComposeIcon />, title: 'Jetpack Compose' },
    { icon: <FlutterIcon />, title: 'Flutter' },
    { icon: <DartIcon />, title: 'Dart' },
];

export const DATA_SKILLS: Skill[] = [
    { icon: <JupyterIcon />, title: 'Jupyter Notebook' },
    { icon: <PandasIcon />, title: 'Pandas' },
    { icon: <NumPyIcon />, title: 'NumPy' },
    { icon: <MatplotlibIcon />, title: 'Matplotlib' },
];

export const DEVOPS_SKILLS: Skill[] = [
    { icon: <DockerIcon />, title: 'Docker' },
    { icon: <GitIcon />, title: 'Git' },
    { icon: <GitHubIcon />, title: 'GitHub' },
    { icon: <GitHubActionsIcon />, title: 'GitHub Actions' },
    { icon: <JWTIcon />, title: 'JWT Security' },
    { icon: <DataDogIcon />, title: 'Datadog' },
    { icon: <UnixIcon />, title: 'Linux / Unix CLI' },
    { icon: <BrunoIcon />, title: 'Bruno & Postman' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        id: 'backend',
        titleKey: 'skills.categories.backend',
        accent: 'teal',
        icon: <ServerIcon />,
        skills: BACKEND_SKILLS,
    },
    {
        id: 'frontend',
        titleKey: 'skills.categories.frontend',
        accent: 'cyan',
        icon: <LayoutIcon />,
        skills: FRONTEND_SKILLS,
    },
    {
        id: 'databases',
        titleKey: 'skills.categories.databases',
        accent: 'emerald',
        icon: <DatabaseIcon />,
        skills: DATABASE_SKILLS,
    },
    {
        id: 'mobile',
        titleKey: 'skills.categories.mobile',
        accent: 'purple',
        icon: <SmartphoneIcon />,
        skills: MOBILE_SKILLS,
    },
    {
        id: 'data',
        titleKey: 'skills.categories.data',
        accent: 'amber',
        icon: <BarChartIcon />,
        skills: DATA_SKILLS,
    },
    {
        id: 'devops',
        titleKey: 'skills.categories.devops',
        accent: 'blue',
        icon: <CpuIcon />,
        skills: DEVOPS_SKILLS,
    },
];
