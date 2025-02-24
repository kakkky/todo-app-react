import type { CurrentUserInfo, GetCurrentUserResponseData } from "./types";

export function getCurrentUserSelector(
	data: GetCurrentUserResponseData,
): CurrentUserInfo {
	const result: CurrentUserInfo = {
		id: data.data.id,
		name: data.data.name,
	};
	return result;
}
