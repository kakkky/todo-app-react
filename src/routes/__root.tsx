import RootLayout from "@/pages/root/RootLayout";
import type { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

type RootRouteContext = {
	queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RootRouteContext>()({
	component: RouteComponent,
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
