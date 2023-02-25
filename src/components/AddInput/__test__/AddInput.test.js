import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

test("should render input element", () => {

    const mocketTodos = jest.fn();

  render(<AddInput 
            todos={[]}
          //  setTodos={() =>{}}   
          setTodos={mocketTodos}     
                
        />);
  const inputElement = screen.getByPlaceholderText("Type a new task here...");
  expect(inputElement).toBeInTheDocument();
});

test("should be able to type", () => {

    const mocketTodos = jest.fn();

  render(<AddInput 
            todos={[]}  
          setTodos={mocketTodos}     
                
        />);
  const inputElement = screen.getByPlaceholderText("Type a new task here...");
    fireEvent.change(inputElement, {target: {value: 'Go Big or Go Home 1'}})
  expect(inputElement.value).toBe('Go Big or Go Home 1');
});

test("should empty the input value after the button clicked", () => {

    const mocketTodos = jest.fn();

  render(<AddInput 
            todos={[]}  
          setTodos={mocketTodos}     
                
        />);
  const inputElement = screen.getByPlaceholderText(/Type a new task here.../i);
  const buttonElement = screen.getByRole('button', {name : /Add/i});
  fireEvent.change(inputElement, {target: {value: 'Go Big or Go Home 1'}})
  fireEvent.click(buttonElement);
  expect(inputElement.value).toBe('');
    
});
