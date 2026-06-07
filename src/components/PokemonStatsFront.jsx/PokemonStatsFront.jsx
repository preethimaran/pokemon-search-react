import { usePokemon } from "../../context/PokemonContextProvider";
import "./PokemonStatsFront.css";

export default function PokemonStatsFront() {
	const { pokemon } = usePokemon();
	const hp =
		pokemon?.stats?.find((item) => item.stat?.name === "hp")?.base_stat || "-";
	const attack =
		pokemon?.stats?.find((item) => item?.stat?.name === "attack")?.base_stat ||
		"-";
	const defense =
		pokemon?.stats?.find((item) => item?.stat?.name === "defense")?.base_stat ||
		"-";
	const speed =
		pokemon?.stats?.find((item) => item?.stat?.name === "speed")?.base_stat ||
		"-";

	const specialAttack =
		pokemon?.stats?.find((item) => item?.stat?.name === "special-attack")
			?.base_stat || "-";
	const specialDefense =
		pokemon?.stats?.find((item) => item?.stat?.name === "special-defense")
			?.base_stat || "-";

	return (
		<div className="pixelify-sans-light stats-column-front">
			<p className="headings">Base Experience</p>
			<p className="value">{pokemon?.base_experience}</p>
			<p className="headings">Height</p>
			<p className="value">{pokemon?.height}</p>
			<p className="headings">Weight</p>
			<p className="value">{pokemon?.weight}</p>
			<p className="headings">HP</p>
			<p className="value">{hp}</p>
			<p className="headings">Attack</p>
			<p className="value">{attack}</p>
			<p className="headings">Defence</p>
			<p className="value">{defense}</p>
			<p className="headings">Spl Attack</p>
			<p className="value">{specialAttack}</p>
			<p className="headings">Spl Defence</p>
			<p className="value">{specialDefense}</p>
			<p className="headings">Speed</p>
			<p className="value">{speed}</p>
		</div>
	);
}
