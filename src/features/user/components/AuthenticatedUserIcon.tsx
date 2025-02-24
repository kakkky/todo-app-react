import React from "react";
import { FaUser, FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "../../../shared/components/shadcn/avatar";

function AuthenticatedUserIcon() {
	return (
		<Avatar className="w-14 h-14 bg-white">
			{/* <FaUser className="w-10 h-10 m-auto text-gray-600" /> */}
			<FaUser className="w-10 h-10 m-auto text-gray-600" />
		</Avatar>
	);
}

export default AuthenticatedUserIcon;
