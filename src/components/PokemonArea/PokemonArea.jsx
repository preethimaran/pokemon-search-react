import { useCardContext } from "../../context/CardContextProvider";
import { usePokemon } from "../../context/PokemonContextProvider";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonDescription from "../PokemonDescription/PokemonDescription";
import PokemonStatsFront from "../PokemonStatsFront.jsx/PokemonStatsFront";
import "./PokemonArea.css";

export default function PokemonArea({ children }) {
	const { isFront } = useCardContext();
	return (
		<div className="PokemonArea">
			<PokemonCard />
			<PokemonDescription />
		</div>
	);
}
