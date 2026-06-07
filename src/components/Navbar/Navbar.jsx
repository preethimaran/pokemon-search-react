import GetPokemonButton from "../GetPokemonButton/GetPokemonButton";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import "./Navbar.css";

export default function Navbar() {
	return (
		<div className="Navbar">
			<ThemeToggler />
			<GetPokemonButton />
			<div className="pixelify-sans-light">Pokemon</div>
		</div>
	);
}
