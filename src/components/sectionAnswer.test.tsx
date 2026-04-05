import { render, screen } from "@testing-library/react";
import { SectionAnswer } from "./sectionAnswer";
import { AnswerState } from "../utils/utils";

const mockHandleButtonNext = vi.fn();
const mockHandleOptionClick = vi.fn();

const defaultProps = {
  stateQuestion: {
    state: AnswerState.SUBMITED,
    selectedAnswer: "",
    stateTime: "START",
  },
  quiz: {
    title: "HTML",
    questions: [{ question: "Q1", options: ["A", "B"], answer: "A" }],
  },
  step: { current: 1, total: 1, end: false },
  handleButtonNext: mockHandleButtonNext,
  handleOptionClick: mockHandleOptionClick,
};

describe("SectionAnswer", () => {
  it("renders the options", () => {
    render(<SectionAnswer {...defaultProps} />);
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });
});
