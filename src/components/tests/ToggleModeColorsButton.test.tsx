import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeContext } from "../../context/theme.context";
import { ToggleModeColorsButton } from "../ToggleModeColorsButton";

describe("<ToggleModeColorsButton />", () => {
  it("should render ToggleModeColorsButton", () => {
    render(
      <ThemeContext.Provider value={{theme: 'dark', toggleTheme: () => {}}}>
        <ToggleModeColorsButton />
      </ThemeContext.Provider>
    );

    const sut = screen.getByRole("button");

    expect(sut).toBeInTheDocument();
  });

  it("should render ToggleModeColorsButton with sun icon", () => {
    render(
      <ThemeContext.Provider value={{theme: 'dark', toggleTheme: () => {}}}>
        <ToggleModeColorsButton />
      </ThemeContext.Provider>
    );

    const sut = screen.getByRole("button");

    expect(sut).toContainElement(screen.getByTestId('sun'));
  });

  it("should render ToggleModeColorsButton with moon icon", () => {
    render(
      <ThemeContext.Provider value={{theme: 'light', toggleTheme: () => {}}}>
        <ToggleModeColorsButton />
      </ThemeContext.Provider>
    );

    const sut = screen.getByRole("button");

    expect(sut).toContainElement(screen.getByTestId('moon'));
  });
});
