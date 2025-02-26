import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { userKeys } from "./features/user/service/keys";

export const queryClient = newQueryClient();

function newQueryClient(): QueryClient {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				gcTime: 1000 * 60 * 60 * 24, // 24 hours
			},
		},
	});

	persistQueryClient({
		queryClient,
		persister: createSyncStoragePersister({ storage: window.localStorage }),
		dehydrateOptions: {
			shouldDehydrateQuery: (query) => {
				const keys = query.queryKey.map((key) => {
					return String(key);
				});
				const allowKeys = userKeys.current();
				return (
					keys.length === allowKeys.length &&
					keys.every((key) => allowKeys.includes(key))
				);
			},
		},
	});

	return queryClient;
}
