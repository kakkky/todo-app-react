import HealthCheckDialog from "@/features/health/components/HealthCheckDialog";
import AvatarCircle from "@/shared/components/AvatarCircle";
import Header from "@/shared/components/Header";
import type { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

type RootRouteContext = {
	queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RootRouteContext>()({
	component: RouteComponent,
	notFoundComponent: () => {
		return <p>Not Found</p>;
	},
});

function RouteComponent() {
	return (
		<>
			<Header>
				<HealthCheckDialog />
				<AvatarCircle />
			</Header>
			<div className="bg-sky-100 w-screen h-screen">
				<Outlet />
			</div>
			<TanStackRouterDevtools />{" "}
		</>
	);
}
