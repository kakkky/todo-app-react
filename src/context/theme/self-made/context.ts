import { createContext } from "react";
import type { ThemeConfig } from "./type";

export const ThemeContext = createContext<ThemeConfig>({
	mode: "light",
	toggleMode: () => {},
});
