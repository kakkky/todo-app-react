import { useSuspenseQuery } from "@tanstack/react-query";
import { heatlhCheckMessageOptions } from "./options";

export function useHealthCheckMesage() {
	const { data } = useSuspenseQuery(heatlhCheckMessageOptions);
	return data;
}
