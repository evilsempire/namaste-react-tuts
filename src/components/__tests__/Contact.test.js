import { screen, render } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'
test("Should render contact heading", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("Should have submit button loaded", () => {
    render(<Contact />);

    const submitButton = screen.getByText("Submit");

    expect(submitButton).toBeInTheDocument();
})

test("Should have two input elements loaded", () => {
    render(<Contact />);

    const inputElements = screen.getAllByRole("textbox");

    expect(inputElements.length).toBe(2);
})