import styles from "./assets/styles/App.module.css";

import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { EmptyList } from "./components/EmptyList";
import { Progress } from "./components/Progress";
import { TasksList } from "./components/TasksList";
import { useEffect, useState } from "react";
import { TaskType } from "./components/Task";
import { Loading } from "./components/Loading";
import { ToggleModeColorsButton } from "./components/ToggleModeColorsButton";
import { ThemeProvider } from "./context/theme.context";

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function getCompletedTasks() {
    return tasks.filter(({ hasCompleted }) => {
      return hasCompleted;
    }).length;
  }

  function handleCreateTask(newTask: TaskType) {
    setTasks((oldState) => [...oldState, newTask]);
  }

  function handleTaskDelete(taskId: string) {
    setTasks((oldState) => oldState.filter(({ id }) => id !== taskId));
  }

  function handleTaskCompletionAlternation(taskId: string) {
    setTasks((oldState) =>
      oldState.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            hasCompleted: !task.hasCompleted,
          };
        }
        return task;
      })
    );
  }

  useEffect(() => {
    const timeDelay = 1000 * 5;
    const delay = setTimeout(() => setIsLoading(false), timeDelay);

    return () => clearTimeout(delay);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />

          <div className={styles.container}>
            <CreateTask onCreate={handleCreateTask} />

            <Progress
              completedTasks={getCompletedTasks()}
              createdTasks={tasks.length}
            />

            {tasks.length ? (
              <TasksList
                tasks={tasks}
                onTaskDelete={handleTaskDelete}
                onTaskCompletionAlternation={handleTaskCompletionAlternation}
              />
            ) : (
              <EmptyList />
            )}
          </div>

          <ToggleModeColorsButton />
        </>
      )}
    </ThemeProvider>
  );
}
