import styles from "./styles/EmptyList.module.css";
import clipboardSVG from "../assets/images/clipboard.svg";

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <img src={clipboardSVG} alt="Ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
