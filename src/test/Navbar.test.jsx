import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  test("render links", () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    const countElement = screen.queryAllByText(/Galería/i);

    expect(countElement).toBeDefined();
  });

  test("render image", () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    const countElement = screen.getAllByRole("img");

    expect(countElement).toBeDefined();
  });
});
