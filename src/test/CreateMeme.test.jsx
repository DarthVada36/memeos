import { render, screen } from "@testing-library/react";
import CreateMeme from "../pages/CreateMeme";
import { beforeEach, describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("CreateMeme", () => {
  beforeEach(() => {
    render(<CreateMeme />, { wrapper: BrowserRouter });
  });

  // Verifica que se renderice el campo de entrada para el título
  test("renders Título input", () => {
    const tituloElement = screen.getByPlaceholderText(/Título/i);
    expect(tituloElement).toBeDefined();
  });

  // Verifica que se renderice el campo de entrada para la fecha
  test("renders Fecha input", () => {
    const fechaElement = screen.getByPlaceholderText(/Fecha/i);
    expect(fechaElement).toBeDefined();
  });

  // Verifica que se renderice el campo de entrada para el autor
  test("renders Autor input", () => {
    const autorElement = screen.getByPlaceholderText(/Autor/i);
    expect(autorElement).toBeDefined();
  });

  // Verifica que se renderice el campo de entrada para la descripción
  test("renders Descripción input", () => {
    const descripcionElement = screen.getByPlaceholderText(/Descripción/i);
    expect(descripcionElement).toBeDefined();
  });

  // Verifica que se renderice el campo de entrada para la corriente
  test("renders Corriente input", () => {
    const corrienteElement = screen.getByPlaceholderText(/Corriente/i);
    expect(corrienteElement).toBeDefined();
  });
});