type HealthCheckMessageProps = {
	message: string;
};

function HealthCheckMessage({ message }: HealthCheckMessageProps) {
	return (
		<>
			<p className="text-xl">Backend APIからのメッセージ：{message}</p>
		</>
	);
}

export default HealthCheckMessage;
