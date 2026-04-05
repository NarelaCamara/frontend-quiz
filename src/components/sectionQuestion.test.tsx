import { render, screen } from "@testing-library/react";
import { SectionQuestion } from "./sectionQuestion";
import { AnswerState } from "../utils/utils";

const mockSetStateQuestion = vi.fn();

const defaultProps = {
  step: { current: 1, total: 10, end: false },
  quiz: {
    title: "HTML",
    questions: [{ question: "What is HTML?", options: [], answer: "" }],
  },
  stateQuestion: {
    state: AnswerState.SUBMITED,
    selectedAnswer: "",
    stateTime: "START",
  },
  setStateQuestion: mockSetStateQuestion,
};

describe("SectionQuestion", () => {
  it("renders the question", () => {
    render(<SectionQuestion {...defaultProps} />);
    expect(screen.getByText("Question 1 of 10")).toBeInTheDocument();
    expect(screen.getByText("What is HTML?")).toBeInTheDocument();
  });
});
