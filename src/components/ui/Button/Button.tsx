import clsx from 'clsx';
import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from 'react';
import './Button.scss';

interface BaseProps {
    children: ReactNode;
    variant?: 'primary' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    fullWidthOnMobile?: boolean;
    block?: boolean;
    className?: string;
}

type AnchorButtonProps = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

type NativeButtonProps = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
    };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
    const {
        children,
        variant = 'primary',
        size = 'md',
        fullWidthOnMobile = false,
        block = false,
        className,
        ...rest
    } = props;

    const classes = clsx(
        'uiButton',
        `uiButton--${variant}`,
        `uiButton--${size}`,
        fullWidthOnMobile && 'uiButton--full',
        block && 'uiButton--block',
        className,
    );

    if ('href' in props && props.href !== undefined) {
        const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <a className={classes} {...anchorProps}>
                {children}
            </a>
        );
    }

    const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
        <button className={classes} {...buttonProps}>
            {children}
        </button>
    );
}
