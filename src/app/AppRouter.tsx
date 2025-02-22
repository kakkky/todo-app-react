import { routeTree } from "@/routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import React from "react";
import { queryClient } from "./AppProvider";
// import { queryClient } from "./AppProvider";

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
const router = createRouter({
	routeTree,
	context: {
		queryClient: queryClient,
	},
});

function AppRouter() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default AppRouter;
