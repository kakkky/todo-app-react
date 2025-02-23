import camelcaseKeys from "camelcase-keys";
import type { loginParams, loginResponse } from "./type";

export async function login({
	email,
	password,
}: loginParams): Promise<loginResponse> {
	const params: RequestInit = {
		method: "POST",
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	};
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch("http://localhost:8080/login", params);
	return response.json().then((data) => camelcaseKeys(data, { deep: true }));
}
