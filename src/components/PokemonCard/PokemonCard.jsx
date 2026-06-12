import "./PokemonCard.css";
import { usePokemon } from "../../context/PokemonContextProvider";
import Pokemon from "../Pokemon/Pokemon";
import PokemonStatsFront from "../PokemonStatsFront.jsx/PokemonStatsFront";
import { useCardContext } from "../../context/CardContextProvider";
import CardBack from "../CardBack/CardBack";

export default function PokemonCard() {
	const { details } = usePokemon();
	const color = details?.color?.name;
	const { isFront, turnCard } = useCardContext();

	return (
		<div className={`card-wrapper ${!isFront ? "flipped" : ""}`}>
			<div
				className={`PokemonCard ${!isFront ? "flipped" : ""}`}
				onClick={turnCard}
			>
				<div className="card-front">
					<Pokemon />
					<PokemonStatsFront />
				</div>

				<div className="card-back">
					<CardBack />
				</div>
			</div>
		</div>
	);
}
