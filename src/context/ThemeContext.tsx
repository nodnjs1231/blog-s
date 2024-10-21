import { ReactNode, createContext, useState } from "react";

interface ThemeProps {
    children: ReactNode;
}

export const ThemeContext = createContext({
    theme: "light",
    toggleMode: () => {},
});

export const ThemeContextProvider = ({ children }: ThemeProps) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");

    const toggleMode = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light");
        localStorage.setItem('theme', theme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleMode}}>
            {children}
        </ThemeContext.Provider>
    )
}