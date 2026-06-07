export const capitalise = (word) => {
	return word
		.split("")
		.map((letter, idx) => {
			if (idx === 0) {
				return letter.toUpperCase();
			}
			return letter;
		})
		.join("");
};

export function cleanTextFromApi(text) {
	return (text || "")
		.replace(/\f/g, " ")
		.replace(/\n/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}
