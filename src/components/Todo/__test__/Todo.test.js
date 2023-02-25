import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Todo from "../Todo"

const MockTodo = () => {
    return(
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

describe('integration test for todo', () => {
    test('if the value gets displayed after todo is posted', () => {
        render(<MockTodo />)
        const inputElement = screen.getByPlaceholderText(/Type a new task here.../i);
        const buttonElement = screen.getByRole('button', {name : /Add/i})
        fireEvent.change(inputElement, {target: {value: /Get Home Bunny/i}})
        fireEvent.click(buttonElement)
       // expect(inputElement.value).toBe('');
        const divElement =  screen.getByText(/Get Home Bunny/i)
        expect(divElement).toBeInTheDocument();

    })

    test('if the value gets displayed after todo is posted', () => {
        render(<MockTodo />)
        const inputElement = screen.getByPlaceholderText(/Type a new task here.../i);
        const buttonElement = screen.getByRole('button', {name : /Add/i})
        fireEvent.change(inputElement, {target: {value: /Get Home Bunny/i}})
        fireEvent.click(buttonElement)
        fireEvent.change(inputElement, {target: {value: /Get Home Joel/i}})
        fireEvent.click(buttonElement)
        fireEvent.change(inputElement, {target: {value: /Get Home Rachel/i}})
        fireEvent.click(buttonElement)
       // expect(inputElement.value).toBe('');
        const divElement =  screen.getAllByTestId('todo-container')
        expect(divElement.length).toBe(3)

    })
})