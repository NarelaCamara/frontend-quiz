import { render, screen } from "@testing-library/react";
import { Timer } from "./timer";
import { AnswerState } from "../utils/utils";

const mockSetStateQuestion = vi.fn();

const defaultProps = {
  time: 10,
  stateQuestion: {
    state: AnswerState.SUBMITED,
    selectedAnswer: "",
    stateTime: "START",
  },
  setStateQuestion: mockSetStateQuestion,
};

describe("Timer", () => {
  it("renders the timer", () => {
    render(<Timer {...defaultProps} />);
    expect(
      screen.getByText(/progress/i) || screen.getByRole("progressbar"),
    ).toBeInTheDocument();
  });
});
