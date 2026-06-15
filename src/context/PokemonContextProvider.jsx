import { useState, useEffect, useContext, createContext } from "react";
import { RandomNumber } from "../utils/RandomFunctions";

const PokemonContext = createContext();
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const BASE_DETAILS = "https://pokeapi.co/api/v2/pokemon-species/";

export function usePokemon() {
	return useContext(PokemonContext);
}

export function PokemonContextProvider({ children }) {
	const [pokemon, setPokemon] = useState({});
	const [details, setDetails] = useState({});
	const [error, setError] = useState("");

	async function getUrl(nameId) {
		const id = nameId ? nameId : RandomNumber(1025);

		const url = `${BASE_URL}${id}/`;
		const url2 = `${BASE_DETAILS}${id}/`;

		const response = await fetch(url);
		if (response.status === 404) {
			setError("Sorry unable to find a Pokemon with the entered Name or ID");
			return;
		}

		if (!response.ok) {
			setError("Something went wrong!");
			return;
		}
		setError("");
		const responseJson = await response.json();
		setPokemon(responseJson);

		const response2 = await fetch(url2);
		const responseJson2 = await response2.json();
		setDetails(responseJson2);
	}

	const setErrorToNull = () => {
		setError("");
	};

	useEffect(() => {
		getUrl();
	}, []);

	return (
		<PokemonContext value={{ pokemon, getUrl, details, error, setErrorToNull }}>
			{children}
		</PokemonContext>
	);
}
