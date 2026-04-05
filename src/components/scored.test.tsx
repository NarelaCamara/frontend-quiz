import { render, screen } from "@testing-library/react";
import { Scored } from "./scored";
import { MemoryRouter } from "react-router";

const mockSetStep = vi.fn();

const defaultProps = {
  score: 8,
  quiz: { title: "HTML", questions: [] },
  step: { current: 10, total: 10, end: true },
  icon: "html.svg",
  setStep: mockSetStep,
};

describe("Scored", () => {
  it("renders the score", () => {
    render(
      <MemoryRouter>
        <Scored {...defaultProps} />
      </MemoryRouter>,
    );
    expect(screen.getByText("Quiz completed")).toBeInTheDocument();
    expect(screen.getByText("You scored...")).toBeInTheDocument();
  });
});
