export type loginResponseData = {
	data: {
		jwtToken: string;
	};
	status: string;
};

export type loginParams = {
	email: string;
	password: string;
};
