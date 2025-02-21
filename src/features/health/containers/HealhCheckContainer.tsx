import HealthCheckMessage from "../components/HealthCheckMessage";
import { useHealthCheckMesage } from "../service/hooks";

function HealhCheckContainer() {
	const data = useHealthCheckMesage();
	if (data == null) {
		throw new Error("fetching error");
	}
	return (
		<>
			<HealthCheckMessage message={data.message} />
		</>
	);
}

export default HealhCheckContainer;
