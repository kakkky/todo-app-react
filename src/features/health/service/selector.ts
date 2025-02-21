import type { HealthCheckMessage, HealthCheckResponse } from "./type";
// queryFnから得たデータをアプリケーションが使いやすいように変換する
export function getHealthCheckSelector(
	response: HealthCheckResponse,
): HealthCheckMessage {
	return { message: response.data.healthCheck };
}
