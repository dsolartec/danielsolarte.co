import type { JSX } from 'react';
import type { AccentVariant } from './theme';

export interface Skill {
    icon?: JSX.Element;
    title: string;
}

export interface SkillCategory {
    id: string;
    titleKey: string;
    accent: AccentVariant;
    icon: JSX.Element;
    skills: Skill[];
}
