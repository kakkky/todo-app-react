import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import App from "./app/App";

// Biomeでは、non-nullアサーション（！）が禁止されている
// よって、元の createRoot(root!).render{...}という記述を変更した
const root = document.getElementById("root");
if (root) {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
