import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/avatar";

function AvatarCircle() {
	return (
		<Avatar className="w-16 h-16">
			<AvatarImage sizes="px" src="https://github.com/shadcn.png" />
			<AvatarFallback>N</AvatarFallback>
		</Avatar>
	);
}

export default AvatarCircle;
