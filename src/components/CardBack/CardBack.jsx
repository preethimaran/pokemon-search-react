// import "./Pokemon.css";
import { useCardContext } from "../../context/CardContextProvider";
import { usePokemon } from "../../context/PokemonContextProvider";
import Tag from "../Tag/Tag";

export default function CardBack() {
	const { pokemon, details, getUrl } = usePokemon();
	const { isFront } = useCardContext();
	const img_url =
		pokemon.sprites?.other?.["official-artwork"]?.front_default ||
		pokemon?.sprites?.front_default;
	const styles = {
		width: "auto",
		height: "100%",
		objectFit: "contain",
	};

	const digit = (i) => {
		if (!i) {
			return "";
		} else {
			if (i.length === 1) return `000${i}`;
			else if (i.length === 2) return `00${i}`;
			else if (i.length === 3) return `0${i}`;
			else return i;
		}
	};
	const num = pokemon?.id;
	const ex_num = digit(String(num));
	const color = details?.color?.name;
	const gradient =
		"bg-gradient-to-br from-violet-300 via-pink-300 to-violet-300";

	return (
		<div
			className={`${gradient}`}
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				borderRadius: "25px",
				padding: "25px",
			}}
		>
			<h2 style={{ alignSelf: "flex-start" }}>
				{<Tag text={`#${ex_num}`} fgColor="white" bgColor="#7C3AED" />}
			</h2>
			{img_url && <img src={img_url} style={styles} />}
		</div>
	);
}
