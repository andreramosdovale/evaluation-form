import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Form } from "../components/Form";

describe("Form", () => {
  test("Should be able to see the fields on screen", () => {
    const { getAllByPlaceholderText } = render(<Form />);

    expect(getAllByPlaceholderText("Name"));
    expect(getAllByPlaceholderText("Rating"));
    expect(getAllByPlaceholderText("Comment"));
  });

  test("Should be able to see the submit button on screen", () => {
    const { getByRole } = render(<Form />);

    expect(
      getByRole("button", {
        name: /registrar/i,
      })
    );
  });
});
