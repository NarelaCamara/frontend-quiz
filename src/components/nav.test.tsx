import { render, screen } from "@testing-library/react";
import { Nav } from "./nav";

describe("Nav", () => {
  it("renders the title and icon when provided", () => {
    render(<Nav icon="test.svg" title="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByAltText("icon")).toBeInTheDocument();
  });

  it("does not render icon when title is empty", () => {
    render(<Nav />);
    expect(screen.queryByAltText("icon")).not.toBeInTheDocument();
  });

  it("renders the dark mode button", () => {
    render(<Nav />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
