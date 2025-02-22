import { ThemeContext } from "@/context/theme/context";
import { ThemeConfig } from "@/context/theme/type";
import HealthCheckDialog from "@/features/health/components/HealthCheckDialog";
import Header from "@/shared/components/layout/Header";
import AvatarCircle from "@/shared/components/ui/AvatarCircle";
import ThemeSwitch from "@/shared/components/ui/ThemeSwitch";
import React, { useContext, type ReactNode } from "react";

type RootLayoutProps = {
	children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
	const { mode, toggleMode } = useContext(ThemeContext);
	return (
		<>
			<Header theme={mode}>
				<ThemeSwitch />
				<HealthCheckDialog />
				<AvatarCircle />
			</Header>
			{mode === "light" ? (
				<div className="bg-neutral-100 w-screen h-screen text-black">
					{children}
				</div>
			) : (
				<div className="bg-zinc-700 w-screen h-screen text-white">
					{children}
				</div>
			)}
		</>
	);
}

export default RootLayout;
