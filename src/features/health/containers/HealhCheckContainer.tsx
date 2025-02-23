import HealthCheckMessage from "../components/HealthCheckMessage";
import { useHealthCheckMesageQuery } from "../service/hooks";

function HealhCheckContainer() {
	const data = useHealthCheckMesageQuery();
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
