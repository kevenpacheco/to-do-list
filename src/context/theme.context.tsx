import { createContext, ReactNode, useEffect, useState } from "react";

type ModeType = "dark" | "light";

export interface ThemeContextType {
  theme: ModeType;
  toggleTheme: () => void;
}

interface ThemeContextProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState<ModeType>("dark");

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("@theme", newTheme);
  }

  useEffect(() => {
    const saveTheme = localStorage.getItem("@theme");
    if (saveTheme === "light" || saveTheme === "dark") {
      setTheme(saveTheme);
    }
  }, []);

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    bodyElement?.setAttribute("data-theme", theme);
  }, [theme]);

  const valueProvider = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={valueProvider}>
      {children}
    </ThemeContext.Provider>
  );
}
