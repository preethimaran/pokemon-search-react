// import "./Pokemon.css";
import { useCardContext } from "../../context/CardContextProvider";
import { usePokemon } from "../../context/PokemonContextProvider";

export default function CardBack() {
	const { pokemon, getUrl } = usePokemon();
	const { isFront } = useCardContext();
	const img_url =
		pokemon.sprites?.other?.["official-artwork"]?.front_default ||
		pokemon?.sprites?.front_default;
	const styles = {
		display: "block",
		objectFit: "contain",
	};
	const num = pokemon?.id;

	return (
		<div
			className="pixelify-sans-dark"
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				gap: "30px",
			}}
		>
			<h2>{`#${num}`}</h2>
			{img_url && <img src={img_url} style={styles} />}
		</div>
	);
}
