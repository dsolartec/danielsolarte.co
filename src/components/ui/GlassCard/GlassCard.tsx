import clsx from 'clsx';
import type {
    AnchorHTMLAttributes,
    ElementType,
    HTMLAttributes,
    ReactNode,
} from 'react';
import './GlassCard.scss';

type GlassCardProps = {
    as?: ElementType;
    children: ReactNode;
    className?: string;
    hoverable?: boolean;
    rounded?: 'xl' | '2xl';
    accent?: 'none' | 'teal' | 'teal-strong';
} & HTMLAttributes<HTMLElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>;

export default function GlassCard({
    as: Component = 'div',
    children,
    className,
    hoverable = true,
    rounded = 'xl',
    accent = 'none',
    ...rest
}: GlassCardProps) {
    return (
        <Component
            className={clsx(
                'glassCard',
                !hoverable && 'glassCard--static',
                rounded === '2xl' && 'glassCard--rounded-2xl',
                accent === 'teal' && 'glassCard--accent-teal',
                accent === 'teal-strong' && 'glassCard--accent-teal-strong',
                className,
            )}
            {...rest}
        >
            {children}
        </Component>
    );
}
