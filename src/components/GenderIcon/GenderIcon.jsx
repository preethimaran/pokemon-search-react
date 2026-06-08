import { Mars, Venus } from "lucide-react";

export default function GenderIcon({ gender }) {
	return (
		<span>
			{gender === "b" ? (
				<div style={{ display: "flex", flexDirection: "row" }}>
					<Venus />
					<Mars />
				</div>
			) : gender === "f" ? (
				<Venus />
			) : gender === "g" ? (
				" Genderless"
			) : (
				<Mars />
			)}
		</span>
	);
}
