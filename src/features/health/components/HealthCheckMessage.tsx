import React from "react";
import type { HealthCheckMessageProps } from "../types/healthCheckMessage";

function HealthCheckMessage({ message }: HealthCheckMessageProps) {
	return (
		<>
			<div>ヘルスチェックメッセージ</div>
			<p>{message}</p>
		</>
	);
}

export default HealthCheckMessage;
