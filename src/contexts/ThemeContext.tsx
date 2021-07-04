import { createContext, ReactNode } from "react";

interface ThemeContextData {
  theme: string;
}

interface ThemeProviderProps {
  children: ReactNode;
  theme: string;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
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
