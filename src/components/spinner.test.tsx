import { render, screen } from "@testing-library/react";
import Spinner from "./spinner";

describe("Spinner", () => {
  it("renders the spinner", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("animate-spin");
  });
});
