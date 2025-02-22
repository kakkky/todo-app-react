import React, { type ReactNode } from "react";

type HeaderProps = {
	children: ReactNode;
};

function Header({ children }: HeaderProps) {
	return (
		<>
			<header className="bg-blue-400 text-white shadow-md flex items-center justify-between p-3">
				<h1 className="text-2xl font-bold">Todo App (React19 × Golang)</h1>
				<div className="flex items-center space-x-10 pr-16">{children}</div>
			</header>
		</>
	);
}

export default Header;
