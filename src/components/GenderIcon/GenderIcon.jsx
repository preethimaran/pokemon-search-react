import { Mars, Venus } from "lucide-react";

export default function GenderIcon({ gender }) {
	return (
		<span>
			{gender === "b" ? (
				<>
					<Venus />
					<Mars />
				</>
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
