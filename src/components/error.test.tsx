import { render, screen } from "@testing-library/react";
import ErrorScreen from "./error";

describe("ErrorScreen", () => {
  it("renders the error message", () => {
    render(<ErrorScreen />);
    expect(screen.getByText("¡Algo salió mal!")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Disculpe las molestias. Estamos trabajando en ello para solucionarlo lo antes posible.",
      ),
    ).toBeInTheDocument();
  });

  it("renders the warning icon", () => {
    render(<ErrorScreen />);
    const svg = screen.getByRole("img", { hidden: true }); // SVG might not have role, but let's check
    expect(svg).toBeInTheDocument();
  });
});
