import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import { ALL_PROJECTS } from '../constants/all-projects';
import ProjectsPage from './ProjectsPage';

describe('ProjectsPage', () => {
    it('renders all projects by default and filters by category', () => {
        render(
            <MemoryRouter initialEntries={['/projects']}>
                <ProjectsPage />
            </MemoryRouter>,
        );

        expect(screen.getAllByRole('article')).toHaveLength(
            ALL_PROJECTS.length,
        );

        const mobileTab = screen.getByRole('tab', { name: /Mobile/i });
        fireEvent.click(mobileTab);

        const mobileArticles = screen.getAllByRole('article');
        expect(mobileArticles).toHaveLength(2);
        expect(screen.getByText('NextMusic')).toBeInTheDocument();
        expect(screen.getByText('NextChat (2020)')).toBeInTheDocument();

        const allTab = screen.getByRole('tab', { name: /All/i });
        fireEvent.click(allTab);
        expect(screen.getAllByRole('article')).toHaveLength(
            ALL_PROJECTS.length,
        );
    });
});
