import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ReviewSubmitted } from "../components/ReviewSubmitted";

describe("ReviewSubmitted", () => {
  test("Should be able to changes state after 2 seconds", async () => {
    render(<ReviewSubmitted />);
    expect(screen.getByText(/aguarde/i)).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByText(/avaliação enviada/i)).toBeInTheDocument();
        expect(
          screen.getByAltText(/logotipo de ação finalizada/i)
        ).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
