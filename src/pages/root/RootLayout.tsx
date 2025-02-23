import { ThemeContext } from "@/context/theme/self-made/context";
import HealthCheckDialog from "@/features/health/components/HealthCheckDialog";
import Header from "@/shared/components/layout/Header";
import AvatarCircle from "@/shared/components/ui/AvatarCircle";
import { ModeToggle } from "@/shared/components/ui/ModeToggle";
import ThemeSwitch from "@/shared/components/ui/ThemeSwitch";
import React, { useContext, type ReactNode } from "react";

type RootLayoutProps = {
	children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<Header>
				<ModeToggle />
				<HealthCheckDialog />
				<AvatarCircle />
			</Header>
			<div className="bg-neutral-100 dark:bg-zinc-900 w-screen h-screen">
				{children}
			</div>
		</>
	);
}

export default RootLayout;
