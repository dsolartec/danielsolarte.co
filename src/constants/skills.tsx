import AntigravityIcon from '../assets/devicons/antigravity-original.svg?react';
import BrunoIcon from '../assets/devicons/bruno-original.svg?react';
import ClaudeIcon from '../assets/devicons/claude-original.svg?react';
import CSS3Icon from '../assets/devicons/css3-original.svg?react';
import DataDogIcon from '../assets/devicons/datadog-original.svg?react';
import DockerIcon from '../assets/devicons/docker-original.svg?react';
import FigmaIcon from '../assets/devicons/figma-original.svg?react';
import FlaskIcon from '../assets/devicons/flask-original.svg?react';
import FlutterIcon from '../assets/devicons/flutter-original.svg?react';
import GitIcon from '../assets/devicons/git-original.svg?react';
import GitHubActionsIcon from '../assets/devicons/githubactions-original.svg?react';
import GoIcon from '../assets/devicons/go-original.svg?react';
import HTML5Icon from '../assets/devicons/html5-original.svg?react';
import JavaScriptIcon from '../assets/devicons/javascript-original.svg?react';
import JetpackComposeIcon from '../assets/devicons/jetpackcompose-original.svg?react';
import JiraIcon from '../assets/devicons/jira-original.svg?react';
import JupyterIcon from '../assets/devicons/jupyter-original.svg?react';
import JWTIcon from '../assets/devicons/jwt-original.svg?react';
import KotlinIcon from '../assets/devicons/kotlin-original.svg?react';
import MatplotlibIcon from '../assets/devicons/matplotlib-original.svg?react';
import MongoDBIcon from '../assets/devicons/mongodb-original.svg?react';
import MySQLIcon from '../assets/devicons/mysql-original.svg?react';
import NodeJSIcon from '../assets/devicons/nodejs-original.svg?react';
import NotionIcon from '../assets/devicons/notion-original.svg?react';
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
import type { Skill } from '../interfaces/skills';

export const FULLSTACK_SKILLS: Skill[] = [
    { icon: <BrunoIcon />, title: 'Bruno' },
    { icon: <GitIcon />, title: 'Git' },
    { icon: <JWTIcon />, title: 'JWT' },
    { icon: <DockerIcon />, title: 'Docker' },
    { icon: <JavaScriptIcon />, title: 'JavaScript' },
    { icon: <TypeScriptIcon />, title: 'TypeScript' },
    { icon: <NodeJSIcon />, title: 'NodeJS' },
];

export const FRONTEND_SKILLS: Skill[] = [
    { icon: <FigmaIcon />, title: 'Figma' },
    { icon: <HTML5Icon />, title: 'HTML5' },
    { icon: <CSS3Icon />, title: 'CSS3' },
    { icon: <SASSIcon />, title: 'SASS/SCSS' },
    { icon: <TailwindCSSIcon />, title: 'TailwindCSS' },
    { icon: <ReactIcon />, title: 'ReactJS' },
    { icon: <ViteJSIcon />, title: 'ViteJS' },
];

export const BACKEND_SKILLS: Skill[] = [
    { icon: <GoIcon />, title: 'Go' },
    { icon: <RustIcon />, title: 'Rust' },
    { icon: <PythonIcon />, title: 'Python' },
    { icon: <PoetryIcon />, title: 'Poetry (Python)' },
    { icon: <FlaskIcon />, title: 'Flask (Python)' },
    { icon: <SQLAlchemyIcon />, title: 'SQLAlchemy (Python)' },
    { icon: <MySQLIcon />, title: 'MySQL' },
    { icon: <PostgreSQLIcon />, title: 'PostgreSQL' },
    { icon: <MongoDBIcon />, title: 'MongoDB' },
    { icon: <SwaggerIcon />, title: 'Swagger' },
];

export const MOBILE_SKILLS: Skill[] = [
    { icon: <KotlinIcon />, title: 'Kotlin' },
    { icon: <JetpackComposeIcon />, title: 'Jetpack Compose' },
    { icon: <FlutterIcon />, title: 'Flutter' },
];

export const SCIENTIST_SKILLS: Skill[] = [
    { icon: <JupyterIcon />, title: 'Jupyter Notebook' },
    { icon: <PandasIcon />, title: 'Pandas (Python)' },
    { icon: <NumPyIcon />, title: 'NumPy (Python)' },
    { icon: <MatplotlibIcon />, title: 'Matplotlib (Python)' },
];

export const OTHER_SKILLS: Skill[] = [
    { icon: <AntigravityIcon />, title: 'Antigravity' },
    { icon: <ClaudeIcon />, title: 'Claude' },
    { icon: <DataDogIcon />, title: 'DataDog' },
    { icon: <GitHubActionsIcon />, title: 'GitHub Actions' },
    { icon: <JiraIcon />, title: 'Jira' },
    { icon: <NotionIcon />, title: 'Notion' },
    { icon: <UnixIcon />, title: 'Unix' },
];
