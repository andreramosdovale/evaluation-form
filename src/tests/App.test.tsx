import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, expect, it } from "vitest";

describe("App component", () => {
  it("Should be able to renders Form component initially", () => {
    render(<App />);

    expect(screen.getByTestId("form-component")).toBeInTheDocument();
  });
});
