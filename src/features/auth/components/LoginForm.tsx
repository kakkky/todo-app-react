import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/shadcn/form";
import { Input } from "@/shared/components/shadcn/input";
import SubmitButton from "@/shared/components/ui/SubmitButton";
import React from "react";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import type { formSchema } from "../schema/formSchema";

type LoginFormProps = {
	form: UseFormReturn<
		{
			email: string;
			password: string;
		},
		undefined
	>;
	onSubmitHandler: (values: z.infer<typeof formSchema>) => void;
	isPending: boolean;
};

function LoginForm({ form, onSubmitHandler, isPending }: LoginFormProps) {
	return (
		<>
			<Form {...form}>
				<form
					className="space-y-8"
					onSubmit={form.handleSubmit(onSubmitHandler)}
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="enter your email" {...field} />
								</FormControl>
								<FormDescription>
									Please enter the email you registered for this app.
								</FormDescription>
								<FormMessage className="text-red-500" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input placeholder="enter your password" {...field} />
								</FormControl>
								<FormDescription>
									Please enter the password you decided for this app (more than
									6).
								</FormDescription>
								<FormMessage className="text-red-500" />
							</FormItem>
						)}
					/>
					<div className="flex">
						<div className="mx-auto">
							<SubmitButton value="Submit" isLoading={isPending} size="lg" />
						</div>
					</div>
				</form>
			</Form>
		</>
	);
}

export default LoginForm;
