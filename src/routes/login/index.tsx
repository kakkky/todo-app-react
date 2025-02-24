import Loginpage from "@/pages/auth/Loginpage";
import LoadingSpinner from "@/shared/components/ui/LoadingSpinner";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login/")({
	component: RouteComponent,
	pendingComponent: LoadingSpinner,
});

function RouteComponent() {
	return <Loginpage />;
}
