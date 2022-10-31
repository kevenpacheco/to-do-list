import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Task } from "../Task";

describe("<Task />", () => {
  const fakeContentTask = "fake content task";

  it("should render incompleted Task", () => {
    render(
      <Task
        id="fake-id"
        hasCompleted={false}
        content={fakeContentTask}
        onCompletionAlternation={() => {}}
        onDelete={() => {}}
      />
    );

    const sut = screen.getByTestId("task")

    expect(sut).toHaveTextContent(fakeContentTask);
    expect(sut).toHaveClass("incompleteTask");
  });

  it("should render completed Task", () => {
    render(
      <Task
        id="fake-id"
        hasCompleted={true}
        content={fakeContentTask}
        onCompletionAlternation={() => {}}
        onDelete={() => {}}
      />
    );

    const sut = screen.getByTestId("task")

    expect(sut).toHaveClass("completeTask");
  });

  it("should called onCompletionAlternation function prop", async () => {
    const user = userEvent.setup();
    const handleAlternationStatus = vi.fn();

    const fakeId = 'fake-id'

    render(
      <Task
        id={fakeId}
        hasCompleted={true}
        content={fakeContentTask}
        onCompletionAlternation={handleAlternationStatus}
        onDelete={() => {}}
      />
    );

    await user.click(screen.getByTitle(/alternate status button/i));

    expect(handleAlternationStatus).toBeCalledWith(fakeId);
  });

  it("should called onDelete function prop", async () => {
    const user = userEvent.setup();
    const handleDelete = vi.fn();

    const fakeId = 'fake-id'

    render(
      <Task
        id={fakeId}
        hasCompleted={true}
        content={fakeContentTask}
        onCompletionAlternation={() => {}}
        onDelete={handleDelete}
      />
    );

    await user.click(screen.getByTitle(/delete button/i));

    expect(handleDelete).toBeCalledWith(fakeId);
  });
});
