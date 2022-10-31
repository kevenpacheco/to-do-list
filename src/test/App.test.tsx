import { describe, it, vi } from "vitest";
import {
  act,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { App } from "../App";

describe("App", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should init render with loading component", () => {
    render(<App />);

    const sut = screen.getByTestId("loading");

    expect(sut).toBeInTheDocument();
  });

  it("should render app without tasks before five seconds", () => {
    render(<App />);

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    const sut = screen.getByText("Você ainda não tem tarefas cadastradas");

    expect(sut).toBeInTheDocument();
  });

  it("should create multiples tasks", () => {
    render(<App />);

    act(() => {
      vi.advanceTimersToNextTimer();
    });

    const fakeTextTask = "new fake task has create";
    fireEvent.change(screen.getByPlaceholderText("Adicione uma nova tarefa"), {
      target: { value: fakeTextTask },
    });
    fireEvent.click(screen.getByRole("button", { name: /criar/i }));

    expect(screen.getByText(fakeTextTask)).toBeInTheDocument();
  });

  it("should delete a created task", () => {
    render(<App />);

    act(() => {
      vi.advanceTimersToNextTimer();
    });

    const fakeTextTask = "new fake task has create";
    fireEvent.change(screen.getByPlaceholderText("Adicione uma nova tarefa"), {
      target: { value: fakeTextTask },
    });
    fireEvent.click(screen.getByRole("button", { name: /criar/i }));

    expect(screen.getByText(fakeTextTask)).toBeInTheDocument();

    fireEvent.click(screen.getAllByTitle("Delete button")[0]);

    expect(screen.queryByText(fakeTextTask)).not.toBeInTheDocument();
  });

  it("should render created tasks counter", async () => {
    render(<App />);

    act(() => {
      vi.advanceTimersToNextTimer();
    });

    const fakeTextTask = "new fake task has create";
    const sut = screen.getByText(/Tarefas criadas/i);

    expect(sut).toHaveTextContent("0");

    fireEvent.change(screen.getByPlaceholderText("Adicione uma nova tarefa"), {
      target: { value: fakeTextTask },
    });
    fireEvent.click(screen.getByRole("button", { name: /criar/i }));

    expect(sut).toHaveTextContent("1");
  });

  it("should render completed tasks counter", async () => {
    render(<App />);

    act(() => {
      vi.advanceTimersToNextTimer();
    });

    fireEvent.change(screen.getByPlaceholderText("Adicione uma nova tarefa"), {
      target: { value: "new fake task 1 has create" },
    });
    fireEvent.click(screen.getByRole("button", { name: /criar/i }));
    fireEvent.change(screen.getByPlaceholderText("Adicione uma nova tarefa"), {
      target: { value: "new fake task 2 has create" },
    });
    fireEvent.click(screen.getByRole("button", { name: /criar/i }));

    const sut = screen.getByText(/concluídas/i);

    expect(sut).toHaveTextContent("0");

    fireEvent.click(screen.getAllByTitle("Alternate status button")[0]);

    expect(sut).toHaveTextContent("1");
  });
});
