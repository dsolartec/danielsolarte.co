import type { AccentVariant } from './theme';

export interface ExperienceItem {
    id: string;
    roleKey: string;
    startDate: Date;
    endDate: Date | null;
    organization: string;
    descriptionKey: string;
    accent: Extract<AccentVariant, 'teal' | 'cyan' | 'emerald'>;
}
