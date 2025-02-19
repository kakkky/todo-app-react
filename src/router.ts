import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen"; // 自動生成されたルートツリー

export const router = createRouter({ routeTree });

// TypeScript の型安全性を維持
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
