import { ThemeContextProvider } from "./context/ThemeContextProvider";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import GetPokemonButton from "./components/GetPokemonButton/GetPokemonButton";
import { PokemonContextProvider } from "./context/PokemonContextProvider";
import Navbar from "./components/Navbar/Navbar";
import PokemonArea from "./components/PokemonArea/PokemonArea";
import { CardContextProvider } from "./context/CardContextProvider";

function App() {
	return (
		<>
			<PokemonContextProvider>
				<ThemeContextProvider>
					<Navbar />
					<CardContextProvider>
						<PokemonArea />
					</CardContextProvider>
				</ThemeContextProvider>
			</PokemonContextProvider>
		</>
	);
}

export default App;
