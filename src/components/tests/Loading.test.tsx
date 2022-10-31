import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Loading } from "../Loading";

describe("<Loading />", () => {
  it("should render loading component", async () => {
    render(<Loading />);

    const sut = screen.getByTestId("loading");

    expect(sut).toBeInTheDocument();
  });
});
