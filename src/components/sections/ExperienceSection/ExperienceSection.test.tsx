import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ExperienceSection from './ExperienceSection';

describe('ExperienceSection', () => {
    it('renders all experience milestones including split Mercado Libre roles', () => {
        render(<ExperienceSection />);

        expect(
            screen.getByText('CyberSecurity Engineer (SSr.)'),
        ).toBeInTheDocument();
        expect(
            screen.getByText('CyberSecurity Developer (Jr.)'),
        ).toBeInTheDocument();
        expect(
            screen.getByText('Junior Cloud Engineering'),
        ).toBeInTheDocument();
        expect(
            screen.getByText('Ext. Front-End Developer and devOps'),
        ).toBeInTheDocument();
        expect(screen.getAllByText('Full-Stack Developer')).toHaveLength(2);
    });

    it('renders Present when endDate is null', () => {
        render(<ExperienceSection />);

        expect(screen.getByText(/Present/)).toBeInTheDocument();
    });
});
