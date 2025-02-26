import AuthProvider from "@/context/auth/AuthProvider";
import { ThemeProvider } from "@/context/theme/shadcn/ThemeProvider";
import { userKeys } from "@/features/user/service/keys";
import { queryClient } from "@/queryClient";

import LoadingSpinner from "@/shared/components/ui/LoadingSpinner";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import React, { Suspense, useState, type ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

type AppProviderProps = {
	children: ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ErrorBoundary fallback={<p>error</p>}>
					<Suspense fallback={<LoadingSpinner />}>
						<AuthProvider>
							<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
								{children}
							</ThemeProvider>
						</AuthProvider>
					</Suspense>
				</ErrorBoundary>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
}

export default AppProvider;
