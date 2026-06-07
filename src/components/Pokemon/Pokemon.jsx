// import "./Pokemon.css";
import { useCardContext } from "../../context/CardContextProvider";
import { usePokemon } from "../../context/PokemonContextProvider";

export default function Pokemon() {
	const { pokemon, getUrl } = usePokemon();
	const { isFront } = useCardContext();
	const img_url = pokemon?.sprites?.front_default;
	const styles = {
		display: "block",
		margin: "auto",
		marginBottom: "20px",
	};

	return (
		<div className="pixelify-sans-dark">
			<h2 style={styles}>{pokemon.name}</h2>
			{img_url && <img src={img_url} style={styles} />}
		</div>
	);
}
