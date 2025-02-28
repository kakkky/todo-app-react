import { getCookies } from "@/shared/utils/cookie";
import camelcaseKeys from "camelcase-keys";
import type { GetCurrentUserResponseData } from "./types";

export async function getCurrentUser(): Promise<GetCurrentUserResponseData> {
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});
	const jwt = getCookies("jwt"); // CookieからJWTを抽出
	const response = await fetch("http://localhost:8080/users/me", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
	});
	if (response.status === 401) {
		return {
			data: {
				id: "",
				name: "",
			},
			status: 401,
		};
	}
	return response.json().then((data) => camelcaseKeys(data, { deep: true }));
}
