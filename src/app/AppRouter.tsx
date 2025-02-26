import { routeTree } from "@/routeTree.gen";
import { type QueryClient, useQueryClient } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
const router = (queryClient: QueryClient) => {
	return createRouter({
		routeTree,
		context: {
			queryClient,
		},
	});
};

function AppRouter() {
	const queryClient = useQueryClient();
	return (
		<>
			<RouterProvider router={router(queryClient)} />
		</>
	);
}

export default AppRouter;
