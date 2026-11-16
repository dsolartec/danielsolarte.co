import clsx from 'clsx';
import type { JSX } from 'react';
import type { AccentVariant } from '../../../interfaces/theme';
import './TagPill.scss';

interface TagPillProps {
    label: string;
    icon?: JSX.Element;
    accent?: AccentVariant;
    compact?: boolean;
    className?: string;
}

export default function TagPill({
    label,
    icon,
    accent = 'teal',
    compact = false,
    className,
}: TagPillProps) {
    return (
        <span
            className={clsx(
                'tagPill',
                `tagPill--${accent}`,
                compact && 'tagPill--compact',
                className,
            )}
        >
            {icon && <span className="tagPill__icon">{icon}</span>}
            <span>{label}</span>
        </span>
    );
}
