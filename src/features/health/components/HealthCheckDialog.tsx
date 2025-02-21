import LoadingSpinner from "@/shared/components/LoadingSpinner";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/components/shadcn/dialog";
import React, { Suspense } from "react";
import { MdHealthAndSafety } from "react-icons/md";
import HealhCheckContainer from "../containers/HealhCheckContainer";
function HealthCheckDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<MdHealthAndSafety className="w-14 h-14" />
			</DialogTrigger>
			<DialogContent className="p-8 sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Try Health Check to Backend API...</DialogTitle>
				</DialogHeader>
				<Suspense fallback={<LoadingSpinner />}>
					<DialogDescription className="mt-5">
						<HealhCheckContainer />
					</DialogDescription>
				</Suspense>
			</DialogContent>
		</Dialog>
	);
}

export default HealthCheckDialog;
