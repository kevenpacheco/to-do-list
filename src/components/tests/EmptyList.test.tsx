import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { EmptyList } from "../EmptyList";

describe("<EmptyList />", () => {
  it("should render empty list message", async () => {
    render(<EmptyList />);

    const sut = screen.getByText("Você ainda não tem tarefas cadastradas");

    expect(sut).toBeInTheDocument();
  });
});
