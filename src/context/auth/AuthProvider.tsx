import React, { type ReactNode } from "react";

function AuthProvider({ children }: { children: ReactNode }) {
	return <>{children}</>;
}

export default AuthProvider;
