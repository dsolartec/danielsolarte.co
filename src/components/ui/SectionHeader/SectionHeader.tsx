import type { ReactNode } from 'react';
import './SectionHeader.scss';

interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    subtitle?: string;
    action?: ReactNode;
}

export default function SectionHeader({
    eyebrow,
    title,
    subtitle,
    action,
}: SectionHeaderProps) {
    return (
        <div className="sectionHeader">
            <div className="sectionHeader__eyebrow">
                <span className="sectionHeader__eyebrow__label">{eyebrow}</span>
                <span className="sectionHeader__eyebrow__line" />
            </div>
            <div className="sectionHeader__row">
                <div>
                    <h2 className="sectionHeader__title">{title}</h2>
                    {subtitle && (
                        <p className="sectionHeader__subtitle">{subtitle}</p>
                    )}
                </div>
                {action && (
                    <div className="sectionHeader__action">{action}</div>
                )}
            </div>
        </div>
    );
}
