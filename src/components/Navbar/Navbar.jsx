import GetPokemonButton from "../GetPokemonButton/GetPokemonButton";
import SearchBar from "../SearchBar/SearchBar";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";
import "./Navbar.css";

export default function Navbar() {
	return (
		<div className="Navbar">
			<WebsiteLogo />
			<SearchBar />
			<GetPokemonButton />
			<ThemeToggler />
		</div>
	);
}
