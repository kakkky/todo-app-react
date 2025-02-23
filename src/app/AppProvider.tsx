import AuthProvider from "@/context/auth/AuthProvider";
import { ThemeProvider } from "@/context/theme/shadcn/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState, type ReactNode } from "react";

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
				{/* <ThemeProvider>{children}</ThemeProvider> */}
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<AuthProvider>{children}</AuthProvider>
				</ThemeProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
}

export default AppProvider;
