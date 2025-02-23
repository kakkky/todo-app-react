import React, { type ReactNode } from "react";

type HeaderProps = {
	children: ReactNode;
};

function Header({ children }: HeaderProps) {
	return (
		<>
			<header className="w-full  p-3 text-zinc-800 bg-zinc-300 dark:text-white dark:bg-zinc-900">
				<div className="flex items-center justify-between w-6xl mx-auto">
					<h1 className="text-3xl font-bold">Todo App</h1>
					<div className="flex items-center space-x-10 pr-16 text-black">
						{children}
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
