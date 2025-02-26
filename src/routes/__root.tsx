import AuthProvider from "@/context/auth/AuthProvider";
import RootLayout from "@/pages/root/RootLayout";
import LoadingSpinner from "@/shared/components/ui/LoadingSpinner";
import type { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";

type RootRouteContext = {
	queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RootRouteContext>()({
	component: RouteComponent,
	pendingComponent: LoadingSpinner,
});

function RouteComponent() {
	return (
		<>
			<RootLayout>
				<Outlet />
			</RootLayout>
			<TanStackRouterDevtools />
		</>
	);
}
