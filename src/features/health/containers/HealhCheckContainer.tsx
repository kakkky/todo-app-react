import HealthCheckMessage from "../components/HealthCheckMessage";
import { useHealthCheckMesage } from "../service/hooks";

function HealhCheckContainer() {
	const data = useHealthCheckMesage();
	return (
		<>
			<HealthCheckMessage message={data.message} />
		</>
	);
}

export default HealhCheckContainer;
