import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Progress } from "../Progress";

describe("<Progress />", () => {
  it("should render progress component with completed and created tasks", async () => {
    render(<Progress completedTasks={888} createdTasks={999} />);

    expect(screen.getByText(/Tarefas criadas/i)).toHaveTextContent('999');
    expect(screen.getByText(/Concluídas/i)).toHaveTextContent('888');
  });
});
