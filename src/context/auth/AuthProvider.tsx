import React, { type ReactNode } from "react";

import { AuthContext } from "./context";
import { useAuthenticate } from "./hooks";

function AuthProvider({ children }: { children: ReactNode }) {
	const auth = useAuthenticate();
	return (
		<>
			<AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
		</>
	);
}

export default AuthProvider;
