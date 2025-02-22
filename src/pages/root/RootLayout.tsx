import HealthCheckDialog from "@/features/health/components/HealthCheckDialog";
import Header from "@/shared/components/layout/Header";
import AvatarCircle from "@/shared/components/ui/AvatarCircle";
import React, { type ReactNode } from "react";

type RootLayoutProps = {
	children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<Header>
				<HealthCheckDialog />
				<AvatarCircle />
			</Header>
			<div className="bg-sky-100 w-screen h-screen">{children}</div>
		</>
	);
}

export default RootLayout;
