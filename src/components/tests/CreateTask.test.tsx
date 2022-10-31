import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreateTask } from "../CreateTask";

vi.mock("react-uuid", () => ({
  default() {
    return "fake-id";
  },
}));

describe("<CreateTask />", () => {
  it("should create a new task", async () => {
    const user = userEvent.setup();
    const handleCreateTaskSpy = vi.fn();
    render(<CreateTask onCreate={handleCreateTaskSpy} />);

    const fakeTaskDescription = "Novo post"
    await user.type(screen.getByRole("textbox"), fakeTaskDescription);
    await user.click(screen.getByRole("button", { name: /criar/i }));

    expect(handleCreateTaskSpy).toBeCalledWith({
      id: "fake-id",
      content: fakeTaskDescription,
      hasCompleted: false,
    });
  
    expect(screen.getByRole("textbox")).toBeEmptyDOMElement();
  });

  it("should enable create button when write a new task text", async () => {
    render(<CreateTask onCreate={() => {}} />);

    const sut = screen.getByRole("button", { name: /criar/i });

    expect(sut).toBeDisabled();
  });
});
