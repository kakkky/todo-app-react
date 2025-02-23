import HealthCheckDialog from "@/features/health/components/HealthCheckDialog";
import Header from "@/shared/components/layout/Header";
import { Toaster } from "@/shared/components/shadcn/sonner";
import AvatarCircle from "@/shared/components/ui/AvatarCircle";
import { ModeToggle } from "@/shared/components/ui/ModeToggle";
import React, { type ReactNode } from "react";

type RootLayoutProps = {
	children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<Header>
				<AvatarCircle />
			</Header>
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
