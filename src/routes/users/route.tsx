import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			root
			<Outlet />
		</div>
	);
}
