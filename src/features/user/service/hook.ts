import { useSuspenseQuery } from "@tanstack/react-query";
import { getCurrentUserOptions } from "./option";
import type { CurrentUserInfo } from "./types";

export function useGetCurrentUserQuery(): CurrentUserInfo {
	const { data } = useSuspenseQuery(getCurrentUserOptions);
	return data;
}
