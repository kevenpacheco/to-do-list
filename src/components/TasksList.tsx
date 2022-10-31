import styles from "./styles/TasksList.module.css";
import { Task, TaskType } from "./Task";

interface TasksListProps {
  tasks: TaskType[];
  onTaskDelete: (taskId: string) => void;
  onTaskCompletionAlternation: (taskId: string) => void;
}

export function TasksList({ tasks, onTaskDelete, onTaskCompletionAlternation }: TasksListProps) {
  return (
    <div className={styles.tasksList}>
      {tasks.map((task) => (
        <Task key={task.id} onDelete={onTaskDelete} onCompletionAlternation={onTaskCompletionAlternation} {...task} />
      ))}
    </div>
  );
}
