import { ChangeEvent, useState } from "react";
import uuid from "react-uuid";
import { PlusCircle } from "phosphor-react";
import styles from "./styles/CreateTask.module.css";
import { TaskType } from "./Task";

interface CreateTaskProps {
  onCreate: (newTask: TaskType) => void;
}

export function CreateTask({ onCreate }: CreateTaskProps) {
  const [taskDescription, setTaskDescription] = useState("");

  function handleTaskDescriptionChange({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setTaskDescription(value);
  }

  function handleCreateTask() {
    const newTask: TaskType = {
      id: uuid(),
      content: taskDescription,
      hasCompleted: false,
    };

    onCreate(newTask);
    setTaskDescription("");
  }

  return (
    <div className={styles.createTask}>
      <input
        type="text"
        value={taskDescription}
        placeholder="Adicione uma nova tarefa"
        onChange={handleTaskDescriptionChange}
      />
      <button type="button" onClick={handleCreateTask} disabled={taskDescription.length === 0}>
        Criar <PlusCircle weight="bold" />
      </button>
    </div>
  );
}
