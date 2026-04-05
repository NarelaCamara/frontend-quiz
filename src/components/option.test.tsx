import { render, screen, fireEvent } from "@testing-library/react";
import { Option } from "./option";
import { AnswerState } from "../utils/utils";

const mockHandleOptionClick = vi.fn();

const defaultProps = {
  letter: "A",
  answer: "Answer A",
  correctAnswer: "Answer A",
  stateQuestion: {
    state: AnswerState.SUBMITED,
    selectedAnswer: "",
    stateTime: "START",
  },
  handleOptionClick: mockHandleOptionClick,
};

describe("Option", () => {
  it("renders the option letter and answer", () => {
    render(<Option {...defaultProps} />);
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("Answer A")).toBeInTheDocument();
  });

  it("calls handleOptionClick on click when state is SUBMITED", () => {
    render(<Option {...defaultProps} />);
    const option = screen.getByText("Answer A").closest("div");
    fireEvent.click(option!);
    expect(mockHandleOptionClick).toHaveBeenCalledWith("Answer A");
  });
});
