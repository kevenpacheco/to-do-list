import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import { ThemeContext, ThemeProvider } from "../context/theme.context";

describe("Theme context", () => {
  it("should render the theme with dark mode by default", () => {
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => <span>Theme received: {value?.theme}</span>}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const sut = screen.getByText(/^theme received:/i);

    expect(sut.textContent).toBe("Theme received: dark");
  });

  it("should render the theme with mode saved in localStorage", () => {
    localStorage.setItem("@theme", 'light');

    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => <span>Theme received: {value?.theme}</span>}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const sut = screen.getByText(/^theme received:/i);

    expect(sut.textContent).toBe("Theme received: light");

    window.localStorage.clear();
  });

  it("should switch the theme between dark and light mode", async () => {
    const user = userEvents.setup();

    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(values) => (
            <button type="button" onClick={values?.toggleTheme}>
              {values?.theme}
            </button>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const sut = screen.getByRole('button');
    
    expect(sut).toHaveTextContent("dark");
    
    await user.click(sut);
    
    expect(sut).toHaveTextContent("light");
    
    await user.click(sut);
    
    expect(sut).toHaveTextContent("dark");
  });
});
