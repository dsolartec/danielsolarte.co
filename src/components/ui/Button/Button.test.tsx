import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
    it('renders a native button when href is not provided and handles clicks', () => {
        const handleClick = vi.fn();
        render(
            <Button variant="primary" size="md" onClick={handleClick}>
                Click me
            </Button>,
        );

        const button = screen.getByRole('button', { name: 'Click me' });
        expect(button).toHaveClass(
            'uiButton',
            'uiButton--primary',
            'uiButton--md',
        );

        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders an anchor element when href is provided', () => {
        render(
            <Button href="#projects" variant="glass" size="lg">
                Explore Projects
            </Button>,
        );

        const link = screen.getByRole('link', { name: 'Explore Projects' });
        expect(link).toHaveAttribute('href', '#projects');
        expect(link).toHaveClass('uiButton', 'uiButton--glass', 'uiButton--lg');
    });
});
