import styles from './styles/Header.module.css';
import logo from '../assets/images/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo To Do app" />
    </header>
  )
}
