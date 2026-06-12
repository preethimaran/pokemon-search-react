import pokeball from "../../assets/pokeball.png";
export default function WebsiteLogo() {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<p className="text-violet-600">PokeDex</p>
			<img src={pokeball} style={{ height: "55px", width: "auto" }} />
		</div>
	);
}
