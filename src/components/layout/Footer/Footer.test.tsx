import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
    it('uses hash links when on the home page', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Footer />
            </MemoryRouter>,
        );

        expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
            'href',
            '#about',
        );
        expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute(
            'href',
            '#projects',
        );
    });

    it('prefixes hash links with / when on the projects page', () => {
        render(
            <MemoryRouter initialEntries={['/projects']}>
                <Footer />
            </MemoryRouter>,
        );

        expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
            'href',
            '/#about',
        );
        expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
            'href',
            '/#contact',
        );
    });

    it('scrolls smoothly to top when clicking back-to-top button', () => {
        const scrollSpy = vi.spyOn(window, 'scrollTo');
        render(
            <MemoryRouter initialEntries={['/projects']}>
                <Footer />
            </MemoryRouter>,
        );

        fireEvent.click(screen.getByRole('button', { name: 'Back to top' }));
        expect(scrollSpy).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth',
        });
    });
});
