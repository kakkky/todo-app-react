import React, { useState, type ReactNode } from "react";
import { ThemeContext } from "./context";
import type { ThemeConfig } from "./type";

type ThemeProviderProps = {
	children: ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
	const [mode, setMode] = useState<"light" | "dark">("light");
	const themeConfig: ThemeConfig = {
		mode: mode,
		toggleMode: () => {
			setMode((prev) => (prev === "light" ? "dark" : "light"));
		},
	};
	return (
		<>
			<ThemeContext.Provider value={themeConfig}>
				{children}
			</ThemeContext.Provider>
		</>
	);
}

export default ThemeProvider;
