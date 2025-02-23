import React from "react";
import { FaUser, FaUserAltSlash } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/avatar";

function AvatarCircle() {
	return (
		<Avatar className="w-14 h-14 bg-white">
			{/* <FaUser className="w-10 h-10 m-auto text-gray-600" /> */}
			<FaUserAltSlash className="w-10 h-10 m-auto text-gray-600" />
		</Avatar>
	);
}

export default AvatarCircle;
