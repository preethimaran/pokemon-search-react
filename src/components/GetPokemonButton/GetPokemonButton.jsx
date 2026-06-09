import { usePokemon } from "../../context/PokemonContextProvider";
import { BookSearch } from "lucide-react";

import "./GetPokemonButton.css";
export default function GetPokemonButton() {
	const { getUrl } = usePokemon();
	return (
		<button className="GetPokemonButton pixelify-sans-light" onClick={getUrl}>
			<BookSearch /> <h3>Surprise Me!</h3>
		</button>
	);
}
