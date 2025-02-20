import React from "react";
import type { HealthCheckProps } from "../types/type";

function HealthCheck({ message }: HealthCheckProps) {
	return (
		<>
			<div>ヘルスチェックメッセージ</div>
			<p>{message}</p>
		</>
	);
}

export default HealthCheck;
