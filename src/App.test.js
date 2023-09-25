import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';

describe("App component", () => {
    it("should render App component correctly", () => {
        render(<App />);
        const element = screen.getByRole("heading", { level: 1 });
        expect(element).toBeInTheDocument();
    });

    test('Button has correct initial color', () => {
        render(<App />)

        // Find an element with a role of button & text of 'Next'
        const colorButton = screen.getByRole("button", { name: 'Next' })

        // Click button
        fireEvent.click(colorButton)

        // Expect the button text to be 'Change to red'
        expect(colorButton.textContent).toBe('Submit')
    })

   test('Initial conditions', () => {
        render(<App />)

        // Check that the button starts out enabled
        const colorButton = screen.getByRole("button", { name: 'Next' })
        expect(colorButton).toBeEnabled()

        // Check that the checkbox starts out unchecked
        expect(checkbox.checked).toequal(true)

        //const checkbox = screen.getByRole("checkbox")
        //expect(checkbox).not.toBeChecked()
    })
});
