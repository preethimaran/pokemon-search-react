import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonDescription from "../PokemonDescription/PokemonDescription";
import "./PokemonArea.css";

export default function PokemonArea() {
	return (
		<div className="PokemonArea">
			<PokemonCard />
			<PokemonDescription />
		</div>
	);
}
