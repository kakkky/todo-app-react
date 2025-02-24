import AuthProvider from "@/context/auth/AuthProvider";
import { ThemeProvider } from "@/context/theme/shadcn/ThemeProvider";
import LoadingSpinner from "@/shared/components/ui/LoadingSpinner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { Suspense, useState, type ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

type AppProviderProps = {
	children: ReactNode;
};

// QueryClientを初期化
// エクスポートしてルーティングでも受け取れるようにする
export const queryClient = new QueryClient();

function AppProvider({ children }: AppProviderProps) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<Suspense fallback={<LoadingSpinner />}>
						<ErrorBoundary fallback={<p>error</p>}>
							<AuthProvider>{children}</AuthProvider>
						</ErrorBoundary>
					</Suspense>
				</ThemeProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
}

export default AppProvider;
