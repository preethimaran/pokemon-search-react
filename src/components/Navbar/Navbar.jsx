import GetPokemonButton from "../GetPokemonButton/GetPokemonButton";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";
import "./Navbar.css";

export default function Navbar() {
	return (
		<div className="Navbar">
			<ThemeToggler />
			<GetPokemonButton />
			<WebsiteLogo />
		</div>
	);
}
