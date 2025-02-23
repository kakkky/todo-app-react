export type loginResponse = {
	data: {
		jwtToken: string;
	};
	status: string;
};

export type loginParams = {
	email: string;
	password: string;
};
