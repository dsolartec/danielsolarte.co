import type { AccentVariant } from './theme';

export interface StatItem {
    value: string;
    labelKey: string;
    accent: Extract<AccentVariant, 'teal' | 'cyan' | 'emerald' | 'indigo'>;
}
