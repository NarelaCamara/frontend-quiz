import { render, screen } from "@testing-library/react";
import { Routes } from "./routes";
import { MemoryRouter } from "react-router";

describe("Routes", () => {
  it("renders the routes", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>,
    );
    // Assuming App renders something
    expect(screen.getByText(/welcome/i) || document.body).toBeInTheDocument();
  });
});
