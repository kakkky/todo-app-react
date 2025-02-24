import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/components/shadcn/dialog";

import LoadingSpinner from "@/shared/components/ui/LoadingSpinner";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MdHealthAndSafety } from "react-icons/md";
import HealhCheckContainer from "../containers/HealhCheckContainer";
function HealthCheckDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<MdHealthAndSafety className="w-14 h-14 text-gray-700 dark:text-white" />
			</DialogTrigger>
			<DialogContent className="p-8 sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Try Health Check to Backend API...</DialogTitle>
				</DialogHeader>
				<ErrorBoundary fallback={<p>failed</p>}>
					<Suspense fallback={<LoadingSpinner />}>
						<DialogDescription className="mt-5 text-xl">
							<HealhCheckContainer />
						</DialogDescription>
					</Suspense>
				</ErrorBoundary>
			</DialogContent>
		</Dialog>
	);
}

export default HealthCheckDialog;
