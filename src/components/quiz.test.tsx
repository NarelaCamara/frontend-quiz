import { render, screen } from "@testing-library/react";
import { Quiz } from "./quiz";
import { MemoryRouter } from "react-router";

describe("Quiz", () => {
  it("renders the quiz component", () => {
    render(
      <MemoryRouter initialEntries={["/quiz?selection=html"]}>
        <Quiz />
      </MemoryRouter>,
    );
    // Check for loading or nav
    expect(
      screen.getByText(/loading/i) || screen.getByRole("navigation"),
    ).toBeInTheDocument();
  });
});
