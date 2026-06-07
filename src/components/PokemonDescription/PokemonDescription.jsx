import { usePokemon } from "../../context/PokemonContextProvider";
import { cleanTextFromApi, capitalise } from "../../utils/StringFunctions";
import "./PokemonDescription.css";
import Tag from "../Tag/Tag";
import GenderIcon from "../GenderIcon/GenderIcon";

export default function PokemonDescription() {
	const { details, pokemon } = usePokemon();
	const name = details.name;
	// const capitalisedName = capitalise(name);
	const description =
		details?.flavor_text_entries.find((item) => item?.language?.name === "en")
			?.flavor_text || "No Description Found";
	const cleaned_description = cleanTextFromApi(description);
	const abilities = pokemon?.abilities?.map((item) => {
		return { hidden: item?.is_hidden, ability: item?.ability?.name };
	});

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

	const types = pokemon?.types
		?.map((value) => value?.type?.name)
		.map((value) => <Tag text={value} />);

	const determineGender = (num) => {
		if (num == "-1") return "g";
		else if (num == "0") return "m";
		else if (num == "8") return "f";
		else return "b";
	};

	const gender = determineGender(details.gender_rate);

	return (
		<div className="PokemonDescription">
			<div className="Header">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "flex-start",
					}}
				>
					<h1 style={{ marginBottom: "12px" }}>{name}</h1>
					<h2>{types}</h2>
				</div>
				<h2>{cleaned_description}</h2>
			</div>
			<div className="Abilities">
				<h2>Abilities</h2>
				{abilities.map((i, idx) => (
					<p key={idx}>
						{`${i.ability}`} {i.hidden && <Tag text="hidden" />}
					</p>
				))}
			</div>

			<div className="BasicInfo">
				<h2>Basic Information</h2>
				<div style={{ display: "grid", gridTemplateColumns: "0.25fr 0.75fr" }}>
					<p>Height:</p>
					<p>{pokemon.height}</p>
					<p>Weight:</p>
					<p>{pokemon.weight}</p>
					<p> Gender:</p>
					<p style={{ display: "flex", alignItems: "center" }}>
						{<GenderIcon gender={gender} />}
					</p>
				</div>
			</div>

			<div className="BasicInfo">
				<h2>Stats</h2>
				<div style={{ display: "grid", gridTemplateColumns: "0.25fr 0.75fr" }}>
					<p className="headings">Base Experience</p>
					<p className="value">{pokemon?.base_experience}</p>
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
			</div>
		</div>
	);
}
