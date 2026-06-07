import { useTheme } from "../../context/ThemeContextProvider";
import { Sun, Moon } from "lucide-react";
import "./ThemeToggler.css";

export default function ThemeToggler() {
	const { theme, changeTheme } = useTheme();
	return (
		<button
			className="ThemeToggler pixelify-sans-light "
			onClick={changeTheme}
			aria-label={
				theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
			}
		>
			{theme === "light" ? <Moon /> : <Sun />}{" "}
			{theme === "light" ? <h4>Dark Mode</h4> : <h4>Light Mode</h4>}
		</button>
	);
}
