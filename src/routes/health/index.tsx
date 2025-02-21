import HealhCheckContainer from "@/features/health/containers/HealhCheckContainer";
import { heatlhCheckMessageOptions } from "@/features/health/service/options";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/health/")({
	component: RouteComponent,
	loader: ({ context: { queryClient } }) => {
		return queryClient.ensureQueryData(heatlhCheckMessageOptions);
	},
	pendingComponent: () => {
		return <p>loaderのpending</p>;
	},
});

function RouteComponent() {
	return (
		<>
			<HealhCheckContainer />
		</>
	);
}
