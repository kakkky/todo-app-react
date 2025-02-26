import { AuthContext } from "@/context/auth/context";
import LoadingSpinner from "@/shared/components/ui/LoadingSpinner";
import React, { Suspense, useContext } from "react";
import AuthenticatedUserIcon from "../components/AuthenticatedUserIcon";
import UnAuthenticatedUserIcon from "../components/UnAuthenticatedUserIcon";

function UserIconContainer() {
	const auth = useContext(AuthContext);
	return (
		<>
			{auth.isAuthenticated ? (
				<AuthenticatedUserIcon />
			) : (
				<UnAuthenticatedUserIcon />
			)}
		</>
	);
}

export default UserIconContainer;
