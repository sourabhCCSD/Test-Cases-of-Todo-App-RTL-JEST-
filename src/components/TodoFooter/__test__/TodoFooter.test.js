import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ incompleteTaskNumber }) => {
  return (
    <BrowserRouter>
      <TodoFooter noOfIncompleteTask={incompleteTaskNumber} />
    </BrowserRouter>
  );
};

describe("Todos Footer Count", () => {
  describe("Testing Plural Functionality", () => {
    test("should render the correct number of incomplete task", () => {
      render(<MockTodoFooter incompleteTaskNumber={3} />);
      const incompleteTaskElement = screen.getByText(/3 tasks left/i);
      expect(incompleteTaskElement).toBeInTheDocument();
    });
  });

  describe("Testing Singular Functionality", () => {
    test("should render just task and not tasks", () => {
      render(<MockTodoFooter incompleteTaskNumber={1} />);
      const incompleteTaskElement = screen.getByText(/1 task left/i);
      expect(incompleteTaskElement).toBeInTheDocument();
    });
  });
});
