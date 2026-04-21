"use client";

import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";

interface ThemeContextValue {
  theme: "frost";
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "frost",
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "frost");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "frost" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
