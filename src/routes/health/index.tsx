import HealhCheckContainer from "@/features/health/containers/HealhCheckContainer";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createFileRoute("/health/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Suspense fallback={<p>loading...</p>}>
				<HealhCheckContainer />
			</Suspense>
		</>
	);
}
