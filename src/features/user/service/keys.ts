// healthCheckに関するクエリのキーを一元管理
export const userKeys = {
	all: ["user"] as const,
	current: () => [...userKeys.all, "current"],
};
