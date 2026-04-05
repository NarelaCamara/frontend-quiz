import { renderHook } from "@testing-library/react";
import { useQuizServer } from "./quiz-domain";
import axios from "axios";

vi.mock("axios");
const mockedAxios = vi.mocked(axios);

describe("useQuizServer", () => {
  it("returns the hook functions", () => {
    const { result } = renderHook(() => useQuizServer());
    expect(result.current.getQuizSelected).toBeDefined();
    expect(result.current.getIconServer).toBeDefined();
  });

  it("getIconServer returns correct url", () => {
    const { result } = renderHook(() => useQuizServer());
    const url = result.current.getIconServer("html");
    expect(url).toContain("icon-html.svg");
  });
});
