import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { queryOptions } from "@tanstack/react-query";
import { getCurrentUser } from "./api";
import { userKeys } from "./keys";
import { getCurrentUserSelector } from "./selector";

export const getCurrentUserOptions = queryOptions({
	queryFn: getCurrentUser,
	queryKey: userKeys.current(),
	select: getCurrentUserSelector,
	staleTime: 1000 * 60 * 60 * 24,
});
