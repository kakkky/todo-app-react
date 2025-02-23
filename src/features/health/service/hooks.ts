import { useSuspenseQuery } from "@tanstack/react-query";
import { heatlhCheckMessageOptions } from "./options";

export function useHealthCheckMesageQuery() {
	const { data } = useSuspenseQuery(heatlhCheckMessageOptions);
	return data;
}
