import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextData {
  //currentTheme: string;
  theme: string;
}

interface ThemeProviderProps {
  children: ReactNode;
  theme: string;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  // const [currentTheme, setCurrentTheme] = useState(theme);

  // useEffect(() => {
  //   setCurrentTheme(theme);
  // }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
