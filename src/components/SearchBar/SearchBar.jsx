import { Search } from "lucide-react";
import "./SearchBar.css";

export default function SearchBar() {
	return (
		<div className="search-container">
			<div className="text-xs">
				<input id="pokesearch" className="search-field" type="text"></input>
			</div>

			<div className="search-icon">
				<Search />
			</div>
		</div>
	);
}
