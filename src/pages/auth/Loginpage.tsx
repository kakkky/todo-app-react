import LoginFormContainer from "@/features/auth/containers/LoginFormContainer";
import React from "react";

function Loginpage() {
	return (
		<>
			<div className="flex flex-col gap-8">
				<h1 className="text-4xl mx-auto">Login</h1>
				<LoginFormContainer />
			</div>
		</>
	);
}

export default Loginpage;
