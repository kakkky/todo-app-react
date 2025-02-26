import camelcaseKeys from "camelcase-keys";
import type { HealthCheckResponse } from "./type";

export async function getHealthCheck(): Promise<HealthCheckResponse> {
	const response = await fetch("http://localhost:8080/health");
	if (!response.ok) {
		throw new Error("Error");
	}
	return response.json().then((data) => camelcaseKeys(data, { deep: true }));
}
