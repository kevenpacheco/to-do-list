import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TasksList } from "../TasksList";

describe("<TasksList />", () => {
  const fakeTasksList = [
    {
      id: "fake-task-1",
      content: "fake task content 1",
      hasCompleted: false,
    },
    {
      id: "fake-task-2",
      content: "fake task content 2",
      hasCompleted: true,
    },
    {
      id: "fake-task-3",
      content: "fake task content 3",
      hasCompleted: false,
    },
  ];

  it("should render TasksList", () => {
    render(
      <TasksList
        tasks={fakeTasksList}
        onTaskCompletionAlternation={() => {}}
        onTaskDelete={() => {}}
      />
    );

    expect(screen.getByText("fake task content 1")).toBeInTheDocument()
    expect(screen.getByText("fake task content 2")).toBeInTheDocument()
    expect(screen.getByText("fake task content 3")).toBeInTheDocument()
  });
});
