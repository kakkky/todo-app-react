import React, { type ReactNode } from "react";

type HeaderProps = {
	children: ReactNode;
};

function Header({ children }: HeaderProps) {
	return (
		<>
			<header className="flex items-center justify-between p-3  text-gray-700 bg-zinc-300 dark:text-white dark:bg-zinc-800">
				<h1 className="text-2xl font-bold">Todo App (React19 × Golang)</h1>
				<div className="flex items-center space-x-10 pr-16 text-black">
					{children}
				</div>
			</header>
		</>
	);
}

export default Header;
