import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./styles/Task.module.css";

export interface TaskType {
  id: string;
  content: string;
  hasCompleted: boolean;
}

interface TaskProps extends TaskType {
  onDelete: (taskId: string) => void;
  onCompletionAlternation: (taskId: string) => void;
}

export function Task({
  id,
  content,
  hasCompleted,
  onDelete,
  onCompletionAlternation,
}: TaskProps) {
  function handleTaskDelete() {
    onDelete(id);
  }

  function handleTaskCompletionAlternation() {
    onCompletionAlternation(id);
  }

  return (
    <div
      className={hasCompleted ? styles.completeTask : styles.incompleteTask}
      data-testid="task"
    >
      <button
        type="button"
        className={styles.toggleButton}
        onClick={handleTaskCompletionAlternation}
        title="Alternate status button"
      >
        {hasCompleted ? (
          <CheckCircle weight="duotone" size="1.125rem" />
        ) : (
          <Circle weight="duotone" size="1.125rem" />
        )}
      </button>

      <p>{content}</p>

      <button onClick={handleTaskDelete} className={styles.deleteButton} title="Delete button">
        <Trash weight="bold" />
      </button>
    </div>
  );
}
