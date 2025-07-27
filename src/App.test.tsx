import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing and shows main content', () => {
    render(<App />);
    expect(screen.getByText("Hi, I'm Mohammed Sohail Khan", { exact: false })).toBeInTheDocument();
  });
}); 