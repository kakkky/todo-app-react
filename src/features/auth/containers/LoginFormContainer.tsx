import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import React from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import LoginForm from "../components/LoginForm";
import { formSchema } from "../schema/formSchema";

import { toast } from "sonner";
import { useLoginMutation } from "../service/hook";

function LoginFormContainer() {
	// フォームバリデーションを適用したフォームオブジェクトs
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	// ミューテーション
	const { mutate, isPending } = useLoginMutation();
	// リダイレクト用のナビゲーション
	const navigate = useNavigate();

	// Submit時のイベントハンドラ
	const handleSubmit = (values: z.infer<typeof formSchema>) => {
		mutate(values, {
			onSuccess: () => {
				navigate({ from: "/login", to: "/" });
				toast.success("Success to Login", {
					description: "Enjoy your Todo app!",
					action: {
						label: "Close",
						onClick: () => {},
					},
				});
			},
			onError: () => {
				toast.error("Faild to Login", {
					description: "The password or email address is incorrect",
					action: {
						label: "Close",
						onClick: () => {},
					},
				});
			},
		});
	};

	return (
		<>
			<LoginForm
				form={form}
				onSubmitHandler={handleSubmit}
				isPending={isPending}
			/>
		</>
	);
}

export default LoginFormContainer;
