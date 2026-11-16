import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
    it('submits the form, clears fields, and shows confirmation message', () => {
        render(<ContactSection />);

        const nameInput = screen.getByLabelText('Your Name');
        const emailInput = screen.getByLabelText('Your Email');
        const messageInput = screen.getByLabelText('Project Details');
        const submitButton = screen.getByRole('button', {
            name: /Send Message/i,
        });

        fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
        fireEvent.change(emailInput, {
            target: { value: 'jane@example.com' },
        });
        fireEvent.change(messageInput, {
            target: { value: 'Let us build an app.' },
        });
        fireEvent.click(submitButton);

        expect(
            screen.getByText('Thanks! Your message has been queued.'),
        ).toBeInTheDocument();
        expect(nameInput).toHaveValue('');
        expect(emailInput).toHaveValue('');
        expect(messageInput).toHaveValue('');
    });
});
