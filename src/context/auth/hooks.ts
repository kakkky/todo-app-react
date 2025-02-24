import { useGetCurrentUserQuery } from "@/features/user/service/hook";
import { getCookies } from "@/shared/utils/cookie";
import { useContext } from "react";
import { AuthContext } from "./context";
import type { AuthProviderState } from "./types";

export function useAuthenticate(): AuthProviderState {
	const auth = useContext(AuthContext);
	const jwt = getCookies("jwt");
	if (jwt === "") {
		return {
			...auth,
			isAuthenticated: false,
		};
	}
	const { id, name } = useGetCurrentUserQuery();
	if (id === "") {
		return {
			...auth,
			isAuthenticated: false,
		};
	}
	return {
		...auth,
		name: name,
		id: id,
		isAuthenticated: true,
	};
}
