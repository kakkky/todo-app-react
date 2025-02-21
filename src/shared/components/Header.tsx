import React from "react";

import type { ReactNode } from "@tanstack/react-router";

function Header({ children }: ReactNode) {
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
