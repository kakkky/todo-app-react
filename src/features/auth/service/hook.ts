import { queryClient } from "@/app/AppProvider";
import { userKeys } from "@/features/user/service/keys";
import { setCookies } from "@/shared/utils/cookie";
import { useMutation } from "@tanstack/react-query";
import { login } from "./api";

export function useLoginMutation() {
	const { mutate, isPending } = useMutation({
		mutationFn: login,
		// getCurrentUserをinvalidateする？
		onSuccess: (data) => {
			setCookies("jwt", String(data.data.jwtToken));
			queryClient.invalidateQueries({
				queryKey: userKeys.current(),
			});
		},
	});
	return { mutate, isPending };
}
