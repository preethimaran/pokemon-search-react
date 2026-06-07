import { useState, useEffect, createContext, useContext } from "react";

const CardContext = createContext();

export const useCardContext = () => useContext(CardContext);

export function CardContextProvider({ children }) {
	const [isFront, setIsFront] = useState(true);

	const turnCard = () => {
		setIsFront((oldValue) => !oldValue);
	};

	return <CardContext value={{ isFront, turnCard }}>{children}</CardContext>;
}
