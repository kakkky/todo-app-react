import { useMutation } from "@tanstack/react-query";
import { login } from "./api";
import { setJWTtoCookie } from "./callbacks";

export function useLoginMutation() {
	const { mutate, isPending } = useMutation({
		mutationFn: login,
		// getCurrentUserをinvalidateする？
		onSuccess: (data) => {
			setJWTtoCookie(data);
		},
	});
	return { mutate, isPending };
}
