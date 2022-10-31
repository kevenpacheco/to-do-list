import styles from "./styles/Progress.module.css";

interface ProgressProps {
  createdTasks: number;
  completedTasks: number;
}

export function Progress({ completedTasks, createdTasks }: ProgressProps) {
  return (
    <div className={styles.progress}>
      <p>
        Tarefas criadas <span>{createdTasks}</span>
      </p>
      <p>
        Concluídas <span>{completedTasks}</span>
      </p>
    </div>
  );
}
