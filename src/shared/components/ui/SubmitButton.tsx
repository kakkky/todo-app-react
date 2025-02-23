import React from "react";
import { Button } from "../shadcn/button";

type SubmitButtonProps = {
	value: string;
	isLoading: boolean;
	size: "default" | "sm" | "lg" | "icon";
};

function SubmitButton({ value, isLoading, size }: SubmitButtonProps) {
	return (
		<>
			{isLoading ? (
				<Button
					size={size}
					className="px-11.5"
					type="submit"
					disabled
					color="black"
				>
					<div className="flex justify-center" aria-label="読み込み中">
						<div className="animate-spin h-4.5 w-4.5 border-4 border-gray-500 rounded-full border-t-transparent">
							{" "}
						</div>
					</div>
				</Button>
			) : (
				<Button size={size} color="black">
					{value}
				</Button>
			)}
		</>
	);
}

export default SubmitButton;
