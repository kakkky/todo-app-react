import { ThemeContext } from "@/context/theme/context";
import React, { useContext } from "react";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import { Switch } from "../shadcn/switch";

function ThemeSwitch() {
	const { mode, toggleMode } = useContext(ThemeContext);
	const handleOnClickChange = () => toggleMode("dark");
	console.log(mode);
	return (
		<>
			<div className="flex justify-between items-center space-x-4">
				<MdOutlineWbSunny className="size-8" />
				<Switch onClick={handleOnClickChange} className="transform scale-150" />
				<MdOutlineModeNight className="size-8" />
			</div>
		</>
	);
}

export default ThemeSwitch;
