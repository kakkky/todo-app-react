import { useTheme } from "@/context/theme/shadcn/hook";
import { Moon, Sun } from "lucide-react";
import { Button } from "../shadcn/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../shadcn/dropdown-menu";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="p-6 text-xl border-0 shadow-none ring-2 ring-gray-500 dark:ring-white"
					size="icon"
				>
					<Sun className="rotate-0 scale-150 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-20 w-20 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-150 dark:text-white dark:shadow-2xl dark:shadow-white" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="dark:text-black dark:bg-white"
			>
				<DropdownMenuItem onClick={() => setTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
