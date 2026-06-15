import { useTheme } from "../../context/ThemeContextProvider";
import { usePokemon } from "../../context/PokemonContextProvider";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonDescription from "../PokemonDescription/PokemonDescription";
import "./PokemonArea.css";
import Alert from "@mui/material/Alert";

export default function PokemonArea() {
	const { error, setErrorToNull } = usePokemon();
	const { theme } = useTheme();
	return (
		<div className="PokemonArea">
			{error !== "" && (
				<div className="Alert">
					<Alert
						sx={{ borderRadius: "15px", color: "#d32f2f" }}
						variant="outlined"
						severity="error"
						onClose={setErrorToNull}
					>
						{error}
					</Alert>
				</div>
			)}

			<PokemonCard />
			<PokemonDescription />
		</div>
	);
}
