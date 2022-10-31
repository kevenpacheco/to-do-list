import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("<Header />", () => {
  it("should render header component", async () => {
    render(<Header />);

    const sut = screen.getByAltText("Logo To Do app");

    expect(sut).toBeInTheDocument();
  });
});
