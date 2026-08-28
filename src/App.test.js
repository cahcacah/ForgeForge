// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ForgeForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ForgeForge/i);
    expect(titleElement).toBeInTheDocument();
});
