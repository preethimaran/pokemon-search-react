import { Search } from "lucide-react";
import "./SearchBar.css";
import { useState, useEffect } from "react";
import { usePokemon } from "../../context/PokemonContextProvider";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export default function SearchBar() {
	const [recs, loadRecs] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [showDropdown, setShowDropdown] = useState(true);
	const { getUrl } = usePokemon();

	const myRecs = async () => {
		if (localStorage.getItem("searchRecs") === null) {
			const results = await fetch(`${BASE_URL}?limit=1025`);
			const resultsJson = await results.json();
			const data = resultsJson.results;
			loadRecs(() => {
				const ans = data.map((item) => {
					return {
						name: item.name,
						id: item.url.split("/").filter(Boolean).pop(),
					};
				});

				ans.sort((a, b) => a.name.localeCompare(b.name));
				localStorage.setItem("searchRecs", JSON.stringify(ans));
				return ans;
			});
		} else {
			loadRecs(JSON.parse(localStorage.getItem("searchRecs")));
		}
	};

	useEffect(() => {
		myRecs();
	}, []);

	useEffect(() => {
		const trimmedSearchTerm = searchTerm.trim();
		const term = trimmedSearchTerm.toLowerCase();
		if (term !== "" && showDropdown) {
			if (!/^\d/.test(term))
				setSearchResults(
					recs.filter((item) => item.name.startsWith(term)).slice(0, 5),
				);
		} else {
			setSearchResults([]);
		}
	}, [searchTerm, recs]);

	return (
		<div id="search-container">
			<div id="search-row">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setSearchTerm("");
						setSearchResults([]);
						getUrl(searchTerm);
					}}
					id="search-form"
				>
					<input
						id="pokesearch"
						className="search-field"
						type="text"
						value={searchTerm}
						onChange={(e) => {
							setShowDropdown(true);
							setSearchTerm("");
							setSearchTerm(e.target.value);
						}}
						placeholder="Enter name or id"
					/>
				</form>

				<div
					className="search-icon"
					onClick={() => {
						setSearchResults([]);
						setSearchTerm("");
						getUrl(searchTerm);
					}}
				>
					<Search />
				</div>
			</div>
			{searchResults.length > 0 && (
				<ul className="search-dropdown">
					{searchResults.map((pokemon) => (
						<li
							key={pokemon.id}
							onClick={() => {
								setShowDropdown(false);
								// setSearchTerm(pokemon.name);
								setSearchTerm("");
								setSearchResults([]); // close dropdown
								// navigate to that pokemon's page here if you want
								getUrl(searchTerm);
								//state updates are async so use pokemon name directly
								getUrl(pokemon.name);
							}}
							style={{
								textAlign: "left",
							}}
						>
							{pokemon.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
