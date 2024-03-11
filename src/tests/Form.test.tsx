import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { Form } from "../components/Form";

describe("Form", () => {
  beforeEach(() => {
    const mockChangeStep = vi.fn();
    render(<Form changeStep={mockChangeStep} />);
  });

  test("Should be able to see the fields on screen", () => {
    const nameInput = screen.getByTestId("name");
    expect(nameInput).toBeInTheDocument();

    const commentInput = screen.getByTestId("comment");
    expect(commentInput).toBeInTheDocument();

    const ratingInput = screen.getByTestId("rating");
    expect(ratingInput).toBeInTheDocument();
  });

  test("Should be able to see the submit button on screen", () => {
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  test("Should be able to submit the form when name input is filled", () => {
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    expect(nameInput).toBeInTheDocument();

    fireEvent.change(nameInput, { target: { value: "Teste" } });
    fireEvent.click(screen.getByTestId("button"));
  });

  test("Should be not able to submit the form when name input is not filled", async () => {
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    expect(nameInput).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("button"));
    expect(
      await screen.findByText(/o nome é obrigatório./i)
    ).toBeInTheDocument();
  });
});
