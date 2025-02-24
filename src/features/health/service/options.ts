import { queryOptions } from "@tanstack/react-query";
import { getHealthCheck } from "./api";

import { healthCheckKeys } from "./key";
import { getHealthCheckSelector } from "./selector";

export const heatlhCheckMessageOptions = queryOptions({
	queryKey: healthCheckKeys.all,
	queryFn: () => getHealthCheck(),
	select: getHealthCheckSelector,
});
