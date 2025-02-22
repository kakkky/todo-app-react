import React, { type ReactNode } from "react";

type HeaderProps = {
	children: ReactNode;
	theme: "light" | "dark";
};

function Header({ children, theme }: HeaderProps) {
	return (
		<>
			{theme === "light" ? (
				<header className="bg-zinc-300 text-white shadow-md flex items-center justify-between p-3">
					<h1 className="text-2xl font-bold text-gray-700">
						Todo App (React19 × Golang)
					</h1>
					<div className="flex items-center space-x-10 pr-16 text-black">
						{children}
					</div>
				</header>
			) : (
				<header className="bg-zinc-800 text-white shadow-md flex items-center justify-between p-3">
					<h1 className="text-2xl font-bold">Todo App (React19 × Golang)</h1>
					<div className="flex items-center space-x-10 pr-16">{children}</div>
				</header>
			)}
		</>
	);
}

export default Header;
