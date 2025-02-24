import HealthCheckDialog from "@/features/health/components/HealthCheckDialog";
import UserIconContainer from "@/features/user/containers/UserIconContainer";
import Header from "@/shared/components/layout/Header";
import { Toaster } from "@/shared/components/shadcn/sonner";
import { ModeToggle } from "@/shared/components/ui/ModeToggle";
import { Link } from "@tanstack/react-router";
import React, { type ReactNode } from "react";

type RootLayoutProps = {
	children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<Link to="/">
				<Header>
					<UserIconContainer />
				</Header>
			</Link>
			<div className="bg-neutral-100  w-full h-screen dark:bg-black flex items-start">
				<div className="mt-8 mx-auto">{children}</div>
				<div className="flex flex-col items-center gap-4 p-4">
					<ModeToggle />
					<HealthCheckDialog />
				</div>
			</div>
			<Toaster richColors position="top-right" />
		</>
	);
}

export default RootLayout;
