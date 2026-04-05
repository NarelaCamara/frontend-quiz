import { render, screen } from "@testing-library/react";
import { Icon } from "./icon";

describe("Icon", () => {
  it("renders the icon with default background", () => {
    render(<Icon icon="test-icon.svg" title="unknown" />);
    const img = screen.getByAltText("icon");
    expect(img).toHaveAttribute("src", "test-icon.svg");
    expect(img).toHaveClass("bg-gray-200");
  });

  it("renders with specific background color", () => {
    render(<Icon icon="html-icon.svg" title="html" />);
    const img = screen.getByAltText("icon");
    expect(img).toHaveClass("bg-[#FF7E35]/20");
  });
});
