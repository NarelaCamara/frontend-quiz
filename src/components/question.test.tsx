import { render, screen } from "@testing-library/react";
import { Question } from "./question";

const mockSetStep = vi.fn();
const mockSumCorrect = vi.fn();

const defaultProps = {
  step: { current: 1, total: 10, end: false },
  quiz: { title: "HTML", questions: [] },
  setStep: mockSetStep,
  sumCorrect: mockSumCorrect,
};

describe("Question", () => {
  it("renders the question component", () => {
    render(<Question {...defaultProps} />);
    // Assuming it renders something, like SectionQuestion
    expect(screen.getByText(/question/i)).toBeInTheDocument(); // adjust based on actual content
  });
});
