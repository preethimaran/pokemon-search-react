import { usePokemon } from "../../context/PokemonContextProvider";
import { cleanTextFromApi, capitalise } from "../../utils/StringFunctions";
import "./PokemonDescription.css";
import Tag from "../Tag/Tag";
import GenderIcon from "../GenderIcon/GenderIcon";
import { v4 as uuid } from "uuid";
import { Ruler, WeightTilde, Users } from "lucide-react";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function PokemonDescription() {
	const { details, pokemon } = usePokemon();
	const name = details.name || "";
	const capitalisedName = capitalise(name);
	const description =
		details?.flavor_text_entries?.find((item) => item?.language?.name === "en")
			?.flavor_text || "No Description Found";
	const cleaned_description = cleanTextFromApi(description);
	const abilities =
		pokemon?.abilities?.map((item) => {
			return { hidden: item?.is_hidden, ability: item?.ability?.name };
		}) || [];

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

	const types =
		pokemon?.types
			?.map((value) => value?.type?.name)
			.map((value) => (
				<Tag text={value} fgColor={"white"} bgColor={"#7C3AED"} />
			)) || [];

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
						gap: "1px",
					}}
				>
					<p className="text-4xl font-bold" style={{ marginBottom: "12px" }}>
						{capitalisedName}
					</p>
					<div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
						{types}
					</div>
				</div>
			</div>
			<p style={{ color: "var(--text-l)", marginBottom: "16px" }}>
				{cleaned_description}
			</p>
			<div
				className="content"
				// style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
			>
				<div className="Abilities">
					<p className="text-2xl">Abilities</p>
					<div
						className="mt-3"
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "12px",
						}}
					>
						{abilities.map((i, idx) => (
							<div
								key={uuid()}
								style={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
								}}
							>
								{
									<Tag
										text={i.ability}
										fgColor={"black"}
										bgColor={"#EDE9FE"}
										hidden={i.hidden ? true : false}
									/>
								}
							</div>
						))}
					</div>
				</div>

				<div className="BasicInfo">
					<p className="text-2xl">Basic Information</p>
					<div
						className="mt-3"
						style={{
							display: "grid",
							gridTemplateColumns: "0.5fr 0.5fr",
							rowGap: "10px",
						}}
					>
						<div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
							<Ruler />
							<p>Height</p>
						</div>
						<p className="value">{`${pokemon.height ? pokemon.height / 10 : 0} m`}</p>
						<div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
							<WeightTilde />
							<p>Weight</p>
						</div>
						<p className="value">{`${pokemon.weight ? pokemon.weight / 10 : 0} kg`}</p>
						<div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
							<Users />
							<p>Gender</p>
						</div>
						<div style={{ display: "flex", flexDirection: "row-reverse" }}>
							{<GenderIcon gender={gender} />}
						</div>
					</div>
				</div>

				<div className="BasicInfo" style={{ gridColumn: "1 / -1" }}>
					<p className="text-2xl">Stats</p>
					<div
						className="mt-3"
						style={{
							display: "grid",
							gridTemplateColumns: "0.25fr 0.85fr 0.15fr",
							rowGap: "8px",
						}}
					>
						{/* <p className="headings">Base Experience</p>
						<p className="value">{pokemon?.base_experience}</p> */}
						<p className="headings">HP</p>
						<div>
							<ProgressBar num={hp} max={255} />
						</div>
						<p className="value">{hp}</p>
						<p className="headings">Attack</p>
						<div>
							<ProgressBar num={attack} max={190} />
						</div>
						<p className="value">{attack}</p>
						<p className="headings">Defence</p>
						<div>
							<ProgressBar num={defense} max={230} />
						</div>
						<p className="value">{defense}</p>
						<p className="headings">Spl Attack</p>
						<div>
							<ProgressBar num={specialAttack} max={194} />
						</div>
						<p className="value">{specialAttack}</p>
						<p className="headings">Spl Defence</p>
						<div>
							<ProgressBar num={specialDefense} max={230} />
						</div>
						<p className="value">{specialDefense}</p>
						<p className="headings">Speed</p>
						<div>
							<ProgressBar num={speed} max={200} />
						</div>
						<p className="value">{speed}</p>
					</div>
				</div>
			</div>
		</div>
		// <div>{JSON.stringify(pokemon)}</div>
	);
}
