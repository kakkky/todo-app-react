import { use } from "react";

import { fetchHealthCheck } from "../api/fetch-api";
import HealthCheckMessage from "../components/HealthCheck";
import type { HealthCheck } from "../types/type";

// useはレンダリングフェーズにおいて呼ばれるPromiseには対応していないので
// レンダリング前にPromiseを用意している
const healthCheckPromise = fetchHealthCheck();
function HealhCheckContainer() {
	const result = use<HealthCheck>(healthCheckPromise);
	const data = result.data;
	const message = data.health_check;
	return (
		<>
			<HealthCheckMessage message={message} />
		</>
	);
}

export default HealhCheckContainer;
