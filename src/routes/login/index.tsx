import Loginpage from "@/pages/auth/Loginpage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Loginpage />;
}
