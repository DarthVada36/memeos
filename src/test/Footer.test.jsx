import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Footer", () => {
  test("render footer", () => {
    render(<Footer />, { wrapper: BrowserRouter });
    const countElement = screen.getByText(/copyright /i);

    expect(countElement).toBeDefined();
  });
});
