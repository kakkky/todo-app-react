import RootPage from "@/pages/root/RootPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
	pendingComponent: () => {
		return <p>loagig</p>;
	},
});

function RouteComponent() {
	return (
		<>
			<RootPage />
		</>
	);
}
