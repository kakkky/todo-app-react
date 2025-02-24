import { createContext } from "react";
import type { AuthProviderState } from "./types";

const initialState: AuthProviderState = {
	name: "",
	id: "",
	isAuthenticated: false,
};

export const AuthContext = createContext<AuthProviderState>(initialState);
