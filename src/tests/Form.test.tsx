import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Form } from "../components/Form";

describe("Form", () => {
  beforeEach(() => {
    render(<Form />);
  });

  test("Should be able to see the fields on screen", () => {
    expect(screen.getAllByPlaceholderText("Name"));
    expect(screen.getAllByPlaceholderText("Rating"));
    expect(screen.getAllByPlaceholderText("Comment"));
  });

  test("Should be able to see the submit button on screen", () => {
    expect(
      screen.getByRole("button", {
        name: /registrar/i,
      })
    );
  });
});
