import { render, screen } from "@testing-library/react"
import Header from "../Header"

test('header renders properly', async () => {
    render(<Header title="WOW is"/>);
    const headerElement = screen.getByRole("heading", { name : /WOW iS/i});
    expect(headerElement).toBeInTheDocument();
})

test('header renders shandar', async () => {
    render(<Header title="WOW is"/>);
    const headerElements = await screen.getAllByRole("heading");
    expect(headerElements.length).toBe(1)
})