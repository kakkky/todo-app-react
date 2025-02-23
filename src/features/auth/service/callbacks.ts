import { useNavigate } from "@tanstack/react-router";
import type { loginResponse } from "./type";

export function setJWTtoCookie(data: loginResponse) {
	document.cookie = `jwt=${data.data.jwtToken}; path=/; secure;`;
}
