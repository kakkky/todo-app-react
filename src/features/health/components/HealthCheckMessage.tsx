type HealthCheckMessageProps = {
	message: string;
};

function HealthCheckMessage({ message }: HealthCheckMessageProps) {
	return <>Backend APIからのメッセージ：{message}</>;
}

export default HealthCheckMessage;
