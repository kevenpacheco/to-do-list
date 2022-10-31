import { Moon, Sun } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/theme.context";
import styles from "./styles/ToggleModeColorsButton.module.css";

export function ToggleModeColorsButton() {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <button
      className={styles.toggleModeColorsButton}
      onClick={toggleTheme}
      data-testid="switch-theme-button"
    >
      {theme === 'dark' ? (
        <Sun size={32} weight="bold" data-testid="sun" />
      ) : (
        <Moon size={32} weight="fill" data-testid="moon" />
      )}
    </button>
  );
}
