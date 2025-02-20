import type { HealthCheck } from "../types/type";

export async function fetchHealthCheck(): Promise<HealthCheck> {
	await new Promise((resolve) => {
		setTimeout(resolve, 3000);
	});
	const response = await fetch("http://localhost:8080/health");
	if (!response.ok) {
		throw new Error("Error");
	}
	const result: HealthCheck = await response.json();
	return result;
}
