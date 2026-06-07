import { useContext, useState, createContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
	return useContext(ThemeContext);
};

export function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState("light");

	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);
	return <ThemeContext value={{ theme, changeTheme }}>{children}</ThemeContext>;
}
